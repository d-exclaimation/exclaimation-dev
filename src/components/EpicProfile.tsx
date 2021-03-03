//
//  EpicProfile.ts
//  exclaimation
//
//  Created by d-exclaimation on 10:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Img} from '@chakra-ui/react';
import Hero from './templates/Hero';
import {useWindowSize} from '../lib/hooks/useWindow';

interface Props {
    name: string
}

const EpicProfile: React.FC<Props> = ({ name }: Props) => {
    const window = useWindowSize();
    const size = Math.floor( Math.min(window.width, window.height) / 1.5);
    const pos = {
        y: Math.floor(window.height / 2) - size / 2,
        x: Math.floor(window.width / 2) - size / 2,
    };
    return (
        <>
            <Img
                pos="fixed"
                top={pos.y} left={pos.x}
                width={size} src="/images/mylogo.png"
                opacity={0.1}
            />
            <Box borderRadius={20}>
                <Hero title={name}/>
            </Box>
        </>
    );
};

export default EpicProfile;
