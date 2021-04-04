//
//  [id].tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import Hero from '../../components/templates/Hero';
import MetaHead from '../../components/shared/MetaHead';
import RouteSideCar from '../../components/shared/RoutesSideBar';
import {Box, Center} from '@chakra-ui/react';

import {withCustomUrql} from '../../lib/ssr/withUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useRouter} from 'next/router';
import {usePostQuery} from '../../models/graphql/types';
import ContentView from '../../components/post/ContentView';
import UpRave from '../../components/post/UpRave';


const Post: React.FC = () => {
    const router = useRouter();
    const pid = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;
    const [{data, fetching, error}] = usePostQuery({
        pause: pid === -1,
        variables: {
            id: pid
        }
    });

    if(error)
        return  <div className="App-header">
            <Hero title={'404 not found :)'}/>
        </div>;

    if(fetching)
        return <div className="App-header">fetching...</div>;

    if (!data?.post)
        return <div className="App-header">404 Not found :)</div>;


    return (
        <>
            <MetaHead title={data.post.title} description={`Blog post about ${data.post.title}`} />
            <div className="Post-header">
                <RouteSideCar/>
                <Box m={5}>
                    <Hero title={data.post.title}/>
                </Box>
                <Center>
                    <ContentView post={data.post}/>
                </Center>
                <UpRave post={data.post}/>
            </div>
        </>
    );
};

export default withUrqlClient(withCustomUrql, {ssr: true})(Post);
