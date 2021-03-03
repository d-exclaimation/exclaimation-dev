//
//  home.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box, VStack, Center, Text, Img } from '@chakra-ui/react';
import Hero from '../components/templates/Hero';
import RouteSideCar from '../components/global/RoutesSideBar';
import Carousel from '../components/Carousel';

import {GetServerSideProps} from 'next';
import {getProfile} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import Head from 'next/head';
import EpicProfile from '../components/EpicProfile';

interface Props {
    github: GithubProfile
}


const Index: React.FC<Props> = ({ github }: Props) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="d-xclaimation"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <link rel="icon" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="manifest" href="/images/site.webmanifest" />
                <meta property="og:description"
                    content="Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here." />
                <title> { github.name } </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack>
                        <RouteSideCar/>
                        <EpicProfile name={github.name}/>
                        <Text m={2} color="#fafafa">{github.bio}</Text>
                        <Carousel
                            github={github}
                        />
                    </VStack>
                </Center>
            </header>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getProfile();
    return { props: { github: res } };
};

export default Index;
