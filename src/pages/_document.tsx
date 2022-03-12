import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import theme from '../theme';

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html>
                <Head/>
                <body style={{backgroundColor: 'black'}}>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default Document;
