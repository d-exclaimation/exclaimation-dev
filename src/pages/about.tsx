//
//  profile.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Grid, GridItem, Box} from '@chakra-ui/react';
import ProfileCard from '../components/profile/ProfileCard';
import Hero from '../components/shared/meta/Hero';
import MetaHead from '../components/shared/meta/MetaHead';

import {GetStaticProps} from 'next';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import {BioSection} from '../models/interfaces/BioSection';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import {useResponsive} from '../lib/hooks/useResponsive';
import BioViewModel from '../components/profile/BioViewModel';

interface Props {
    name: string
    image: string
    bio: BioSection[]
}

const About: React.FC<Props> = ({ name, image, bio }: Props) => {
    const {isPortrait} = useResponsive();
    return (
        <>
            <MetaHead title={`${name}'s profile`} description={'All profile me, d-exclaimation. My bio....maybe some other personal stuff that are not really technical'}/>
            <div className="New-header">
                <RouteNavBar />
                <Grid
                    h="82vh"
                    gap=".5rem"
                    templateAreas={
                        !isPortrait ? `
                        'p  t  t'
                        'p  b  b'
                        'p  b  b'
                        'f  f  f'` : `
                        't'
                        'b'
                        'f'
                        `
                    }
                    gridTemplateRows="10vh 70vh 2vh"
                    gridTemplateColumns={ isPortrait ? 'auto' :  '40vmin auto 20vmin' }
                >
                    <GridItem
                        className="New-Section"
                        gridArea="t"
                    >
                        <Box mt="2vh">
                            <Hero title={name}/>
                        </Box>
                    </GridItem>
                    {
                        isPortrait ||
                        <GridItem
                            className="New-Section"
                            gridArea="p"
                        >
                            <ProfileCard imageUrl={image} />
                        </GridItem>
                    }
                    <GridItem
                        className="New-Section"
                        gridArea="b"
                    >
                        <BioViewModel bio={bio}/>
                    </GridItem>
                    <GridItem
                        className="New-Section"
                        gridArea="f"
                    >
                        <FooterDisclaimer/>
                    </GridItem>
                </Grid>

            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const bio: BioSection[] = [
        {title: 'Quick bio', bio: 'Hey.....d-exclaimation here or you can call me Vincent (shorthand: \'vin\' or \'cent\', up to you, I don\'t care). I am a programmer who mainly focus on full-stack development, but I do other stuff as well. '},
        {title: 'What do I do?', bio: 'I am currently still a student so I have that responsibility, but I spend a lot of time building apps, APIs, microservices, and plenty of full-stack projects. I also am in consistent grind to learn more technologies and improving my craft'},
        {title: 'My Tech Stack', bio: 'I am currently focusing on Web Apps so that will be Typescript, Go, Elixir, but I often do iOS Apps with Swift. My goto stack includes React, Typescript, Go, Postgres, NodeJs, and maybe GraphQL'},
    ];
    return { props: {
        image: 'https://avatars.githubusercontent.com/u/70748917?v=4',
        name: 'd-exclaimation',
        bio: bio
    } };
};


export default About;
