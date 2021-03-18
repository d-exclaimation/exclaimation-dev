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

import {GetServerSideProps} from 'next';
import {getRepos} from '../lib/apis/GetGithub';
import {Repo} from '../models/interfaces/Repo';
import ProjectGrid from '../components/ProjectGrid';
import MetaHead from '../components/global/MetaHead';


interface IProps {
    res: Repo[]
}


const Repos: React.FC<IProps> = ({ res }: IProps) => {

    return (
        <>
            <MetaHead title={`d-exclaimation's ${res.length} repos`} description={'All projects and repos made by d-exclaimation (vin). This is where you find whatever I spent most of my days doing.'}/>
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
