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
    width: number
    headingColor: string,
    color: string
    font: string
}

const Feature: React.FC<Props> = ({ title, desc, width, headingColor, color, font }: Props) => {
    return (
        <Box w={width} m={3} p={5} shadow="md" boxShadow="dark-lg"  borderRadius={10}>
            <Heading fontSize="xl" color={headingColor}>{title}</Heading>
            <Text mt={4} fontSize={font} color={color}>{desc}</Text>
        </Box>
    );
};

export default Feature;
