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

export const LatestRepo: React.FC = () => {
    const {isMobile} = useResponsive();

    const langImage = (lang: string): string => {
        if (langBarOptions.has(lang)) {
            return `https://delivery-exclaimation-30760d.netlify.app/images/lang-bar/${lang}-bar.png`;
        }
        return 'https://delivery-exclaimation-30760d.netlify.app/images/lang-bar/exclaim-bar.png';
    };

    return (
        <Flex
            className="SlideUpCard"
            direction={isMobile ? 'column': 'row'}
            bg="bg"
            boxShadow="dark-lg"
            borderRadius="lg"
            overflow="hidden"
        >
            <Img
                w={isMobile ? 'unset' : '15%'}
                h={isMobile ? '40%' : 'unset'}
                objectFit="cover"
                src={langImage('elixir')} alt={'elixir'}
            />

            <Link href={'/'} m={isMobile ? 'unset': 5}>
                <Box p="3">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                        color="#fafafa"
                    >
                        {'Something repo'}
                    </Box>

                    <Text fontSize="sm" color="gray.500" isTruncated>
                        {'d-exclaimation/something-repo'}
                    </Text>
                </Box>
            </Link>
        </Flex>
    );
};

export default LatestRepo;
