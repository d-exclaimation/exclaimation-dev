//
//  ContentViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {FullPostFragment, useDeletePostMutation} from '../../models/graphql/types';
import {Box, Flex} from '@chakra-ui/react';
import Markdown from 'react-markdown';
import {countHeader} from '../shared/markdown/HeaderOveride';
import {useResponsive} from '../../lib/hooks/useResponsive';
import UpRave from './UpRave';
import Deletion from './Deletion';
import {FormResult} from '../../models/enum/FormResult';
import {useAuth} from '../../lib/server/useAuth';

interface Props {
    post: FullPostFragment
}


const ContentViewModel: React.FC<Props> = ({post}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    const [, deletePost] = useDeletePostMutation();
    const auth = useAuth();
    const createMarkdown = (leaf: FullPostFragment['nodes'][0]) => {
        return (
            leaf.type === 'header' ? countHeader(leaf.leaf) : leaf.type === 'space' ? <Box my={4}/> :  <Markdown source={leaf.leaf} />
        );
    };

    return (
        <Box
            bg="bg"
            color="white"
            boxShadow="dark-lg"
            minW="80vw"
            maxW={isPortrait ? '98vw' : '90vw'}
            p={5}
            borderRadius={5}
            minH="50vh"
        >
            {post.nodes.map((leaf, idx) => {
                return (
                    <Box key={idx}>
                        {createMarkdown(leaf)}
                    </Box>
                );
            })}
            <Flex justifyContent="flex-end" alignItems="center">
                <UpRave post={post}/>
                {auth &&
                <Deletion deletePost={async () => {
                    try {
                        const {error} = await deletePost({ id: parseInt(post.id) });
                        return error ? FormResult.failure : FormResult.success;
                    } catch (e) {
                        return FormResult.failure;
                    }
                }}/>}
            </Flex>
        </Box>
    );
};

export default ContentViewModel;
