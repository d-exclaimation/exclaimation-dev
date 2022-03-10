//
//  Scrambled.tsx
//  exclaimation
//
//  Created by d-exclaimation on 00:19.
//

import { Flex, Text, TextProps } from '@chakra-ui/react';
import React from 'react';
import { DUDS, useScramble } from '../../../lib/hooks/useScramble';

type Props = {
    phrases: string[], 
    speed?: number, 
    delay?: number
    align?: 'center' | 'start' | 'end'
} & TextProps

const Scrambled: React.FC<Props> = ({phrases, speed, delay, align, ...props}: Props) => {
    const res = useScramble(phrases, speed ?? 25, delay ?? 1000);
    return (
        <Flex
            direction="row"
            alignItems={align ?? 'center'}
            justifyContent={align ?? 'center'}
            wrap="wrap"
        >
            {res.map((char, i) => {
                const isSpaces = char === ' ';
                const isDUDS = DUDS.indexOf(char) !== -1;
                return (
                    <Text
                        key={i}
                        fontFamily="monospace"
                        color={isDUDS ? 'gray.500' : 'gray.50'}
                        opacity={isSpaces ? 0 : 1}
                        {...props}
                    >
                        {isSpaces ? '_' : char}
                    </Text>
                );
            })}
        </Flex>
    );
};

export default Scrambled;