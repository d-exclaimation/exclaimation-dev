//
//  LogoBackground.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Img } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const LogoBackground: React.FC = () => {
    const [isSpinning, setSpinning] = useState<boolean>(false);

    return ReactDOM.createPortal(
        <div className="Logo">
            <Img
                src="/svg/ex-a-logo.svg"
                className={isSpinning ? 'Spinning': ''}
                onClick={() => setSpinning(prev => !prev)}
                opacity={0.1}
                alt="My Image"
                w="min(73vmin, 25rem)"
                zIndex={0}
                style={{
                    animation: !isSpinning ? 'popUpTransparent 500ms ease-out': undefined,
                    animationFillMode: !isSpinning ? 'backwards' : undefined,
                }}
            />
        </div>
        ,document.getElementById('__next') ?? document.body);
};

export default LogoBackground;
