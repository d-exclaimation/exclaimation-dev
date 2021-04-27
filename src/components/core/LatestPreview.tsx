//
//  LatestPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Flex, Heading, IconButton, Link, Text} from '@chakra-ui/react';
import {darkMode} from '../../constants/color.scheme';
import {ChevronUpIcon} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {usePostQuery} from '../../models/graphql/types';

export const LatestPreview: React.FC = () => {
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
            p={5}
            maxW="50vmax"
            w="80%"
            shadow="dark-lg"
            borderRadius={5}
            bgColor={darkMode}>
            <Flex direction="column"  alignItems="center" justifyContent="center" mr={4}>
                <IconButton
                    colorScheme="pink"
                    aria-label="UpRave"
                    variant="outline"
                    size="2vmin"
                    icon={<ChevronUpIcon/>}
                    isLoading={fetching}
                    // onClick={() => upRave({
                    //     id: parseInt(post.id)
                    // })}
                />
                <Text fontSize="16px" color="white" mt={2}>{data?.post?.crabrave ?? 0}</Text>
            </Flex>
            <Box>
                <NextLink href="/post/[id]" as={`/post/${21}`}>
                    <Heading as={Link} color="white" fontSize="1rem">{data?.post?.title ?? 'Fucked'}</Heading>
                </NextLink>
                <Text color="gray.500" maxW="80%" fontSize="1rem" mt={4} mb={3} isTruncated>{'Something here'}</Text>
            </Box>
        </Flex>
    );
};

export default LatestPreview;
