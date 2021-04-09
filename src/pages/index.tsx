//
//  home.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Grid, GridItem, Text, Box, VStack} from '@chakra-ui/react';
import RouteSideCar from '../components/shared/RoutesSideBar';
import Carousel from '../components/Carousel';

import {GetServerSideProps} from 'next';
import {getProfile, getTopLang} from '../lib/apis/GetGithub';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import EpicProfile from '../components/EpicProfile';
import MetaHead from '../components/shared/MetaHead';
import {routes} from '../lib/routes';

interface Props {
    github: GithubProfile,
    langName: string,
    percentage: number,
}


const Index: React.FC<Props> = ({ github, langName, percentage }: Props) => {
    return (
        <>
            <MetaHead title={github.name} description={'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'}/>
            <div className="App-header">
                <Grid
                    gap={4}
                >
                    <GridItem colSpan={4} rowSpan={2}>
                        <VStack>
                            <RouteSideCar/>
                            <EpicProfile name={github.name}/>
                            <Box m={2}>
                                <Text
                                    align={'center'}
                                    m={2} color="#fafafa"
                                >{github.bio}</Text>
                            </Box>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={1} ocacity={0} />
                    <GridItem colSpan={2}>
                        <Carousel
                            github={github}
                            langName={langName}
                            percentage={percentage}
                        />
                    </GridItem>
                    <GridItem colSpan={1} ocacity={0} />
                </Grid>
            </div>
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
