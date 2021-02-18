//
//  Typography.ts
//  personal
//
//  Created by d-exclaimation on 8:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export const capitalized = (word: string): string => {
    if (!word.length)
        throw new Error('Cannot capitalize empty string');

    return word.split('')
        .map((char, i) => i === 0 ? char.toUpperCase() : char)
        .reduce((prev, curr) => prev + curr);
};

export const paragraph = (word: string): string => {
    const words = word.split(' ');
    const grouped = words.reduce((prev, curr) => {
        const rev = prev.length - 1;
        if (prev[rev].length < 10) {
            return [...prev.slice(0, rev), [...prev[rev], curr]];
        }
        return [...prev, [curr]];
    }, new Array<string[]>(1).fill([]));
    const groupJoined = grouped.map(value => value.join(' '));
    console.log(groupJoined);
    return groupJoined.join('\n');
};
