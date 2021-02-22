//
//  useDynamicCorner.ts
//  app
//
//  Created by d-exclaimation on 1:39 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useWindowSize} from './useWindow';

export function useDynamicCorner(): Vector {
    const window = useWindowSize();
    return {
        x: Math.floor(Math.min(window.width * 0.005, 2)),
        y: Math.floor(Math.min(window.height * 0.005, 2))
    };
}


interface Vector {
    x: number,
    y: number
}
