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

import {createUrqlClient} from '../../lib/server/createUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useRouter} from 'next/router';
import {useDeletePostMutation, useMeQuery, usePostQuery} from '../../models/graphql/types';
import ContentView from '../../components/post/ContentView';
import UpRave from '../../components/post/UpRave';
import Deletion from '../../components/post/Deletion';
import {FormResult} from '../../models/enum/FormResult';
import FooterDisclaimer from '../../components/shared/FooterDisclaimer';
import LoadingScreen from '../../components/shared/LoadingScreen';


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
    const [credentials] = useMeQuery();

    if(error) {
        if (typeof window !== 'undefined')
            router.push(`/404?post=${pid}`).catch(console.log);
        return <LoadingScreen />;
    }
    if(fetching)
        return <LoadingScreen />;
    if (!data?.post)
        return <LoadingScreen />;

    const firstLine = data.post.nodes.length < 1 ? '' : data.post.nodes[0].leaf;

    return (
        <>
            <MetaHead title={data.post.title} description={firstLine} />
            <div className="Post-header">
                <RouteSideCar />
                <UpRave post={data.post}/>
                <Box mx="auto">
                    <Hero title={data.post.title} />
                </Box>
                <Center>
                    <ContentView post={data.post}/>
                </Center>
                {
                    !credentials.fetching && !credentials.error
                    &&
                    <Deletion deletePost={async () => {
                        try {
                            const {error} = await deletePost({id: pid});
                            return error ? FormResult.failure : FormResult.success;
                        } catch (e) {
                            return FormResult.failure;
                        }
                    }}/>
                }
                <FooterDisclaimer/>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Post);
