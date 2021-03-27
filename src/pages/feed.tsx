//
//  feed.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {useAllPostQuery} from '../models/graphql/types';
import MetaHead from '../components/shared/MetaHead';
import PostFeed from '../components/feed/PostFeed';


const Feed: React.FC = () => {
    const [{fetching, error, data}] = useAllPostQuery();

    if (error || !data)
        return <div className="App-header">Cannot find any data</div>;

    return (
        <>
            <MetaHead title={`d-exclaimation's ${data.posts.length} posts `} description={'My blog, rant, and just shit posts all in one bundle'} />
            <div className="App-header">
                <PostFeed isFetching={fetching} posts={data.posts}/>
            </div>
        </>
    );
};

export default Feed;
