//
//  repos.tsx
//  personal
//
//  Created by d-exclaimation on 4:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {VStack, Text} from '@chakra-ui/react';
import Hero from '../components/Hero';
import RouteSideCar from '../components/RoutesSideBar';

import {GetServerSideProps} from 'next';
import {getRepos} from '../lib/GetGithub';
import {Repo} from '../models/Repo';
import ProjectGrid from '../components/ProjectGrid';


interface IProps {
    res: Repo[]
}


const Repos: React.FC<IProps> = ({ res }: IProps) => {

    return (
        <header className="App-header">
            <VStack>
                <RouteSideCar />
                <Hero title={'Projects'}/>
                <ProjectGrid repos={res} />
                <Text m={2} fontSize="sm" color="gray.500">
                    Flat icons by MrSquaare
                </Text>
            </VStack>
        </header>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getRepos();
    return { props: { res } };
};


export default Repos;
