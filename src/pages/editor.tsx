//
//  editor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:48 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import MetaHead from '../components/shared/MetaHead';
import MarkdownEditor from '../components/editor/MarkdownEditor';
import {useCreatePostMutationMutation} from '../models/graphql/types';
import RouteSideCar from '../components/shared/RoutesSideBar';
import {FormResult} from '../models/enum/FormResult';
import FooterDisclaimer from '../components/shared/FooterDisclaimer';

const Editor: React.FC = () => {
    const [, createPost] = useCreatePostMutationMutation();
    return (
        <>
            <MetaHead title={'d-exclaimation post editor'} description={'Editor with a preview with markdown'}/>
            <div className="Post-header">
                <RouteSideCar/>
                <MarkdownEditor submit={async (title, body) => {
                    try {
                        const {error} = await createPost({
                            input: {
                                title,
                                body
                            },
                        });
                        return error ? FormResult.failure : FormResult.success;
                    } catch (e) {
                        return FormResult.failure;
                    }
                }} />
                <FooterDisclaimer/>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Editor);
