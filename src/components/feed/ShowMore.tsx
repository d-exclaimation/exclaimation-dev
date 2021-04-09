//
//  ShowMore.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:59 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { Button } from '@chakra-ui/react';
import {useDynamicSize} from '../../lib/hooks/useDynamicSize';
import {useRouter} from 'next/router';

interface Props {
    limit: number
    sort: string
}

const ShowMore: React.FC<Props> = ({limit, sort}: Props) => {
    const size = useDynamicSize(2);
    const router = useRouter();
    const addition = Math.max(Math.floor(limit / 3 * 2), 1);
    return (
        <>
            <Button
                colorScheme="pink"
                variant="ghost"
                size={size}
                m={5}
                onClick={() => router.push(`/post?limit=${limit + addition}&sort=${sort}`)}
            >
                Show More
            </Button>
        </>
    );
};

export default ShowMore;