//
//  about.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import Head from 'next/head';
import {Center, Text, VStack} from '@chakra-ui/react';
import RouteSideCar from '../components/global/RoutesSideBar';
import Bio, {Color} from '../components/Bio';

import {GetStaticProps} from 'next';
import {getProfile} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import ProfileCard from '../components/ProfileCard';
import Hero from '../components/templates/Hero';

interface Props {
    github: GithubProfile
    bio: string[]
}

const About: React.FC<Props> = ({ github, bio }: Props) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Exclaimation's about"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <link rel="icon" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="manifest" href="/images/site.webmanifest" />
                <meta property="og:description"
                    content="All about me, d-exclaimation. My bio....maybe some other personal stuff that are not really technical" />
                <title> { `${github.name}'s profile`} </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack spacing={2}>
                        <RouteSideCar/>
                        <ProfileCard imageUrl={github.avatar_url} />
                        <Hero title={github.name}/>
                        { bio.map((val, i) => {
                            return (
                                <Bio key={i} bio={val} color={Color.gray} />
                            );
                        }) }
                        <Text
                            p={10} color="gray.500"
                            fontSize="xs"
                        > { 'd-exclaimation' } </Text>
                    </VStack>
                </Center>
            </header>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await getProfile();
    const bio = [
        'Hey.....d-exclaimation here or you can call me Vincent, vin or cent. I am a programmer who can do full-stack development, and other stuff as well. ',
        'I can make Web-application or iOS for end to end client to server. I can also automate some stuff and make microservices. ',
        'I mainly use Typescript, Go, and Swift with some Rust, Python, and C#. I also usually stick a stack that consist of React, Typescript, Go, Postgres, NodeJs, and maybe GraphQL',
    ];
    return { props: { github: res, bio: bio } };
};


export default About;
