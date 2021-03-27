//
//  _app.tsx
//  entry
//
//  Created by d-exclaimation on 1:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import '../index.css';
import { AppProps } from 'next/app';
import {useApollo} from '../lib/hooks/useApollo';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={apolloClient}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    );
};

export default MyApp;
