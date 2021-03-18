//
//  Bio.tsx
//  personal
//
//  Created by d-exclaimation on 3:56 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Text, Box } from '@chakra-ui/react';
import { favRed, nextBlue, mildGray } from '../../constants/color.scheme';
import {useWindowSize} from '../../lib/hooks/useWindow';

export enum Color {
    red,
    blue,
    gray,
}

interface Props {
    bio: string,
    color: Color
}

const Bio: React.FC<Props> = ({ bio, color }: Props) => {
    const window = useWindowSize();
    const bSize = (): 'sm' | 'md' | 'lg' | 'xs' => {
        const size = (window.width / 650) * 4;
        const index = Math.floor(size) - 1;
        const all: ('xs' | 'sm' | 'md' | 'lg')[] = ['xs', 'sm', 'sm', 'lg'];
        return all[index];
    };

    const textSize = (): 'sm' | 'md' => {
        const size = bSize();
        if (size === 'sm' || size === 'md') {
            return 'sm';
        }
        return 'md';
    };

    const hexColor = ((): string => {
        switch (color) {
        case Color.blue:
            return nextBlue;
        case Color.gray:
            return mildGray;
        case Color.red:
            return favRed;
        }
    })();

    return (
        <VStack spacing={5} m={2}>
            <Box
                width={window.width / 2}
                shadow="dark-lg"
                p={window.width > 800 ? 5 : 3} borderRadius={10}
            >
                <Text
                    fontSize={textSize()}
                    color={hexColor}>
                    { bio }
                </Text>
            </Box>
        </VStack>
    );
};

export default Bio;
