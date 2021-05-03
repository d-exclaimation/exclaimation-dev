//
//  MusicControlPanel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useEffect} from 'react';
import {IMedia} from '../../../models/interfaces/Media';
import {
    Button,
    DarkMode,
    HStack,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    VStack
} from '@chakra-ui/react';
import {usePlayer} from '../../../lib/hooks/useAudio';

interface Props {
    music: IMedia
    setPlaying: (state: boolean) => void
}

const MusicControlPanel: React.FC<Props> = ({music, setPlaying}: React.PropsWithChildren<Props>) => {
    const {toggleVolume, toggleAudio, isPlaying, time} = usePlayer(music.url, true);

    useEffect(() => {
        setPlaying(isPlaying);
    }, [isPlaying]);

    const timeFormat = (time: number): string => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
    };
    return (
        <VStack
            p="3vmin" bg="bg"
            minW="60vmin"
            maxW="80vw"
            borderRadius="lg"
        >
            <Slider onChangeEnd={(val) => toggleVolume(val / 100)} aria-label="slider-ex-2" colorScheme="purpled" defaultValue={50}>
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
                <DarkMode>
                    <Button
                        colorScheme={isPlaying ? 'pink' : 'teal' }
                        variant="ghost"
                        onClick={toggleAudio}
                    >
                        {isPlaying ? '■': '►'}
                    </Button>
                </DarkMode>
                <Text
                    fontSize="sm"
                    color="gray.500"
                > { music.name ?? 'Unknown Track' } </Text>

            </HStack>
        </VStack>
    );
};

export default MusicControlPanel;
