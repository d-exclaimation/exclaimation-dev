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
import {favRed} from '../constants/color.scheme';

import {useWindowSize} from '../lib/hooks/useWindow';
import {GithubProfile} from '../models/interfaces/GithubProfile';
import Link from 'next/link';

interface Props {
    github: GithubProfile
}

const Carousel: React.FC<Props> = ({ github }: Props) => {
    const window = useWindowSize();
    const bSize = (): 'sm' | 'md' | 'lg' | 'xs' => {
        const size = (window.width / 1300) * 4;
        const index = Math.floor(size) - 1;
        const all: ('xs' | 'sm' | 'md' | 'lg')[] = ['xs', 'sm', 'sm', 'lg'];
        return all[index];
    };

    return (
        <VStack>
            <HStack>
                <Link href={github.html_url}>
                    <Button
                        variant="ghost"
                        size={bSize()}
                        color="#fafafa"
                        boxShadow="dark-lg"
                    >
                        Github
                    </Button>
                </Link>

                <Link href={`https://twitter.com/${github.twitter_username}`}>
                    <Button
                        variant="ghost"
                        size={bSize()}
                        color="#00acee"
                        boxShadow="dark-lg"
                    >
                        Twitter
                    </Button>
                </Link>
                <Link href={'https://www.instagram.com/d_exclaimation/'}>
                    <Button
                        variant="ghost"
                        size={bSize()}
                        color={'#da83ec'}
                        boxShadow="dark-lg"
                    >
                        Instagram
                    </Button>
                </Link>
            </HStack>
            <Box
                m={2} p={5} borderRadius={20} shadow="dark-lg" color="#fafafa"
            >
                <Link href={github.html_url + '?tab=repositories'}>
                    <Stat>
                        <StatLabel
                            color={favRed}
                            size={bSize()}
                        >Public Repos</StatLabel>
                        <StatNumber
                            size={bSize()}
                        >{ github.public_repos }</StatNumber>
                        <StatHelpText size={bSize()}>
                            <StatArrow type="increase" />
                            {( 1 / github.public_repos).toFixed(2)}%
                        </StatHelpText>
                    </Stat>
                </Link>
            </Box>
        </VStack>
    );
};

export default Carousel;
