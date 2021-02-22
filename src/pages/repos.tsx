//
//  repos.tsx
//  personal
//
//  Created by d-exclaimation on 4:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {VStack, Text} from '@chakra-ui/react';
import Hero from '../components/templates/Hero';
import RouteSideCar from '../components/global/RoutesSideBar';
import Head from 'next/head';

import {GetServerSideProps} from 'next';
import {getRepos} from '../lib/apis/GetGithub';
import {Repo} from '../models/interfaces/Repo';
import ProjectGrid from '../components/ProjectGrid';


interface IProps {
    res: Repo[]
}


const Repos: React.FC<IProps> = ({ res }: IProps) => {

    return (
        <>
            <Head>
                <meta property="og:title" content="Exclaimation's Repos"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content="d-exclaimations public repostories and / or projects." />
                <title> d-exclaimation{ '\'s ' + res.length} projects </title>
            </Head>
            <header className="App-header">
                <VStack>
                    <RouteSideCar/>
                    <Hero title={'Projects'}/>
                    <ProjectGrid repos={res}/>
                    <Text m={2} fontSize="sm" color="gray.500">
                        Flat icons by MrSquaare
                    </Text>
                </VStack>
            </header>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getRepos();
    return { props: { res } };
};


export default Repos;
