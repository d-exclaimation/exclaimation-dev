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
import {Grid, GridItem} from '@chakra-ui/react';
import MetaHead from '../components/shared/meta/MetaHead';
import EditorViewModel from '../components/editor/EditorViewModel';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import RouteNavBar from '../components/shared/routes/RouteNavBar';

const Editor: React.FC = () => {
    return (
        <>
            <MetaHead title={'d-exclaimation post editor'} description={'Editor with a content with markdown'}/>
            <div className="New-header">
                <RouteNavBar/>
                <Grid
                    h="82vh"
                    gap=".5rem"
                    templateAreas={`
                        't'
                        'b'
                        'b'
                        'f'
                    `}
                >
                    <EditorViewModel />
                    <GridItem
                        className="New-Section"
                        gridArea="f"
                    >
                        <FooterDisclaimer/>
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Editor);
