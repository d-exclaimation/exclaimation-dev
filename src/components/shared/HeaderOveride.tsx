//
//  MarkdownOverrider.tss
//  exclaimation
//
//  Created by d-exclaimation on 6:04 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Heading} from '@chakra-ui/react';

export const countHeader = (row: string): JSX.Element => {
    let firstSpace = row.indexOf(' ');
    for (let i = 0; i < row.length; i++) {
        if (row[i] !== '#') {
            firstSpace = i;
            break;
        }
    }
    const head = row.slice(0, firstSpace);
    const rest = row.slice(firstSpace, row.length);
    switch (head.length) {
    case 1:
        return <Heading size="xl"> {rest}</Heading>;
    case 2:
        return <Heading size="lg"> {rest}</Heading>;
    case 3:
        return <Heading size="md"> {rest}</Heading>;
    default:
        return <Heading size="sm"> {rest}</Heading>;
    }
};
