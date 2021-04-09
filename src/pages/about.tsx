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
import FooterDisclaimer from '../components/shared/FooterDisclaimer';

interface Props {
    github: GithubProfile
    bio: {title: string, bio: string}[]
}

const About: React.FC<Props> = ({ github, bio }: Props) => {
    return (
        <>
            <MetaHead title={`${github.name}'s profile`} description={'All profile me, d-exclaimation. My bio....maybe some other personal stuff that are not really technical'}/>
            <div className="App-header">
                <Center>
                    <VStack spacing={2}>
                        <RouteSideCar/>
                        <ProfileCard imageUrl={github.avatar_url} />
                        <Hero title={github.name}/>
                        { bio.map((curr, i) => {
                            return (
                                <Bio key={i} title={curr.title} bio={curr.bio} color={Color.gray} />
                            );
                        }) }
                        <FooterDisclaimer/>
                    </VStack>
                </Center>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await getProfile();
    const bio: {title: string, bio: string}[] = [
        {title: 'Quick bio', bio: 'Hey.....d-exclaimation here or you can call me Vincent (shorthand: \'vin\' or \'cent\', up to you). I am a programmer who can do full-stack development, and other stuff as well. '},
        {title: 'What do I do?', bio: 'I can make Web-application or iOS for end to end client to server. I can also automate some stuff and make microservices. '},
        {title: 'My Tech Stack', bio: 'I mainly use Typescript, Go, Swift, and Rust with some Elixir, and C#. I also usually stick a stack that consist of React, Typescript, Go, Postgres, NodeJs, and maybe GraphQL'},
    ];
    return { props: { github: res, bio: bio } };
};


export default About;
