//
//  _app.tsx
//  entry
//
//  Created by d-exclaimation on 1:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { Provider, createClient } from 'urql';
import { ChakraProvider} from '@chakra-ui/react';

import theme from '../theme';
import '../index.css';
import { AppProps } from 'next/app';
import {__graph__} from '../constants/uri';

const client = createClient({
    url: __graph__,
    fetchOptions: {
        credentials: 'include'
    }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider value={client}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    );
};

export default MyApp;
