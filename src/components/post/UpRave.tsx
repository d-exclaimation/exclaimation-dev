//
//  UpRave.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FullPostFragment, useUpRaveMutation } from '../../models/graphql/types';

interface Props {
    post: FullPostFragment
}
const UpRave: React.FC<Props> = ({post}: React.PropsWithChildren<Props>) => {
    const [{fetching}, upRave] = useUpRaveMutation();
    return (
        <Flex
            direction="row-reverse"
            alignItems="center"
            justifyContent="center"
            p={3}
            borderRadius={10}
        >
            <Button
                colorScheme="facebook"
                size="sm"
                leftIcon={<AiFillLike/>}
                isLoading={fetching}
                onClick={() => upRave({
                    id: parseInt(post.id)
                })}
                zIndex={10}
            >{post.crabrave}</Button>
        </Flex>
    );
};

export default UpRave;
