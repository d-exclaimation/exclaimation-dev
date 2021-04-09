//
//  Bio.tsx
//  personal
//
//  Created by d-exclaimation on 3:56 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box } from '@chakra-ui/react';
import { favRed, nextBlue, mildGray } from '../../constants/color.scheme';
import {useWindowSize} from '../../lib/hooks/useWindow';
import Feature from '../templates/FeatureCard';

export enum Color {
    red,
    blue,
    gray,
}

interface Props {
    title: string
    bio: string,
    color: Color
}

const Bio: React.FC<Props> = ({ title, bio, color }: Props) => {
    const window = useWindowSize();
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
        <Box m={10}>
            <Feature
                title={title}
                desc={bio}
                width={Math.max(300 ,Math.floor(window.width / 1.5))}
                headingColor={'#a09c9c'}
                color={hexColor}
                font="min(16px, 3vw)"
            />
        </Box>
    );
};

export default Bio;
