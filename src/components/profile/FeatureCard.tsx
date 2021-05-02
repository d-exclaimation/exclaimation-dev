//
//  FeatureCard.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:18 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';

interface Props {
    title: string,
    desc: string,
    width: number | string,
    headingColor: string,
    color: string
    font: string
}

const Feature: React.FC<Props> = ({ title, desc, width, headingColor, color, font }: React.PropsWithChildren<Props>) => {
    return (
        <Box w={width} p="2vmin">
            <Heading fontSize="xl" color={headingColor}>{title}</Heading>
            <Text mt="2vmin" fontSize={font} color={color}>{desc}</Text>
        </Box>
    );
};

export default Feature;
