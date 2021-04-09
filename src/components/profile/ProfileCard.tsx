//
//  ProfileCard.tsx
//  personal
//
//  Created by d-exclaimation on 3:46 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Img} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    imageUrl: string,
}

const ProfileCard: React.FC<Props> = ({ imageUrl }: Props) => {
    const window = useWindowSize();
    return (
        <Box
            bg="#282c34" maxW="lg"
            boxShadow="dark-lg"
            borderRadius="lg" overflow="hidden"
        >
            <Img width="50vw" src={imageUrl} alt="my logo" />
        </Box>
    );
};

export default ProfileCard;
