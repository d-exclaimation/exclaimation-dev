//
//  useResponsive.ts
//  exclaimation
//
//  Created by d-exclaimation on 10:42 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useWindowSize} from './useWindow';

/// Responsive State for isMobile, isPortrait, isLandscape, etc.
type ResponsiveState = {
    isMobile: boolean,
    isPortrait: boolean,
    isLandscape: boolean,
}

/// Custom hook to respond to different screen size
export function useResponsive(): ResponsiveState {
    const window = useWindowSize();
    return {
        isMobile: window.width <= 765,
        isLandscape: window.width > window.height,
        isPortrait: window.width < window.height
    };
}
