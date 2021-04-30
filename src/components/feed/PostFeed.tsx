//
//  PostFeed.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {VStack, Text} from '@chakra-ui/react';
import {PostSnippetFragment} from '../../models/graphql/types';
import PostPreview from './PostPreview';

interface Props {
    isFetching: boolean,
    posts: PostSnippetFragment[]
}


const PostFeed: React.FC<Props> = ({ isFetching, posts }: React.PropsWithChildren<Props>) => {
    if(isFetching)
        return <Text color="#fafafa">Loading...</Text>;
    
    return (
        <VStack
            borderRadius={10}
            p={2}
            spacing={8}
        >
            { posts.map(post  =>
                <PostPreview
                    key={post.id}
                    post={post}
                />
            )}
        </VStack>
    );
};

export default PostFeed; 
