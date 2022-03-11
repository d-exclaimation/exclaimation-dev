//
//  BackgroundEntertainment.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { useSequence } from '../../../lib/hooks/useSequence';
import ConwayBackground from './conway/ConwayBackground';
import FeatureCycleButton from './FeatureCycleButton';
import LogoBackground from './LogoBackground';

type Entertainments = 'game-of-life' | 'logo-spinning' | 'none'

export const BackgroundViewModel: React.FC = () => {
    const [curr, cycle] = useSequence<Entertainments>('none', 'game-of-life', 'logo-spinning');

    switch (curr) {
    case 'game-of-life':
        return (
            <>
                <FeatureCycleButton cycle={cycle}/>
                <ConwayBackground/>
            </>
        );
    case 'logo-spinning':
        return (
            <>
                <FeatureCycleButton cycle={cycle}/>
                <LogoBackground />
            </>
        );
    default:
        return (
            <>
                <FeatureCycleButton cycle={cycle}/>
            </>
        );
    }
};

export default BackgroundViewModel;
