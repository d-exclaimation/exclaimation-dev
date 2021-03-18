//
//  profile.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Center, Text, VStack} from '@chakra-ui/react';
import RouteSideCar from '../components/shared/RoutesSideBar';
import Bio, {Color} from '../components/profile/Bio';
import ProfileCard from '../components/profile/ProfileCard';
import Hero from '../components/templates/Hero';
import MetaHead from '../components/shared/MetaHead';

import {GetStaticProps} from 'next';
import {getProfile} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';

interface Props {
    github: GithubProfile
    bio: string[]
}

const About: React.FC<Props> = ({ github, bio }: Props) => {
    return (
        <>
            <MetaHead title={`${github.name}'s profile`} description={'All profile me, d-exclaimation. My bio....maybe some other personal stuff that are not really technical'}/>
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
