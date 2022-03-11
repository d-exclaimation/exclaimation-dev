//
//  _app.tsx
//  entry
//
//  Created by d-exclaimation on 1:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/animations/pop.css';
import '../styles/animations/slide.css';
import '../styles/animations/spin.css';
import '../styles/index.css';
import '../styles/snippet.css';
import theme from '../theme';



const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
