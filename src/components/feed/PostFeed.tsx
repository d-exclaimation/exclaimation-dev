//
//  PostFeed.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, SimpleGrid, Text} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {Post} from '../../models/graphql/types';
import ShowCard from '../templates/ShowCard';
import {drivePlayURL} from '../../lib/GoogleDriveURL';
import {langBar} from '../../lib/LanguageBarURL';

interface Props {
    isFetching: boolean,
    posts: ({ __typename?: 'Post' | undefined; } & Pick<Post, 'title' | 'id' | 'crabrave'>)[]
}

const DEFAULT = drivePlayURL(langBar.get('exclaim') ?? 'no-image');

const PostFeed: React.FC<Props> = ({ isFetching, posts }: Props) => {
    const window = useWindowSize();
    const grid = Math.floor(window.width / 240); 
    if(isFetching)
        return <Box>Loading...</Box>;
    
    return (
        <SimpleGrid
            columns={Math.min(3, grid)} borderRadius={10}
            p={2}
            spacing={4}
        >
            { posts.map((post, i) => 
                <ShowCard key={i} imageUrl={DEFAULT} title={post.title} body={`Crabrave: ${post.crabrave}`} url={'/feed'}/>
            )}
        </SimpleGrid>
    );
};

export default PostFeed; 
