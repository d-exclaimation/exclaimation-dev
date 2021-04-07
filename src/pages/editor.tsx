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

const Editor: React.FC = () => {
    return (
        <div className="Post-header">
            <MetaHead title={'d-exclaimation post editor'} description={'Editor with a preview with markdown'}/>
            <MarkdownEditor/>
        </div>
    );
};

export default withUrqlClient(withCustomUrql)(Editor);
