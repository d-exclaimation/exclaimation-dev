//
//  DummyControlPanel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Button, HStack, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack} from '@chakra-ui/react';

export const DummyControlPanel: React.FC = () => {
    return (
        <VStack
            p="3vmin" bg="bg"
            minW="60vmin"
            maxW="80vw"
            borderRadius="lg"
        >
            <Slider aria-label="slider-ex-2" colorScheme="purpled" value={50}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            <HStack>
                <Text
                    fontSize="sm"
                    color="gray.500"
                > { '00:00' } </Text>
                <Button
                    colorScheme="tanned"
                    variant="ghost"
                >
                    {'■'}
                </Button>
                <Text
                    fontSize="sm"
                    color="gray.500"
                > {'Choose a jam'} </Text>

            </HStack>
        </VStack>
    );
};

export default DummyControlPanel;
