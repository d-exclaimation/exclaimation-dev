//
//  Bio.tsx
//  personal
//
//  Created by d-exclaimation on 3:56 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Text, Box } from '@chakra-ui/react';
import { favRed } from '../constants/color.scheme';
import {useWindowSize} from '../lib/WindowConfig';

const Bio: React.FC = () => {
    const window = useWindowSize();
    const bSize = (): 'sm' | 'md' | 'lg' | 'xs' => {
        const size = (window.width / 650) * 4;
        const index = Math.floor(size) - 1;
        const all: ('xs' | 'sm' | 'md' | 'lg')[] = ['xs', 'sm', 'sm', 'lg'];
        return all[index];
    };
    return (
        <VStack spacing={5}>
            <Box
                width={window.width / 2}
                shadow="dark-lg"
                p={3} borderRadius={10}
            >
                <Text
                    fontSize={bSize()}
                    color={favRed}>
                    Hellooooooo, this is suppose to be my bio, but I can{'\''}t be asked to do so
                </Text>
            </Box>
            <Text
                p={2} color="gray.500"
                fontSize="sm"
            > { 'd-exclaimation' } </Text>
        </VStack>
    );
};

export default Bio;
