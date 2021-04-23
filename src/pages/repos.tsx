//
//  repos.tsx
//  personal
//
//  Created by d-exclaimation on 4:50 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {VStack, Text, HStack} from '@chakra-ui/react';
import Hero from '../components/templates/Hero';
import RouteSideCar from '../components/shared/RoutesSideBar';
import ProjectGrid from '../components/projects/ProjectGrid';
import MetaHead from '../components/shared/MetaHead';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';

import FooterDisclaimer from '../components/shared/FooterDisclaimer';
import {useReposQuery} from '../models/graphql/types';
import {useRouter} from 'next/router';
import LoadingScreen from '../components/shared/LoadingScreen';

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
            <div className="App-header">
                <VStack>
                    <RouteSideCar/>
                    <Hero title={'Repos'}/>
                    <ProjectGrid repos={data.repos}/>
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
                </VStack>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Repos);
