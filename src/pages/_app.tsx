//
//  _app.tsx
//  entry
//
//  Created by d-exclaimation on 1:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';

import theme from '../theme';
import '../styles/index.css';
import '../styles/new.css';
import { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
