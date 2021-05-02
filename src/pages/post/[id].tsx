//
//  [id].tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:37 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import Hero from '../../components/shared/meta/Hero';
import MetaHead from '../../components/shared/meta/MetaHead';
import {Box, Grid, GridItem} from '@chakra-ui/react';

import {createUrqlClient} from '../../lib/server/createUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useRouter} from 'next/router';
import {usePostQuery} from '../../models/graphql/types';
import ContentViewModel from '../../components/post/ContentViewModel';
import FooterDisclaimer from '../../components/shared/meta/FooterDisclaimer';
import LoadingScreen from '../../components/shared/features/LoadingScreen';
import RouteNavBar from '../../components/shared/routes/RouteNavBar';


const Post: React.FC = () => {
    const router = useRouter();
    const pid = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;
    const [{data, fetching, error}] = usePostQuery({
        pause: pid === -1,
        variables: {
            id: pid
        }
    });

    if(error) {
        if (typeof window !== 'undefined')
            router.push(`/404?post=${pid}`).catch(console.log);
        return <LoadingScreen />;
    }
    if(fetching)
        return <LoadingScreen />;
    if (!data?.post)
        return <LoadingScreen />;

    const firstLine = data.post.nodes.length < 1 ? '' : data.post.nodes[0].leaf;

    return (
        <>
            <MetaHead title={data.post.title} description={firstLine} />
            <div className="New-header">
                <RouteNavBar/>
                <Grid
                    gap=".5rem"
                    templateAreas={`
                        't'
                        'c'
                        'c'
                        'c'
                        'f'
                    `}
                    gridTemplateRows="10vh 70vh 2vh"
                    gridTemplateColumns="auto"
                >
                    <GridItem
                        className="New-Section"
                        gridArea="t"
                    >
                        <Box mx="auto">
                            <Hero title={data.post.title} />
                        </Box>
                    </GridItem>
                    <GridItem
                        className="New-Section"
                        gridArea="c"
                    >
                        <Box mt="3vh">
                            <ContentViewModel post={data.post}/>
                        </Box>
                    </GridItem>
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

export default withUrqlClient(createUrqlClient, {ssr: true})(Post);
