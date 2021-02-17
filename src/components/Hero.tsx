//
//  Hero.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { Heading } from '@chakra-ui/react'

interface HeroProps {
    title? : string,
}

const Hero: React.FC<HeroProps> = ({ title }: HeroProps) => {
    return (
        <Heading
            fontSize="6vw"
            color={'#ff0056'}
        >
            { title ?? 'Next.js' }
        </Heading>
    );
}

export default Hero;
