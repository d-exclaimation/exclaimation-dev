//
//  MusicPlayer.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    HStack, VStack,
    Box, Button, Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb, Img,
} from '@chakra-ui/react';

import {usePlayer} from '../../lib/hooks/useAudio';
import Router from 'next/router';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';

interface Props {
    url: string,
    name: string | undefined,
}

const MusicPlayer: React.FC<Props> = ({ url, name }: Props) => {
    const { isPlaying, toggleAudio,  toggleVolume, time} = usePlayer(url, true);
    const window = useWindowSize();
    const corner = useDynamicCorner();
    const card = {
        width: Math.floor(Math.min(60, window.width / 5)),
    };

    const timeFormat = (time: number): string => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
    };

    const toggle = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            toggleAudio();
        } catch (err) {
            console.log(`${err}: ${_}`);
            Router.reload();
        }
    };

    return (
        <>
            <Box p={3} bg="white" borderRadius={200}>
                <Box p={3} bg="black" borderRadius={200}>
                    <Img className={isPlaying ? 'Spinning' : ''} src="/images/mylogo.png" />
                </Box>
            </Box>
            <Box
                p={3} bg="gray.50"
                pos="absolute" top={corner.y} right={corner.x}
                minW={card.width} boxShadow="dark-lg" borderRadius="lg" overflow="hidden"
            >
                <VStack>
                    <Slider onChangeEnd={(val) => toggleVolume(val / 100)} aria-label="slider-ex-2" colorScheme="pink" defaultValue={50}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <HStack>
                        <Text
                            fontSize="sm"
                            color="gray.500"
                        > { timeFormat(time) } </Text>
                        <Button
                            colorScheme={isPlaying ? 'red' : 'cyan' }
                            variant="ghost"
                            onClick={toggle}
                        >
                            {isPlaying ? '■': '►'}
                        </Button>
                        <Text
                            fontSize="sm"
                            color="gray.500"
                        > { name ?? 'Unknown Track' } </Text>

                    </HStack>
                </VStack>
            </Box>
        </>
    );
};

export default MusicPlayer;
