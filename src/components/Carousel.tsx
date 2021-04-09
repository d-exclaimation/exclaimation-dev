//
//  Carousel.tsx
//  personal
//
//  Created by d-exclaimation on 8:19 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {
    Box, HStack, Button, VStack,
    Stat, StatLabel, StatNumber, StatHelpText, StatArrow
} from '@chakra-ui/react';
import {favRed, nextBlue} from '../constants/color.scheme';

import Link from 'next/link';
import {ProfileSnapFragment} from '../models/graphql/types';

interface Props {
    github: ProfileSnapFragment,
    langName: string,
    percentage: number,
}

const Carousel: React.FC<Props> = ({ github, langName, percentage }: Props) => {
    return (
        <VStack>
            <HStack>
                <Link href={github.githubURL}>
                    <Button
                        variant="ghost"
                        fontSize="min(16px, 3vw + 2px)"
                        color="#fafafa"
                        boxShadow="dark-lg"
                    >
                        Github
                    </Button>
                </Link>

                <Link href={`https://twitter.com/${github.twitterUsername}`}>
                    <Button
                        variant="ghost"
                        fontSize="min(16px, 3vw + 2px)"
                        color="#00acee"
                        boxShadow="dark-lg"
                    >
                        Twitter
                    </Button>
                </Link>
                <Link href={'https://www.instagram.com/d_exclaimation/'}>
                    <Button
                        variant="ghost"
                        fontSize="min(16px, 3vw + 2px)"
                        color={'#da83ec'}
                        boxShadow="dark-lg"
                    >
                        Instagram
                    </Button>
                </Link>
            </HStack>
            <HStack>
                <Box
                    m={2} p={5} borderRadius={20} shadow="dark-lg" color="#fafafa"
                >
                    <Link href={github.githubURL + '?tab=repositories'}>
                        <Stat>
                            <StatLabel
                                color={favRed}
                                fontSize="min(20px, 3vw + 2px)"
                            >Public Repos</StatLabel>
                            <StatNumber
                                fontSize="min(20px, 3vw + 2px)"
                            >{ github.reposCount }</StatNumber>
                            <StatHelpText fontSize="min(16px, 3vw + 2px)">
                                <StatArrow type="increase" />
                                {( 1 / github.reposCount).toFixed(2)}%
                            </StatHelpText>
                        </Stat>
                    </Link>
                </Box>
                <Box
                    m={2} p={5} borderRadius={20} shadow="dark-lg" color="#fafafa"
                >
                    <Stat>
                        <StatLabel
                            color={nextBlue}
                            fontSize="min(20px, 3vw + 2px)"
                        > Top Language </StatLabel>
                        <StatNumber
                            fontSize="min(20px, 3vw + 2px)"
                        >{ langName }</StatNumber>
                        <StatHelpText fontSize="min(16px, 3vw + 2px)">
                            <StatArrow type="increase" />
                            {percentage.toFixed(2)}%
                        </StatHelpText>
                    </Stat>
                </Box>
            </HStack>
        </VStack>
    );
};

export default Carousel;
