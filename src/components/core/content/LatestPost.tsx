//
//  LatestPost.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:52 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, Flex, Heading, IconButton, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useResponsive } from '../../../lib/hooks/useResponsive';
import { useLatestPostQuery, useUpRaveMutation } from '../../../models/graphql/types';

export const LatestPost: React.FC = () => {
    const {isPortrait} = useResponsive();
    const [{data, fetching, error}] = useLatestPostQuery({
        pause: typeof window === 'undefined',
    });
    const [rave, upRave] = useUpRaveMutation();

    if (error)
        return <></>;

    if (fetching)
        return <></>;

    return (
        <Flex
            className="SlideUpCard"
            p={5}
            maxW="50vmax"
            direction={isPortrait ? 'column-reverse': 'row'}
            boxShadow="lg"
            borderRadius={10}
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
                    isLoading={rave.fetching}
                    onClick={() => {
                        if(!data) return;
                        upRave({
                            id: parseInt(data.latestPost.id)
                        });
                    }}
                />
                <Text fontSize="16px" color="white" mt={!isPortrait ? 2 : 'unset'} ml={isPortrait ? 2 : 'unset'} >{data?.latestPost.crabrave ?? 0}</Text>
            </Flex>
            <Box>
                <NextLink href="/post/[id]" as={`/post/${data?.latestPost.id ?? 1}`}>
                    <Heading as={Link} color="white" fontSize="1rem">{data?.latestPost?.title ?? 'unnamed'}</Heading>
                </NextLink>
                { isPortrait || <Text color="gray.500" maxW="80%" fontSize="1rem" mt={4} mb={3} isTruncated>{data?.latestPost.snippet ?? ''}</Text>}
            </Box>
        </Flex>
    );
};

export default LatestPost;
