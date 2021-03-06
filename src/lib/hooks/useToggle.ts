//
//  useToggle.ts
//  exclaimation
//
//  Created by d-exclaimation on 1:51 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useCallback, useReducer} from 'react';

/// Toggling State on/off
type ToggleState = {
    on: boolean,
}

/// Actions for Toggle
type ToggleActions = { type: 'toggle' } | { type: 'force', payload: boolean }

const initToggleState: ToggleState = {
    on: false,
};

const toggleReducer = (state: ToggleState, action: ToggleActions): ToggleState => ({ on: action.type === 'toggle' ? !state.on : action.payload });

/// Custom for optimize toggling
export function useToggle(): [boolean, (val?: boolean) => void] {
    const [state, dispatch] = useReducer(toggleReducer, initToggleState);
    const toggling = useCallback((val?: boolean) => 
        dispatch(val ? ({ type: 'force', payload: val }) : ({ type: 'toggle' }))
    , [dispatch]);
    return [state.on, toggling];
}
