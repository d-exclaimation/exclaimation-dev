//
//  LatestPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, Text, Link} from '@chakra-ui/react';
import LatestPost from './content/LatestPost';
import {ascentGradient} from '../../constants/color.scheme';
import {useSequence} from '../../lib/hooks/useSequence';
import LatestRepo from './content/LatestRepo';
import {useInterval} from '../../lib/hooks/useInterval';

type LatestFeed = 'post' | 'repo'

export const LatestPreview: React.FC = () => {
    const order: LatestFeed[] = Math.random() > .5 ? ['post', 'repo'] as LatestFeed[] : ['repo', 'post'] as LatestFeed[];
    const [state, toggle] = useSequence<LatestFeed>(...order);
    console.log(state);

    useInterval(() => {
        toggle();
    },  30 * 1000);

    return (
        <Flex
            direction={'column'}
            bg={'#282c34'}
            mb="auto"
            w="80%"
            maxW="50vmax"
        >
            <Text
                m={2}
                fontSize="min(2.5vmin, 16px)"
                bgGradient={ascentGradient}
                bgClip="text"
            >
                <Link href="/post">
                    Recent activity
                </Link>
            </Text>
            <div>
                {
                    state === 'post'
                        ? <LatestPost/>
                        : <LatestRepo/>
                }
            </div>
        </Flex>
    );
};

export default LatestPreview;
