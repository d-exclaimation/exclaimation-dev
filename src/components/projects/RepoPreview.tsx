//
//  RepoPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:03 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Flex, Img, Link, Text} from '@chakra-ui/react';

interface Props {
    isPortrait: boolean,
    imageURL: string,
    title: string,
    body: string,
    url: string,
}

const RepoPreview: React.FC<Props> = ({isPortrait, imageURL, title, body, url}: React.PropsWithChildren<Props>) => {
    return (
        <Flex
            className="SlideUpCard"
            direction={isPortrait ? 'column': 'row'}
            bg="bg"
            boxShadow="dark-lg"
            borderRadius="lg"
            overflow="hidden"
        >
            <Img
                w={isPortrait ? 'unset' : '20%'}
                h={isPortrait ? '20vmin' : '15vmin'}
                objectFit="cover"
                src={imageURL} alt={title}
            />

            <Box alignItems="center" p="3" m={isPortrait ? 'unset': 5}>
                <Link href={url}>
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                        color="#fafafa"
                    >
                        {title}
                    </Box>
                </Link>

                <Text fontSize="sm" color="gray.500" maxW="80%" isTruncated>
                    {body}
                </Text>
            </Box>
        </Flex>
    );
};

export default RepoPreview;
