//
//  Carousel.tsx
//  personal
//
//  Created by d-exclaimation on 8:19 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { HStack, Button } from '@chakra-ui/react';
import {favRed} from '../constants/color.scheme';

import {useWindowSize} from '../lib/WindowConfig';
import {GithubProfile} from '../models/GithubProfile';
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
        <HStack>
            <Link href={github.html_url + '?tab=repositories'}>
                <Button
                    variant="ghost"
                    size={bSize()}
                    color={favRed}
                    boxShadow="dark-lg"
                >
                    Public Repo: { github.public_repos }
                </Button>
            </Link>
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
        </HStack>
    );
};

const roles = ['Student', 'Developer', 'Definitely Human'];

export default Carousel;
