//
//  LatestPost.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:14 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {ChevronUpIcon} from '@chakra-ui/icons';
import {Box, Text, Heading, Flex, IconButton, Link} from '@chakra-ui/react';
import NextLink from 'next/link';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {PostSnippetFragment, useUpRaveMutation} from '../../models/graphql/types';
import {useDynamicSize} from '../../lib/hooks/useDynamicSize';

interface Props {
    post: PostSnippetFragment
}

const PostPreview: React.FC<Props> = ({post}: Props) => {
    const window = useWindowSize();
    const size = useDynamicSize(2);
    const [{fetching}, upRave] = useUpRaveMutation();
    const card = {
        width: Math.floor(window.width / 1.5),
        text: Math.floor(window.width / 1.5 * 0.75)
    };

    return (
        <Flex p={5} w={card.width} shadow="dark-lg" borderRadius={5}>
            <Flex direction="column"  alignItems="center" justifyContent="center" mr={4}>
                <IconButton
                    colorScheme="pink"
                    aria-label="UpRave"
                    variant="outline"
                    size={size}
                    icon={<ChevronUpIcon/>}
                    isLoading={fetching}
                    onClick={() => upRave({
                        id: parseInt(post.id)
                    })}
                />
                <Text fontSize={size} color="white" mt={2}>{post.crabrave}</Text>
            </Flex>
            <Box>
                <NextLink href="/post/[id]" as={`/post/${post.id}`}>
                    <Heading as={Link} color="white" fontSize="xl">{post.title}</Heading>
                </NextLink>
                <Text color="gray.500" fontSize="lg" mt={4} mb={3} isTruncated maxW={card.text}>{post.snippet}</Text>
            </Box>
        </Flex>
    );
};

export default PostPreview;
