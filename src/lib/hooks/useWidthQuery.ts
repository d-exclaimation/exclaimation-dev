//
//  useWidthQuery.ts
//  exclaimation
//
//  Created by d-exclaimation on 11:25 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useWindowSize} from './useWindow';

/// Media Query options
type MediaQuery =
    { type: 'min', minWidth: number }
    | { type: 'max', maxWidth: number }

/// Custom hooks a media query with react hooks
export function useWidthQuery(query: MediaQuery): boolean {
    const window = useWindowSize();
    switch (query.type) {
    case 'min':
        return window.width >= query.minWidth;
    case 'max':
        return window.width <= query.maxWidth;
    default:
        return false;
    }
}

/// Custom hooks media queries with react hooks
export function useWidthQueries(...queries: MediaQuery[]): boolean[] {
    const window = useWindowSize();
    return queries.map(query => {
        switch (query.type) {
        case 'min':
            return window.width >= query.minWidth;
        case 'max':
            return window.width <= query.maxWidth;
        default:
            return false;
        }
    });
}
