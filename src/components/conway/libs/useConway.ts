//
//  useConway.ts
//  conway
//
//  Created by d-exclaimation on 12:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {ConwayRuntime, ConwayState, ConwayFunctions} from './utils/types';
import {conwayReducer}  from './conwayReducer';
import {gliderGun} from './utils/constant';

export function useConway(): [ConwayState, ConwayFunctions] {
    const [grid, dispatch] = useReducer(conwayReducer, gliderGun);
    const [isStart, setStart] = useState(false);
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const startRef = useRef(isStart);
    startRef.current = isStart;

    const toggle = useCallback((i: number, j: number) => {
        dispatch({type: 'toggle', index: [i, j]});
    }, [dispatch]);

    const runtime: ConwayRuntime = useCallback(() => {
        if (!startRef.current)
            return;
        dispatch({type: 'runtime'});
        timeout.current = setTimeout(runtime, 50);
    }, [dispatch]);

    useEffect(() => {
        startRef.current = isStart;
        if (isStart){
            runtime();
        }
    }, [isStart, runtime]);

    useEffect(() => {
        return () => {
            if (timeout.current)
                clearTimeout(timeout.current);
        };
    }, []);

    return [
        {
            grid,
            isRunning: isStart
        },
        {
            toggleGrid: toggle,
            toggleRunning: useCallback(() => setStart(prev => !prev), [setStart])
        }
    ];
}
