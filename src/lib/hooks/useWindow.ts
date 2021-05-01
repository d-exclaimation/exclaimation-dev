//
//  useWindow.ts
//  app
//
//  Created by d-exclaimation on 3:16 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//


import { useState, useEffect } from 'react';

/// Window Size State
type Size = {
    width: number;
    height: number;
}

/// Window resizing custom hooks
export function useWindowSize(): Size {
    // Initialize state with undefined width/height so server and client server match
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    // Handler to call on window resize
    function handleResize() {
        // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}
