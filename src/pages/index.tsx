//
//  home.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Grid, GridItem, Text, Box, VStack, Center} from '@chakra-ui/react';
import RouteSideCar from '../components/shared/RoutesSideBar';
import Carousel from '../components/Carousel';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/withUrqlClient';
import EpicProfile from '../components/EpicProfile';
import MetaHead from '../components/shared/MetaHead';
import FooterDisclaimer from '../components/shared/FooterDisclaimer';
import {useWindowSize} from '../lib/hooks/useWindow';
import {useLanguagesQuery, useProfileQuery} from '../models/graphql/types';
import {useRouter} from 'next/router';
import {countTopLang} from '../lib/data/countTopLang';


const Index: React.FC = () => {
    const window = useWindowSize();
    const router = useRouter();
    const [{fetching, data, error}] = useProfileQuery();
    const [{data: langs}] = useLanguagesQuery();
    const { top, percentage } = countTopLang(langs?.repos);

    if (error)
        router.push('/404?nothing=true').catch(console.log);

    if (!data) {
        return <div>Loading...</div>;
    }

    if(fetching) {
        return <div className="App-header">Loading...</div>;
    }

    return (
        <>
            <MetaHead title={data.profile.name} description={'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'}/>
            <div className="App-header">
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
                            langName={top}
                            percentage={percentage}
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
