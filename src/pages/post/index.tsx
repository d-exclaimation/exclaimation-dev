//
//  index.tsx
//  exclaimation
//
//  Created by d-exclaimation on 6:02 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import MetaHead from '../../components/shared/meta/MetaHead';
import Hero from '../../components/templates/Hero';
import FeedViewModel from '../../components/feed/FeedViewModel';
import {Box, Grid, GridItem} from '@chakra-ui/react';
import {createUrqlClient} from '../../lib/server/createUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useAllPostQuery} from '../../models/graphql/types';
import {useRouter} from 'next/router';
import FooterDisclaimer from '../../components/shared/meta/FooterDisclaimer';
import LoadingScreen from '../../components/shared/features/LoadingScreen';
import RouteNavBar from '../../components/shared/routes/RouteNavBar';


const Feed: React.FC = () => {
    const router = useRouter();
    const limit = typeof router.query.limit === 'string' ? parseInt(router.query.limit) : 12;
    const by: 'latest' | 'hot' = typeof router.query.sort === 'string' ? router.query.sort === 'hot' ? 'hot' : 'latest' : 'latest';
    const [{fetching, error, data}] = useAllPostQuery({
        variables: {
            limit: limit,
            by: by
        }
    });

    if (error) {
        if (typeof window !== 'undefined')
            router.push('/404?nofeed=true').catch(console.log);
        return <LoadingScreen />;
    }

    if(fetching)
        return <LoadingScreen />;

    if (!data)
        return <LoadingScreen />;

    return (
        <>
            <MetaHead title={`d-exclaimation's ${data?.posts.length ?? 0} posts `} description={'My blog, rant, and just shit posts all in one bundle'} />
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
                        <Box mt="4vh">
                            <Hero title={'Blogs and Posts'}/>
                        </Box>
                    </GridItem>
                    <GridItem
                        className="New-Section"
                        gridArea="c"
                    >
                        <Box mt="4vh">
                            <FeedViewModel
                                posts={data.posts}
                                sort={by}
                                limit={limit}
                            />
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Feed);
