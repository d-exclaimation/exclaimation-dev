//
//  LogoBackground.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Img} from '@chakra-ui/react';

export const LogoBackground: React.FC = () => {
    const [isSpinning, setSpinning] = useState<boolean>(false);
    return (
        <Img
            pos="absolute"
            src="/svg/d.svg"
            className={`Logo ${isSpinning ? 'Spinning' : ''}`}
            onClick={() => setSpinning(prev => !prev)}
            opacity={0.1}
            alt="My Image"
            style={{
                zIndex: 0,
            }}
        />
    );
};

export default LogoBackground;
