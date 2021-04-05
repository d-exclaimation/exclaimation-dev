//
//  ToggleSort.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:54 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Select, Box, Center} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';
import {useDynamicSize} from '../../lib/hooks/useDynamicSize';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {useRouter} from 'next/router';

interface Props {
    sort: 'latest' | 'hot'
    limit: number
}

const ToggleSort: React.FC<Props> = ({sort, limit}: Props) => {
    const router = useRouter();
    const corner = useDynamicCorner();
    const size = useDynamicSize(2);
    const window = useWindowSize();
    return (
        <Box
            borderRadius={10} boxShadow="dark-lg"
            top={corner.y} right={corner.x}
            pos="absolute"
        >
            <Center m={window.width > window.height ? 1 : 0}>
                <Select
                    bg="#282c34"
                    variant="filled"
                    color="pink.500"
                    size="md"
                    width={Math.min(Math.floor(window.width / 6), 100)}
                    fontSize={size}
                    onChange={val => router.push(`/feed?limit=${limit}&sort=${val.target.value}`)} value={sort}
                >
                    <option value="latest">Latest</option>
                    <option value="hot">Hot</option>
                </Select>
            </Center>
        </Box>
    );
};

export default ToggleSort;
