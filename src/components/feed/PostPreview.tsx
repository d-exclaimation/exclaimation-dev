//
//  PostPreview.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:14 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Button, Img} from '@chakra-ui/react';
import Link from 'next/link';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {drivePlayURL} from '../../lib/GoogleDriveURL';
import {langBar} from '../../lib/LanguageBarURL';

interface Props {
    title: string,
    crabrave: number,
    url: string,
    upRave: () => void,
}

const POST_BAR = '/images/post-bar.png';

const PostPreview: React.FC<Props> = ({ title, url, crabrave, upRave }: Props) => {
    const window = useWindowSize();
    const [raveCount, setRave] = React.useState<number>(crabrave);

    const card = {
        width: Math.floor(Math.min(60, window.width / 5)),
    };

    return (
        <Box bg="#282c34" maxW={card.width} boxShadow="dark-lg" borderRadius="lg" overflow="hidden">
            <Img src={POST_BAR} />

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

                    <Button
                        variant="outline"
                        colorScheme="pink"
                        onClick={() => {
                            upRave();
                            setRave(raveCount + 1);
                        }}
                    >{ raveCount } 🦀</Button>
                </Box>
            </Link>
        </Box>
    );
};

export default PostPreview;
