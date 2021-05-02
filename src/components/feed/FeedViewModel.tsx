//
//  FeedViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {SimpleGrid, Box, Flex} from '@chakra-ui/react';
import {PostSnippetFragment} from '../../models/graphql/types';
import PostPreview from './PostPreview';
import {useWidthQueries} from '../../lib/hooks/useWidthQuery';
import ShowMore from './ShowMore';
import ToggleSort from './ToggleSort';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    posts: PostSnippetFragment[]
    sort: 'latest' | 'hot',
    limit: number
}


const FeedViewModel: React.FC<Props> = ({ posts, sort, limit }: React.PropsWithChildren<Props>) => {
    const { isPortrait } = useResponsive();
    const [isMobile, isWideMobile] = useWidthQueries({type: 'max', maxWidth: 768 }, {type: 'max', maxWidth: 1000});
    return (
        <Box m="3vmin">
            <Flex justifyContent={isPortrait ? 'center' : 'flex-end'}>
                <ToggleSort sort={sort} limit={limit}/>
            </Flex>
            <SimpleGrid columns={isMobile ? 1 : isWideMobile ? 2 : 3} spacing="3vmin" my="3vmin">
                { posts.map(post  =>
                    <PostPreview
                        key={post.id}
                        post={post}
                    />
                )}
            </SimpleGrid>
            <Flex justifyContent="center">
                <ShowMore limit={limit} sort={sort}/>
            </Flex>
        </Box>
    );
};

export default FeedViewModel;
