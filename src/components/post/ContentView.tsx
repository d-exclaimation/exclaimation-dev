//
//  ContentView.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {FullPostFragment} from '../../models/graphql/types';
import {Box} from '@chakra-ui/react';
import Markdown from 'react-markdown';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {countHeader} from '../shared/HeaderOveride';

interface Props {
    post: FullPostFragment
}


const ContentView: React.FC<Props> = ({post}: Props) => {
    const window = useWindowSize();
    const width = Math.floor(window.width * 0.8);

    const createMarkdown = (leaf: FullPostFragment['nodes'][0]) => {
        return (
            leaf.type === 'header' ? countHeader(leaf.leaf) : leaf.type === 'space' ? <Box my={4}/> : <Markdown source={leaf.leaf} /> // <ReactMarkdown source={leaf.leaf}/>
        );
    };

    return (
        <Box
            color="white"
            boxShadow="dark-lg"
            minW={width}
            maxW={window.width}
            p={5}
            borderRadius={5}
            minHeight={window.height / 2}
            fontSize={Math.floor(window.width * 0.015)}
        >
            {post.nodes.map((leaf, idx) => {
                return (
                    <Box key={idx}>
                        {createMarkdown(leaf)}
                    </Box>
                );
            })}
        </Box>
    );
};

export default ContentView;
