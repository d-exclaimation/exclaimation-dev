//
//  SocialCarousel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import Link from 'next/link';
import {Button, VStack} from '@chakra-ui/react';
import {ProfileSnapFragment} from '../../models/graphql/types';

interface Props {
   github: ProfileSnapFragment
}

const SocialCarousel: React.FC<Props> = ({github}: Props) => {
    return (
        <VStack>
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
        </VStack>
    );
};

export default SocialCarousel;
