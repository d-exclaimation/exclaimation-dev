//
//  UpRave.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, Button} from '@chakra-ui/react';
import {AiFillLike} from 'react-icons/ai';
import {FullPostFragment, useUpRaveMutation} from '../../models/graphql/types';

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
                colorScheme="purpled"
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
