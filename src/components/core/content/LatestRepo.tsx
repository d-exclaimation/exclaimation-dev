//
//  LatestRepo.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:39 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import {Box, Flex, Img, Link, Text} from '@chakra-ui/react';
import {useResponsive} from '../../../lib/hooks/useResponsive';
import {langBarOptions} from '../../../lib/LanguageBarURL';
import {useLatestRepoQuery} from '../../../models/graphql/types';

export const LatestRepo: React.FC = () => {
    const {isPortrait} = useResponsive();
    const [{data, fetching, error}] = useLatestRepoQuery({
        pause: typeof window === 'undefined',
    });

    const langImage = (lang: string): string => {
        if (langBarOptions.has(lang)) {
            return `https://delivery-exclaimation-30760d.netlify.app/images/lang-bar/${lang}-bar.png`;
        }
        return 'https://delivery-exclaimation-30760d.netlify.app/images/lang-bar/exclaim-bar.png';
    };

    if (error)
        return <></>;

    if (fetching)
        return <></>;

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
                w={isPortrait ? 'unset' : '15%'}
                h={isPortrait ? '20vmin' : '15vmin'}
                objectFit="cover"
                src={langImage(`${data?.latestRepo.language ?? 'exclaim'}`.toLowerCase())} alt={data?.latestRepo.language ?? 'exclaim'}
            />

            <Box alignItems="center" p="3" m={isPortrait ? 'unset': 5}>
                <Link href={'/'}>
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                        color="#fafafa"
                    >
                        {data?.latestRepo.name ?? 'unnamed'}
                    </Box>
                </Link>

                <Text fontSize="sm" color="gray.500" isTruncated>
                    {data?.latestRepo.repoName ?? 'd-exclaimation/unnamed'}
                </Text>
            </Box>
        </Flex>
    );
};

export default LatestRepo;
