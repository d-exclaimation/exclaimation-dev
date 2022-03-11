//
//  LatestPost.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:14 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, Flex, Heading, IconButton, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useResponsive } from '../../lib/hooks/useResponsive';
import { PostSnippetFragment, useUpRaveMutation } from '../../models/graphql/types';

interface Props {
    post: PostSnippetFragment
}

const PostPreview: React.FC<Props> = ({post}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    const [{fetching}, upRave] = useUpRaveMutation();
    return (
        <Flex
            className="SlideUpCard"
            p={5}
            direction={isPortrait ? 'column-reverse': 'row'}
            boxShadow="lg"
            borderRadius={10}
            overflow="hidden"
            bg="bg"
        >
            <Flex
                direction={isPortrait ? 'row': 'column'}
                alignItems="center" justifyContent="center"
                mt={isPortrait ? 4 : 'unset'}
                mb={isPortrait ? 3 : 'unset'}
                mr={4}
            >
                <IconButton
                    colorScheme="purpled"
                    aria-label="UpRave"
                    variant="ghost"
                    size="2vmin"
                    icon={<AiFillLike/>}
                    isLoading={fetching}
                    onClick={() => upRave({
                        id: parseInt(post.id)
                    })}
                />
                <Text fontSize="16px" color="white" mt={!isPortrait ? 2 : 'unset'} ml={isPortrait ? 2 : 'unset'}>{post.crabrave}</Text>
            </Flex>
            <Box
                overflow="clip"
            >
                <NextLink href="/post/[id]" as={`/post/${post.id}`}>
                    <Heading as={Link} color="white" fontSize="xl">{post.title}</Heading>
                </NextLink>
                { isPortrait || <Text color="gray.500" maxW="80%" fontSize="1rem" mt={4} mb={3} isTruncated>{post.snippet}</Text> }
            </Box>
        </Flex>
    );
};

export default PostPreview;
