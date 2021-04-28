//
//  useResponsive.ts
//  exclaimation
//
//  Created by d-exclaimation on 10:42 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

/// Responsive State for isMobile, isPortrait, isLandscape, etc.
import {useWindowSize} from './useWindow';

type ResponsiveState = {
    isPortrait: boolean,
    isPortrait: boolean,
    isLandscape: boolean,
}

export function useResponsive(): ResponsiveState {
    const window = useWindowSize();
    return {
        isPortrait: window.width <= 765,
        isLandscape: window.width > window.height,
        isPortrait: window.width < window.height
    };
}
