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
import {useDeletePostMutation, usePostQuery} from '../../models/graphql/types';
import ContentView from '../../components/post/ContentView';
import UpRave from '../../components/post/UpRave';
import Deletion from '../../components/post/Deletion';
import {FormResult} from '../../models/enum/FormResult';


const Post: React.FC = () => {
    const router = useRouter();
    const pid = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;
    const [{data, fetching, error}] = usePostQuery({
        pause: pid === -1,
        variables: {
            id: pid
        }
    });
    const [, deletePost] = useDeletePostMutation();

    if(error) {
        if (typeof window !== 'undefined')
            router.push(`/404?post=${pid}`).catch(console.log);
        return <div className="App-header">
            <Hero title={'Please wait...'}/>
        </div>;
    }
    if(fetching)
        return <div className="App-header">fetching...</div>;
    if (!data?.post)
        return <div className="App-header">404 Not found :)</div>;

    const firstLine = data.post.nodes.length < 1 ? '' : data.post.nodes[0].leaf;

    return (
        <>
            <MetaHead title={data.post.title} description={firstLine} />
            <div className="Post-header">
                <RouteSideCar />
                <Box m={5}>
                    <Hero title={data.post.title} />
                </Box>
                <Center>
                    <ContentView post={data.post}/>
                </Center>
                <UpRave post={data.post}/>
                <Deletion deletePost={async key => {
                    try {
                        const {error} = await deletePost({id: pid, key: key});
                        return error ? FormResult.failure : FormResult.success;
                    } catch (e) {
                        return FormResult.failure;
                    }
                }}/>
            </div>
        </>
    );
};

export default withUrqlClient(withCustomUrql, {ssr: true})(Post);