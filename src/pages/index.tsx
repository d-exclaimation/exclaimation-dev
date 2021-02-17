//
//  index.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Center, Text } from '@chakra-ui/react';
import Hero from '../components/Hero';
import RouteSideCar from '../components/RoutesSideBar';
import Carousel from '../components/Carousel';

import {GetServerSideProps} from 'next';
import {getProfile} from '../lib/GetGithub';
import {GithubProfile} from '../models/GithubProfile';

interface Props {
    github: GithubProfile
}


const Index: React.FC<Props> = ({ github }: Props) => {
    return (
        <header className="App-header">
            <Center>
                <VStack>
                    <RouteSideCar />
                    <Hero title={github.name} />
                    <Text m={2} color="#fafafa">{ github.bio }</Text>
                    <Carousel
                        github={github}
                    />
                </VStack>
            </Center>
        </header>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getProfile();
    return { props: { github: res } };
};

export default Index;
