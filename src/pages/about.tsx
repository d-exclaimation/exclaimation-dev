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
import RouteSideCar from '../components/global/RoutesSideBar';
import Bio from '../components/Bio';

import {GetServerSideProps} from 'next';
import {getProfile} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import ProfileCard from '../components/ProfileCard';
import Hero from '../components/templates/Hero';

interface Props {
    github: GithubProfile
    bio: string
}

const About: React.FC<Props> = ({ github, bio }: Props) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Exclaimation's about"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
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
                        <Bio bio={bio} />
                    </VStack>
                </Center>
            </header>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getProfile();
    const bio = new Array<string>(120)
        .fill('a')
        .map(val => Math.round(Math.random()) ? val.toUpperCase() : val.toLowerCase())
        .join('');
    return { props: { github: res, bio: bio } };
};


export default About;
