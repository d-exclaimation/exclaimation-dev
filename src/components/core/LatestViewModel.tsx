//
//  LatestPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Stack, Text, Link} from '@chakra-ui/react';
import LatestPost from './content/LatestPost';
import {ascentGradient} from '../../constants/color.scheme';
import {useSequence} from '../../lib/hooks/useSequence';
import LatestRepo from './content/LatestRepo';
import {useInterval} from '../../lib/hooks/useInterval';

type LatestFeed = 'post' | 'repo'

export const LatestViewModel: React.FC = () => {
    const [state, toggle] = useSequence<LatestFeed>('post', 'repo');
    console.log(state);

    useInterval(() => {
        toggle();
    },  30 * 1000);

    return (
        <Stack
            direction={'column'}
            w="clamp(40%, 80%, 50vmax)"
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
        </Stack>
    );
};

export default LatestViewModel;
