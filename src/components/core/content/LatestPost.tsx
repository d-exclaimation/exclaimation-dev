//
//  LatestPost.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:52 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Flex, Heading, IconButton, Link, Text} from '@chakra-ui/react';
import {ChevronUpIcon} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {usePostQuery} from '../../../models/graphql/types';
import {useResponsive} from '../../../lib/hooks/useResponsive';

export const LatestPost: React.FC = () => {
    const {isMobile} = useResponsive();
    const [{data, fetching, error}] = usePostQuery({
        pause: typeof window === 'undefined',
        variables: {
            id: 21
        }
    });

    if (error)
        return <></>;

    return (
        <Flex
            className="SlideUpCard"
            p={5}
            maxW="50vmax"
            direction={isMobile ? 'column-reverse': 'row'}
            boxShadow="dark-lg"
            borderRadius={10}
            zIndex={1}
            bgColor="bg"
        >
            <Flex
                direction={isMobile ? 'row': 'column'}
                alignItems="center"
                justifyContent="center"
                mt={isMobile ? 4 : 'unset'}
                mb={isMobile ? 3 : 'unset'}
                mr={4}
            >
                <IconButton
                    colorScheme="purpled"
                    aria-label="UpRave"
                    variant="outline"
                    size="2vmin"
                    icon={<ChevronUpIcon/>}
                    isLoading={fetching}
                    // onClick={() => upRave({
                    //     id: parseInt(post.id)
                    // })}
                />
                <Text fontSize="16px" color="white" mt={!isMobile ? 2 : 'unset'} ml={isMobile ? 2 : 'unset'} >{data?.post?.crabrave ?? 0}</Text>
            </Flex>
            <Box>
                <NextLink href="/post/[id]" as={`/post/${21}`}>
                    <Heading as={Link} color="white" fontSize="1rem">{data?.post?.title ?? 'Fucked'}</Heading>
                </NextLink>
                { isMobile || <Text color="gray.500" maxW="80%" fontSize="1rem" mt={4} mb={3} isTruncated>{'Something here'}</Text>}
            </Box>
        </Flex>
    );
};

export default LatestPost;
