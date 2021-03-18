//
//  home.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Center, Text, Box } from '@chakra-ui/react';
import RouteSideCar from '../components/shared/RoutesSideBar';
import Carousel from '../components/Carousel';

import {GetServerSideProps} from 'next';
import {getProfile, getTopLang} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import Head from 'next/head';
import EpicProfile from '../components/EpicProfile';
import MetaHead from '../components/shared/MetaHead';

interface Props {
    github: GithubProfile,
    langName: string,
    percentage: number,
}


const Index: React.FC<Props> = ({ github, langName, percentage }: Props) => {
    return (
        <>
            <MetaHead title={github.name} description={'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'}/>
            <header className="App-header">
                <Center>
                    <VStack>
                        <RouteSideCar/>
                        <EpicProfile name={github.name}/>
                        <Box m={2}>
                            <Text
                                align={'center'}
                                m={2} color="#fafafa"
                            >{github.bio}</Text>
                        </Box>
                        <Carousel
                            github={github}
                            langName={langName}
                            percentage={percentage}
                        />
                    </VStack>
                </Center>
            </header>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getProfile();
    const lang = await getTopLang();
    return { props: {
        github: res,
        langName: lang.name,
        percentage: lang.percent,
    }};
};

export default Index;
