//
//  pipes.ts
//  exclaimation
//
//  Created by d-exclaimation on 6:57 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
type RowReducer<T> = (prev: T[], curr: T) => T[]

type IsolatePipe<T> = (row: T) => boolean

export function isolatePlumbing<T>(isolation: IsolatePipe<T>[], join: (last: T, curr: T) => T): RowReducer<T> {
    return (prev: T[], curr: T) => {
        const last = prev.pop();
        if (last === undefined)
            return [...prev, curr];
        for (const iso of isolation) {
            if (iso(curr) || iso(last))
                return [...prev, last, curr];
        }
        return [...prev, join(last, curr)];
    };
}
