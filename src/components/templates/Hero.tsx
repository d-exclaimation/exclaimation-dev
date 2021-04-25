//
//  Hero.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { Heading } from '@chakra-ui/react';

interface HeroProps {
    title? : string,
}

const Hero: React.FC<HeroProps> = ({ title }: HeroProps) => {
    return (
        <Heading
            fontSize="6vw"
            bgGradient="linear(to-r, #65FFE4, #E248F2)"
            bgClip="text"
        >
            { title ?? 'Next.js' }
        </Heading>
    );
};

export default Hero;
