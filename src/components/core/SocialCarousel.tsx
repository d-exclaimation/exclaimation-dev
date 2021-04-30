//
//  SocialCarousel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {LightMode, VStack} from '@chakra-ui/react';
import {ProfileSnapFragment} from '../../models/graphql/types';
import {FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi';
import SocialLink from './media/SocialLink';

interface Props {
   github: ProfileSnapFragment
}

const SocialCarousel: React.FC<Props> = ({github}: Props) => {
    return (
        <VStack
            py="2vmin"
            px="auto"
            spacing="2vmin"
        >
            <LightMode>
                <SocialLink
                    url={github.githubURL}
                    name={'Github'}
                    scheme={'whiteAlpha'}
                    icon={<FiGithub/>}
                />
                <SocialLink
                    url={`https://twitter.com/${github.twitterUsername}`}
                    name={'Twitter'}
                    scheme={'twitter'}
                    icon={<FiTwitter/>}
                />
                <SocialLink
                    url={'https://www.instagram.com/d_exclaimation/'}
                    name={'Instagram'}
                    scheme={'pink'}
                    icon={<FiInstagram/>}
                />
            </LightMode>
        </VStack>
    );
};

export default SocialCarousel;
