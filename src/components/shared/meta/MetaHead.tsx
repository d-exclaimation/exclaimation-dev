//
//  MetaHead.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:47 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import Head from 'next/head';
import React from 'react';

interface Props {
    title: string
    description: string
}
const MetaHead: React.FC<Props> = ({title, description}: React.PropsWithChildren<Props>) => {
    return (
        <Head>
            <meta property="title" content={title}/>
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://dexclaimation.com/"/>
            <meta property="og:image" content="/images/doge.jpeg"/>
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="manifest" href="/images/site.webmanifest" />
            <meta property="description" content={description}/>
            <meta property="og:description"
                content={description} />
            <title> { title } </title>
        </Head>
    );
};

export default MetaHead;
