//
//  ToggleSort.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:54 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Select, Box} from '@chakra-ui/react';
import {FcAlphabeticalSortingAz} from 'react-icons/fc';
import {useRouter} from 'next/router';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    sort: 'latest' | 'hot'
    limit: number
}

const ToggleSort: React.FC<Props> = ({sort, limit}: React.PropsWithChildren<Props>) => {
    const router = useRouter();
    const {isPortrait} = useResponsive();
    return (
        <Box
            borderRadius={10}
        >
            <Select
                bg="bg"
                variant="filled"
                color="tan"
                size="md"
                icon={<FcAlphabeticalSortingAz/>}
                width={isPortrait ? '30vw': 'auto'}
                fontSize={isPortrait ? '4vw' : '1vw'}
                onChange={val => router.push(`/post?limit=${limit}&sort=${val.target.value}`)}
                value={sort}
            >
                <option value="latest">Latest</option>
                <option value="hot">Hot</option>
            </Select>
        </Box>
    );
};

export default ToggleSort;
