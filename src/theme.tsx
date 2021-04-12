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
    sm: 'min(1vw, 40em)',
    md: 'min(2vw, 52em)',
    lg: 'min(3vw, 64em)',
    xl: 'min(4vw, 80em)',
});

const theme = extendTheme({
    colors: {
        black: '#16161D',
    },
    fonts,
    breakpoints,
});

export default theme;
