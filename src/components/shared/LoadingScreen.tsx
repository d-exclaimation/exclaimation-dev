//
//  LoadingScreen.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {CircularProgress, Img} from '@chakra-ui/react';
import {favRed} from '../../constants/color.scheme';
import {useWindowSize} from '../../lib/hooks/useWindow';

export const LoadingScreen: React.FC = () => {
    const window = useWindowSize();
    const size = Math.floor( Math.min(window.width, window.height) / 1.5);
    const pos = {
        y: Math.floor(window.height / 2) - size / 2,
        x: Math.floor(window.width / 2) - size / 2,
    };
    return (
        <div className="App-header">
            <CircularProgress isIndeterminate size="20vw" color={favRed}/>
            <Img
                pos="fixed"
                top={pos.y} left={pos.x}
                width={size} src="/images/mylogo.png"
                opacity={0.05}
                alt="My Image"
                className={'Spinning'}
                style={{ zIndex: 0 }}
            />
        </div>
    );
};

export default LoadingScreen;
