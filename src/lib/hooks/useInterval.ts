//
//  useInterval.ts
//  exclaimation
//
//  Created by d-exclaimation on 6:23 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number): void {
    const savedCallback = useRef<() => void>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            savedCallback.current && savedCallback.current();
        };
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
