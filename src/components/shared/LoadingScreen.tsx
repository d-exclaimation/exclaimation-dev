//
//  LoadingScreen.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Spinner} from '@chakra-ui/react';
import {favRed} from '../../constants/color.scheme';

export const LoadingScreen: React.FC = () => {
    return (
        <div className="App-header">
            <Spinner
                thickness="1vw"
                speed="1s"
                color={favRed}
                size="xl"
            />
        </div>
    );
};

export default LoadingScreen;
