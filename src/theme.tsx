//
//  theme.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:44 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

const fonts = {mono: '\'Menlo\', monospace'};

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const theme = extendTheme({
    colors: {
        black: '#16161D',
    },
    fonts,
    breakpoints,
});

export default theme;
