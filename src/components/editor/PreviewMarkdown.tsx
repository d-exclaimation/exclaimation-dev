//
//  PreviewMarkdown.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:11 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box} from '@chakra-ui/react';
import {overideMarkdown} from '../shared/markdown/MarkdownOveride';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    body: string,
}

const PreviewMarkdown: React.FC<Props> = ({body}: React.PropsWithChildren<Props>) => {
    const window = useWindowSize();
    return (
        <Box
            color="white"
            w={Math.floor(window.width * 0.8)} minH={Math.floor(window.height / 1.6)}
        >
            {overideMarkdown(body).map((com, idx) => {
                return <Box key={idx}>{com}</Box>;
            })}
        </Box>
    );
};

export default PreviewMarkdown;
