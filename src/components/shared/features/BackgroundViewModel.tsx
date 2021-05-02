//
//  BackgroundEntertainment.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useEffect, useRef} from 'react';
import {useSequence} from '../../../lib/hooks/useSequence';
import LogoBackground from './LogoBackground';
import FeatureCycleButton from './FeatureCycleButton';
import ConwayBackground from './conway/ConwayBackground';

type Entertainments = 'game-of-life' | 'logo-spinning' | 'none'

export const BackgroundViewModel: React.FC<{isHome?: boolean}> = ({isHome}: {isHome?: boolean}) => {
    const [curr, cycle] = useSequence<Entertainments>('none', 'logo-spinning', 'game-of-life');
    const timeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!isHome)
            return;
        // Animation delay is too rigid, I just want the first render to have the delay
        timeout.current = setTimeout(() => cycle(), 1200);
        return () => {
            if (timeout.current)
                clearTimeout(timeout.current);
        };
    }, []);

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
