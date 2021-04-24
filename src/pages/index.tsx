//
//  home.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Grid, GridItem, Text, Box, VStack, Center} from '@chakra-ui/react';
import RouteSideCar from '../components/shared/routes/RoutesSideBar';
import Carousel from '../components/Carousel';
import EpicProfile from '../components/EpicProfile';
import MetaHead from '../components/shared/meta/MetaHead';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import GameOfLife from '../components/conway/GameOfLife';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {useWindowSize} from '../lib/hooks/useWindow';
import {useLanguagesQuery, useProfileQuery} from '../models/graphql/types';
import {useRouter} from 'next/router';


const Index: React.FC = () => {
    const window = useWindowSize();
    const router = useRouter();
    const [{fetching, data, error}] = useProfileQuery();
    const [lang] = useLanguagesQuery();

    if(error) {
        if (typeof window !== 'undefined')
            router.push('/404').catch(console.log);
        return <LoadingScreen />;
    }
    if(fetching || lang.fetching) {
        return <LoadingScreen />;
    }

    if (!data) {
        return <LoadingScreen />;
    }

    if (!lang.data) {
        return <LoadingScreen />;
    }


    return (
        <>
            <MetaHead title={data.profile.name} description={'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'}/>
            <div className="App-header">
                <GameOfLife />
                <Grid
                    gap={4}
                >
                    <GridItem colSpan={5} rowSpan={2} mt={window.width < window.height ? '30vw' : '10vw'}>
                        <VStack>
                            <RouteSideCar/>
                            <EpicProfile name={data.profile.name}/>
                            <Box m={2}>
                                <Text
                                    align={'center'}
                                    m={2} color="#fafafa"
                                >{data.profile.bio}</Text>
                            </Box>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={1} ocacity={0} />
                    <GridItem colSpan={3}>
                        <Carousel
                            github={data.profile}
                            langName={lang.data.topLang.lang}
                            percentage={lang.data.topLang.percentage}
                        />
                    </GridItem>
                    <GridItem colSpan={1} ocacity={0} />
                    <GridItem colSpan={5}>
                        <Center>
                            <FooterDisclaimer/>
                        </Center>
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
