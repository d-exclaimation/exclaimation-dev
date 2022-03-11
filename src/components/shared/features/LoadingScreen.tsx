//
//  LoadingScreen.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Spinner } from '@chakra-ui/react';
import React from 'react';

// Loading screen with proper color
export const LoadingScreen: React.FC = () => {
    return (
        <div className="New-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner
                thickness="1vw"
                speed="1s"
                color="white"
                size="xl"
            />
        </div>
    );
};

export default LoadingScreen;
