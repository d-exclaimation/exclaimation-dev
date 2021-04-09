//
//  index.tsx
//  exclaimation
//
//  Created by d-exclaimation on 6:02 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import MetaHead from '../../components/shared/MetaHead';
import Hero from '../../components/templates/Hero';
import PostFeed from '../../components/feed/PostFeed';
import {Box} from '@chakra-ui/react';
import {createUrqlClient} from '../../lib/server/withUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useAllPostQuery} from '../../models/graphql/types';
import RouteSideCar from '../../components/shared/RoutesSideBar';
import {useRouter} from 'next/router';
import ShowMore from '../../components/feed/ShowMore';
import ToggleSort from '../../components/feed/ToggleSort';
import FooterDisclaimer from '../../components/shared/FooterDisclaimer';


const Feed: React.FC = () => {
    const router = useRouter();
    const limit = typeof router.query.limit === 'string' ? parseInt(router.query.limit) : 12;
    const by: 'latest' | 'hot' = typeof router.query.sort === 'string' ? router.query.sort === 'hot' ? 'hot' : 'latest' : 'latest';
    const [{fetching, error, data}] = useAllPostQuery({
        variables: {
            limit: limit,
            by: by
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
                <ToggleSort sort={by} limit={limit}/>
                <Box m={5} mt="min(10px, 40vw)">
                    <Hero title={'Blogs and Posts'}/>
                </Box>
                <PostFeed isFetching={fetching} posts={data?.posts ?? []}/>
                <ShowMore limit={limit} sort={by}/>
                <FooterDisclaimer/>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Feed);
