//
//  LatestPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, Text, Link} from '@chakra-ui/react';
import NextLink from 'next/link';
import LatestPost from './content/LatestPost';
import {ascentGradient} from '../../constants/color.scheme';

export const LatestPreview: React.FC = () => {

    return (
        <Flex
            direction={'column'}
            bg={'#282c34'}
            p="1vmin"
            mb="2vmin"
            w="80%"
            maxW="50vmax"
        >
            <Text
                m={2}
                fontSize="2.5vmin"
                bgGradient={ascentGradient}
                bgClip="text"
            >
                <Link href="/post">
                    Recent activity
                </Link>
            </Text>
            <LatestPost/>
        </Flex>
    );
};

export default LatestPreview;
