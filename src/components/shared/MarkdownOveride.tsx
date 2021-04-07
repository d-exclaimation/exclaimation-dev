//
//  MarkdownOveride.tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:42 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {countHeader} from './HeaderOveride';
import {isolatePlumbing} from '../../lib/apis/pipes';
import {Box} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

export const overideMarkdown = (body: string) => {
    return body.split('\n')
        .reduce(isolatePlumbing<string>([
            (row) => row.startsWith('#'),
            (row) => row === ''
        ], (last, curr) => last + '\n' + curr), [])
        .map(val => {
            if (val.startsWith('#'))
                return countHeader(val);
            if (val === '')
                return <Box m={4}/>;
            return <ReactMarkdown source={val}/>;
        });
};
