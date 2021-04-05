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
    color? : string,
}

const Hero: React.FC<HeroProps> = ({ title, color }: HeroProps) => {
    const hex = color || '#ff0056';
    return (
        <Heading
            fontSize="6vw"
            color={hex}
        >
            { title ?? 'Next.js' }
        </Heading>
    );
};

export default Hero;
