//
//  MarkdownOveride.tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:42 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { isolatePlumbing } from '../../../lib/data/pipes';
import { countHeader } from './HeaderOveride';

export const overideMarkdown = (body: string): JSX.Element[] => {
    return body.split('\n')
        .reduce(isolatePlumbing<string>([
            (row) => row.startsWith('#'),
            (row) => row === ''
        ], (last, curr) => last + '\n' + curr), [])
        .map((val, i) => {
            if (val.startsWith('#'))
                return countHeader(val);
            if (val === '')
                return <Box key={i} m={4}/>;
            return <div key={i}><ReactMarkdown>{val}</ReactMarkdown></div>;
        });
};
