//
//  repos.tsx
//  personal
//
//  Created by d-exclaimation on 4:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import RepoGridViewModel from '../components/projects/RepoGridViewModel';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import Hero from '../components/shared/meta/Hero';
import MetaHead from '../components/shared/meta/MetaHead';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import { createUrqlClient } from '../lib/server/createUrqlClient';
import { useReposQuery } from '../models/graphql/types';




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
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Box mt="4vh">
                        <Hero title={'Repos'}/>
                    </Box> 
                    <RepoGridViewModel repos={data.repos}/>
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
                
                </Flex>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Repos);
