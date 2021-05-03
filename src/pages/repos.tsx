//
//  repos.tsx
//  personal
//
//  Created by d-exclaimation on 4:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box, Text, HStack, Grid, GridItem} from '@chakra-ui/react';
import Hero from '../components/shared/meta/Hero';
import MetaHead from '../components/shared/meta/MetaHead';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';

import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import {useReposQuery} from '../models/graphql/types';
import {useRouter} from 'next/router';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import RepoGridViewModel from '../components/projects/RepoGridViewModel';

const Repos: React.FC = () => {
    const router = useRouter();
    const [{fetching, data, error}] = useReposQuery({
        variables: {
            limit: 30
        }
    });

    if(error) {
        if (typeof window !== 'undefined')
            router.push('/404').catch(console.log);
        return <LoadingScreen />;
    }

    if (!data) {
        return <LoadingScreen />;
    }

    if (fetching) {
        return <LoadingScreen />;
    }

    return (
        <>
            <MetaHead
                title={`d-exclaimation's ${data.repos.length} repos`}
                description={'All projects and repos made by d-exclaimation (vin). This is where you find whatever I spent most of my days doing.'}
            />
            <div className="New-header">
                <RouteNavBar/>
                <Grid
                    gap=".5rem"
                    templateAreas={`
                        't'
                        'c'
                        'c'
                        'c'
                        'f'
                    `}
                    gridTemplateRows="10vh 70vh 2vh"
                    gridTemplateColumns="auto"
                >
                    <GridItem
                        className="New-Section"
                        gridArea="t"
                    >
                        <Box mt="4vh">
                            <Hero title={'Repos'}/>
                        </Box>
                    </GridItem>

                    <GridItem
                        className="New-Section"
                        gridArea="c"
                    >
                        <RepoGridViewModel repos={data.repos}/>
                    </GridItem>
                    <GridItem
                        className="New-Section"
                        gridArea="f"
                    >
                        <HStack>
                            <Text
                                m={2}
                                fontSize="min(10px, 2vw)"
                                color="gray.500"
                            >
                                Flat icons by MrSquaare
                            </Text>
                            <FooterDisclaimer/>
                        </HStack>
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Repos);
