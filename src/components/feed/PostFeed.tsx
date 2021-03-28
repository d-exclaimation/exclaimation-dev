//
//  PostFeed.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {SimpleGrid, Text} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {Post, useUpRaveMutation} from '../../models/graphql/types';
import PostPreview from './PostPreview';

interface Props {
    isFetching: boolean,
    posts: ({ __typename?: 'Post' | undefined; } & Pick<Post, 'title' | 'id' | 'crabrave'>)[]
}


const PostFeed: React.FC<Props> = ({ isFetching, posts }: Props) => {
    const [, upRave] = useUpRaveMutation();
    const window = useWindowSize();
    const grid = Math.floor(window.width / 240); 
    if(isFetching)
        return <Text color="#fafafa">Loading...</Text>;
    
    return (
        <>
            <SimpleGrid
                columns={Math.min(3, grid)} borderRadius={10}
                p={2}
                spacing={4}
            >
                { posts.map(post  =>
                    <PostPreview
                        key={post.id}
                        title={post.title}
                        crabrave={post.crabrave}
                        url={'/feed'}
                        upRave={async () => {
                            await upRave({ id: parseInt(post.id) });
                        }}
                    />
                )}
            </SimpleGrid>
        </>
    );
};

export default PostFeed; 
