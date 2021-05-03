//
//  LogoBackground.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Img} from '@chakra-ui/react';
import ReactDOM from 'react-dom';

export const LogoBackground: React.FC = () => {
    const [isSpinning, setSpinning] = useState<boolean>(false);

    return ReactDOM.createPortal(
        <Img
            pos="absolute"
            src="/svg/ex-face.svg"
            className={`Logo ${isSpinning ? 'Spinning' : ''}`}
            onClick={() => setSpinning(prev => !prev)}
            opacity={0.1}
            alt="My Image"
            w="75vmin"
            zIndex={0}
            style={{
                animation: !isSpinning ? 'popUpTransparent 500ms ease-out': undefined,
                animationFillMode: !isSpinning ? 'backwards' : undefined,
            }}
        />
        ,document.getElementById('__next') ?? document.body);
};

export default LogoBackground;
