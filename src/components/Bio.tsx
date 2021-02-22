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
import {useWindowSize} from '../lib/hooks/useWindow';

interface Props {
    bio: string
}

const Bio: React.FC<Props> = ({ bio }: Props) => {
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
                p={window.width > 800 ? 5 : 3} borderRadius={10}
            >
                <Text
                    fontSize={bSize()}
                    color={favRed}>
                    { bio }
                </Text>
            </Box>
            <Text
                p={10} color="gray.500"
                fontSize="xs"
            > { 'd-exclaimation' } </Text>
        </VStack>
    );
};

export default Bio;
