//
//  feed.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import MetaHead from '../components/shared/MetaHead';
import Hero from '../components/templates/Hero';
import PostFeed from '../components/feed/PostFeed';
import {Box} from '@chakra-ui/react';
import {withCustomUrql} from '../lib/ssr/withUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useAllPostQuery} from '../models/graphql/types';
import RouteSideCar from '../components/shared/RoutesSideBar';
import {useRouter} from 'next/router';
import ShowMore from '../components/feed/ShowMore';


const Feed: React.FC = () => {
    const router = useRouter();
    const limit = typeof router.query.limit === 'string' ? parseInt(router.query.limit) : 12;
    const [{fetching, error, data}] = useAllPostQuery({
        variables: {
            limit: limit
        }
    });

    if (error || (!data && !fetching))
        return <div className="App-header">
            <Hero title={'Coming Soon :)'}/>
        </div>;

    return (
        <>
            <MetaHead title={`d-exclaimation's ${data?.posts.length ?? 0} posts `} description={'My blog, rant, and just shit posts all in one bundle'} />
            <div className="App-header">
                <RouteSideCar/>
                <Box m={5}>
                    <Hero title={'Blogs and Posts'} />
                </Box>
                <PostFeed isFetching={fetching} posts={data?.posts ?? []}/>
                <ShowMore limit={limit}/>
            </div>
        </>
    );
};

export default withUrqlClient(withCustomUrql, { ssr: true })(Feed);
