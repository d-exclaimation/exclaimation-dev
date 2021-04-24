//
//  useSequence.ts
//  exclaimation
//
//  Created by d-exclaimation on 9:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useCallback, useReducer} from 'react';

/// Available actions for Sequence Reducer
type SequenceActions =
    { type: 'cycle' }
    | { type: 'set', payload: number }

/// Reducer for the Sequencing state
type SequenceReducer<T> = (state: T[], action: SequenceActions) => T[]

/// Cycle through the sequence
type SequenceCycler = () => void

function sequenceReducer<T>(): SequenceReducer<T>  {
    return (state: T[], action: SequenceActions): T[] => {
        switch (action.type) {
        case 'cycle':
            return state.length ? [...state.slice(1, state.length), state[0]] : [];
        case 'set':
            return [
                ...state.filter((_, idx) => idx == action.payload),
                ...state.filter((_, idx) =>  idx != action.payload)
            ];
        default:
            return state;
        }
    };
}

/// Create a state of T and cycling function to show items in sequence when cycled
export function useSequence<T>(...seq: T[]): [T, SequenceCycler] {
    const [state, dispatch] = useReducer(sequenceReducer<T>(), seq);
    const cycle: SequenceCycler = useCallback(() => {
        dispatch({type: 'cycle'});
    }, [dispatch]);

    return [state[0], cycle];
}
