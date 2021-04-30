//
//  profile.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Center, VStack} from '@chakra-ui/react';
import RouteSideCar from '../components/shared/routes/RoutesSideBar';
import Bio, {Color} from '../components/profile/Bio';
import ProfileCard from '../components/profile/ProfileCard';
import Hero from '../components/templates/Hero';
import MetaHead from '../components/shared/meta/MetaHead';

import {GetStaticProps} from 'next';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import {BioSection} from '../models/interfaces/BioSection';
import RouteNavBar from '../components/shared/routes/RouteNavBar';

interface Props {
    name: string
    image: string
    bio: BioSection[]
}

const About: React.FC<Props> = ({ name, image, bio }: Props) => {
    return (
        <>
            <MetaHead title={`${name}'s profile`} description={'All profile me, d-exclaimation. My bio....maybe some other personal stuff that are not really technical'}/>
            <div className="App-header">
                <RouteNavBar />
                <VStack spacing={2}>
                    <ProfileCard imageUrl={image} />
                    <Hero title={name}/>
                    { bio.map((curr, i) => {
                        return (
                            <Bio key={i} title={curr.title} bio={curr.bio} color={Color.gray} />
                        );
                    }) }
                    <FooterDisclaimer/>
                </VStack>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const bio: BioSection[] = [
        {title: 'Quick bio', bio: 'Hey.....d-exclaimation here or you can call me Vincent (shorthand: \'vin\' or \'cent\', up to you). I am a programmer who can do full-stack development, and other stuff as well. '},
        {title: 'What do I do?', bio: 'I can make Web-application or iOS for end to end client to server. I can also automate some stuff and make microservices. '},
        {title: 'My Tech Stack', bio: 'I mainly use Typescript, Go, Swift, and Rust with some Elixir, and C#. I also usually stick a stack that consist of React, Typescript, Go, Postgres, NodeJs, and maybe GraphQL'},
    ];
    return { props: {
        image: 'https://avatars.githubusercontent.com/u/70748917?v=4',
        name: 'd-exclaimation',
        bio: bio
    } };
};


export default About;
