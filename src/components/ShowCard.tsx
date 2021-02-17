//
//  ShowCard.tsx
//  personal
//
//  Created by d-exclaimation on 9:24 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Img} from '@chakra-ui/react';
import Link from 'next/link';
import {useWindowSize} from '../lib/WindowConfig';

interface Props {
    imageUrl: string,
    title: string,
    body: string,
    url: string
}

const ShowCard: React.FC<Props> = ({ imageUrl, title, body, url }: Props) => {
    const window = useWindowSize();

    const card = {
        width: Math.floor(Math.min(60, window.width / 6)),
    };

    return (
        <Box bg="#282c34" maxW="sm" boxShadow="dark-lg" borderRadius="lg" overflow="hidden">
            <Img width={card.width} src={imageUrl} />

            <Link href={url}>
                <Box p="3">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                        color="#fafafa"
                    >
                        {title}
                    </Box>

                    <Box fontSize="sm" color="#dadada">
                        {body}
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default ShowCard;
