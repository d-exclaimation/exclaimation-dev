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
