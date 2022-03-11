//
//  PreviewMarkdown.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:11 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box } from '@chakra-ui/react';
import React from 'react';
import { useResponsive } from '../../lib/hooks/useResponsive';
import { overideMarkdown } from '../shared/markdown/MarkdownOveride';

interface Props {
    body: string,
}

const PreviewMarkdown: React.FC<Props> = ({body}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    return (
        <Box
            p={isPortrait ? 2 : 4}
            minW="80vw" minH="62.5vh"
            boxSize="lg"
            bg="bg"
            color="gray.100"
        >
            {overideMarkdown(body).map((com, idx) => {
                return <Box key={idx}>{com}</Box>;
            })}
        </Box>
    );
};

export default PreviewMarkdown;
