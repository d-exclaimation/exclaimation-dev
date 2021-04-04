//
//  ShowCard.tsx
//  personal
//
//  Created by d-exclaimation on 9:24 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Img, Text} from '@chakra-ui/react';
import Link from 'next/link';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    imageUrl: string,
    title: string,
    body: string,
    url: string
}

const ShowCard: React.FC<Props> = ({ imageUrl, title, body, url }: Props) => {
    const window = useWindowSize();

    const card = {
        width: Math.floor(Math.min(60, window.width / 5)),
    };

    return (
        <Box bg="##f282c34" maxW={card.width} boxShadow="dark-lg" borderRadius="lg" overflow="hidden">
            <Img src={imageUrl} />

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

                    <Text fontSize="sm" color="gray.500" isTruncated>
                        {body}
                    </Text>
                </Box>
            </Link>
        </Box>
    );
};

export default ShowCard;
