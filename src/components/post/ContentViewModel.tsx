//
//  ContentViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {FullPostFragment} from '../../models/graphql/types';
import {Box, Flex, Spacer} from '@chakra-ui/react';
import Markdown from 'react-markdown';
import {countHeader} from '../shared/markdown/HeaderOveride';
import UpRave from './UpRave';
import Deletion from './Deletion';
import {useAuth} from '../../lib/server/useAuth';

interface Props {
    post: FullPostFragment
}


const ContentViewModel: React.FC<Props> = ({post}: React.PropsWithChildren<Props>) => {
    const auth = useAuth();
    
    // Create markdown based on the nodes to match chakra-ui theme
    const createMarkdown = (node: FullPostFragment['nodes'][0]) => {
        switch (node.type) {
        case 'header':
            return countHeader(node.leaf);
        case 'space':
            return <Box my="4" />;
        default:
            return <Markdown source={node.leaf}/>;
        }
    };

    return (
        <Flex
            direction="column"
            bg="bg"
            color="white"
            boxShadow="dark-lg"
            borderRadius={5}
            minW="80vw"
            maxW="92vw"
            p={5}
        >
            <Box
                minH="50vh"
            >
                {post.nodes.map((leaf, idx) => {
                    return (
                        <Box key={idx}>
                            {createMarkdown(leaf)}
                        </Box>
                    );
                })}
            </Box>
            <Spacer/>
            <Flex justifyContent="flex-end" alignItems="center">
                <UpRave post={post}/>
                {auth && <Deletion id={parseInt(post.id)} /> }
            </Flex>
        </Flex>
    );
};

export default ContentViewModel;
