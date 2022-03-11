//
//  Hero.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { DUDS, useScramble } from '../../../lib/hooks/useScramble';

interface HeroProps {
    title? : string,
    oneWord?: boolean,
}

const Hero: React.FC<HeroProps> = ({ title, oneWord }: HeroProps) => {
    const res = useScramble(oneWord ? [title ?? 'Nothing'] : [title ?? 'Nothing', `This is my ${title?.toLowerCase() ?? 'stuff'}`, 'Enjoy'], 10, 5000);
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
        >
            {res.map((char, i) => {
                const isSpaces = char === ' ';
                const isDUDS = DUDS.indexOf(char) != -1;
                return (
                    <Text
                        key={i}
                        fontFamily="monospace"
                        color={isDUDS ? 'gray.500' : 'gray.50'}
                        fontSize="6vw"
                        opacity={isSpaces ? 0 : 1}
                    >
                        {isSpaces ? '_' : char}
                    </Text>
                );
            })}
        </Flex>
    );
};

export default Hero;
