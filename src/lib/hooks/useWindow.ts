//
//  useWindow.ts
//  app
//
//  Created by d-exclaimation on 3:16 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//


import { useState, useEffect } from 'react';

export function useWindowSize(): Size {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

interface Size {
    width: number;
    height: number;
}
