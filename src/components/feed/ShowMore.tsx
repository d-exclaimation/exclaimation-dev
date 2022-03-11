//
//  ShowMore.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:59 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { CgMore } from 'react-icons/cg';

interface Props {
    limit: number
    sort: string
}

const ShowMore: React.FC<Props> = ({limit, sort}: React.PropsWithChildren<Props>) => {
    const router = useRouter();
    const addition = Math.max(Math.floor(limit / 3 * 2), 1);
    return (
        <>
            <IconButton
                aria-label="show more"
                colorScheme="facebook.600"
                variant="ghost"
                size="min(16px, 3vw + 2px)"
                m={5}
                onClick={() => router.push(`/post?limit=${limit + addition}&sort=${sort}`)}
                icon={<CgMore/>}
            />
        </>
    );
};

export default ShowMore;
