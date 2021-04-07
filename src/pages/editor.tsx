//
//  editor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:48 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {withUrqlClient} from 'next-urql';
import {withCustomUrql} from '../lib/ssr/withUrqlClient';
import MetaHead from '../components/shared/MetaHead';
import MarkdownEditor from '../components/editor/MarkdownEditor';
import {useCreatePostMutationMutation} from '../models/graphql/types';
import {useRouter} from 'next/router';

const Editor: React.FC = () => {
    const router = useRouter();
    const [, createPost] = useCreatePostMutationMutation();
    return (
        <div className="Post-header">
            <MetaHead title={'d-exclaimation post editor'} description={'Editor with a preview with markdown'}/>
            <MarkdownEditor submit={async (title, body, key) => {
                try {
                    const {error, data} = await createPost({
                        input: {
                            title,
                            body
                        },
                        key: key
                    });
                    if (error)
                        await router.push('/post');
                    else
                        await router.push(`/post/${data?.newPost.id}`);
                } catch (e) {
                    console.error(e);
                }
            }} />
        </div>
    );
};

export default withUrqlClient(withCustomUrql)(Editor);
