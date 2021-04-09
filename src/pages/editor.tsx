//
//  editor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:48 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/withUrqlClient';
import MetaHead from '../components/shared/MetaHead';
import MarkdownEditor from '../components/editor/MarkdownEditor';
import {useCreatePostMutationMutation} from '../models/graphql/types';
import RouteSideCar from '../components/shared/RoutesSideBar';
import {FormResult} from '../models/enum/FormResult';
import FooterDisclaimer from '../components/shared/FooterDisclaimer';

const Editor: React.FC = () => {
    const [, createPost] = useCreatePostMutationMutation();
    return (
        <div className="Post-header">
            <MetaHead title={'d-exclaimation post editor'} description={'Editor with a preview with markdown'}/>
            <RouteSideCar/>
            <MarkdownEditor submit={async (title, body, key) => {
                try {
                    const {error} = await createPost({
                        input: {
                            title,
                            body
                        },
                        key: key
                    });
                    return error ? FormResult.failure : FormResult.success;
                } catch (e) {
                    return FormResult.failure;
                }
            }} />
            <FooterDisclaimer/>
        </div>
    );
};

export default withUrqlClient(createUrqlClient)(Editor);
