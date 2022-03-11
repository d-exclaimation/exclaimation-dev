//
//  MusicDisc.tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Img } from '@chakra-ui/react';
import React from 'react';

interface Props {
   isPlaying: boolean
}

const MusicDisc: React.FC<Props> = ({isPlaying}: React.PropsWithChildren<Props>) => {
    return (
        <Img
            className={isPlaying ? 'Spinning' : undefined}
            zIndex={0}
            w="min(60vw, 40vh)"
            src="svg/disc.svg"
            alt="disc"
            border="2px"
            borderColor="#212121"
            borderRadius="50%"
        />
    );
};

export default MusicDisc;
