//
//  Bio.tsx
//  personal
//
//  Created by d-exclaimation on 3:56 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box } from '@chakra-ui/react';
import Feature from '../templates/FeatureCard';


interface Props {
    title: string
    bio: string,
}

const Bio: React.FC<Props> = ({ title, bio  }: React.PropsWithChildren<Props>) => {
    return (
        <Box>
            <Feature
                title={title}
                desc={bio}
                width="60vw"
                headingColor="tan"
                color="purple"
                font="min(16px, 3vw)"
            />
        </Box>
    );
};

export default Bio;
