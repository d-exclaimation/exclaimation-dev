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
        tan: '#FCD6CE',
        purple: '#9B8FC0',
        popRed: '#FF0056',
        mint: '#6AFFE5',
        grey: '#4D5460',
        tanned: {
            900: '#ffa796',
            800: '#fdad9c',
            700: '#ffb1a0',
            600: '#ffb7a8',
            500: '#ffbbae',
            400: '#ffc1b4',
            300: '#ffc6bb',
            200: '#ffd0c6',
            100: '#ffe3de',
        },
        purpled: {
            900: '#745fb2',
            800: '#7b69b7',
            700: '#8472bb',
            600: '#8c7bbf',
            500: '#9484c3',
            400: '#9b8cc8',
            300: '#a394cc',
            200: '#bcb2da',
            100: '#dcd6ec',
        }
    },
    fonts,
    breakpoints,
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    }
});

export default theme;
