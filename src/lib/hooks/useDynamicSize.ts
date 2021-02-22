//
//  useDynamicSize.ts
//  app
//
//  Created by d-exclaimation on 1:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useWindowSize} from './useWindow';

export function useDynamicSize(): 'sm' | 'md' | 'lg' | 'xs' {
    const window = useWindowSize();
    const size = (window.width / 1300) * 4;
    const index = Math.floor(size) - 1;
    const all: ('xs' | 'sm' | 'md' | 'lg')[] = ['xs', 'sm', 'sm', 'lg'];
    return all[index];
}
