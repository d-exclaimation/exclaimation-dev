//
//  UpRave.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, IconButton, Text} from '@chakra-ui/react';
import {ChevronUpIcon} from '@chakra-ui/icons';
import {FullPostFragment, useUpRaveMutation} from '../../models/graphql/types';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';
import {useDynamicSize} from '../../lib/hooks/useDynamicSize';

interface Props {
    post: FullPostFragment
}
const UpRave: React.FC<Props> = ({post}: Props) => {
    const [{fetching}, upRave] = useUpRaveMutation();
    const corner = useDynamicCorner();
    const size = useDynamicSize();
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            pos="absolute"
            boxShadow="dark-lg"
            p={3}
            borderRadius={10}
            top={corner.y}
            right={corner.x}
        >
            <IconButton
                colorScheme="pink"
                aria-label="UpRave"
                variant="outline"
                size={size}
                icon={<ChevronUpIcon/>}
                isLoading={fetching}
                onClick={() => upRave({
                    id: parseInt(post.id)
                })}
            />
            <Text fontSize={size} color="white" mt={2}>{post.crabrave}</Text>
        </Flex>
    );
};

export default UpRave;
