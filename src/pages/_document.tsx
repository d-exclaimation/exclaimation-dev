import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import theme from '../theme';

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html>
                <Head/>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default Document;
