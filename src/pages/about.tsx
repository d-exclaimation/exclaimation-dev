//
//  about.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import Head from 'next/head';
import {Center, Text, VStack } from '@chakra-ui/react';
import RouteSideCar from '../components/RoutesSideBar';
import Bio from '../components/Bio';

import {GetServerSideProps} from 'next';
import {getProfile} from '../lib/GetGithub';
import {GithubProfile} from '../models/GithubProfile';
import ProfileCard from '../components/ProfileCard';
import Hero from '../components/Hero';

interface Props {
    github: GithubProfile
}

const About: React.FC<Props> = ({ github }: Props) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Exclaimation's about"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content="d-exclaimations about page" />
                <title> { `${github.name}'s profile`} </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack spacing={2}>
                        <RouteSideCar/>
                        <ProfileCard imageUrl={github.avatar_url} />
                        <Hero title={github.name}/>
                        <Bio />
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


export default About;
