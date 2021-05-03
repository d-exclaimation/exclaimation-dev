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
type SequenceReducer<T> = (state: Node<T>, action: SequenceActions) => Node<T>

/// Cycle through the sequence
type SequenceCycler = () => void


class Node<T> {
    val: T;
    next: Node<T> | null;
    constructor(val: T, next: Node<T> | null = null) {
        this.val = val;
        this.next = next;
    }

    append(node: Node<T>) {
        if (this.next !== null)
            this.next.append(node);
        else
            this.next = node;
    }

    get forward(): Node<T> {
        if(!this.next)
            return this;
        return this.next;
    }

    shift(count: number): Node<T> {
        if (!count)
            return this;
        if (!this.next)
            return this;
        return this.next.shift(count - 1);
    }

    static constructorFromArray<T>(seq: T[]): Node<T> | null {
        if (!seq.length)
            return null;
        return new Node<T>(seq[0], Node.constructorFromArray(seq.slice(1, seq.length)));
    }
}

function createNode<T>(seq: T[]): Node<T> {
    const node = Node.constructorFromArray(seq);
    if (!node)
        throw new Error('No value');
    node.append(node);
    return node;
}

function sequenceReducer<T>(): SequenceReducer<T>  {
    return (state: Node<T>, action: SequenceActions): Node<T> => {
        switch (action.type) {
        case 'cycle':
            return state.forward;
        case 'set':
            return state.shift(action.payload);
        default:
            return state;
        }
    };
}

/// Create a state of T and cycling function to show items in sequence when cycled
export function useSequence<T>(...seq: T[]): [T, SequenceCycler] {
    const [state, dispatch] = useReducer(sequenceReducer<T>(), createNode(seq));
    const cycle: SequenceCycler = useCallback(() => {
        dispatch({type: 'cycle'});
    }, [dispatch]);

    return [state.val, cycle];
}
