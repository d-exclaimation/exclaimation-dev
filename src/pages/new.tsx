//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    Box,
    Grid,
    GridItem, Img, Text, VStack
} from '@chakra-ui/react';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useRouter} from 'next/router';
import {useLanguagesQuery, useProfileQuery} from '../models/graphql/types';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import Hero from '../components/templates/Hero';
import {allSections} from '../components/core/SectionChildren';
import {darkMode} from '../constants/color.scheme';
import LogoBackground from '../components/shared/features/LogoBackground';

const DELAY = 100;

export const New: React.FC = () => {
    const router = useRouter();
    const [{fetching, data, error}] = useProfileQuery();
    const [lang] = useLanguagesQuery();

    if(error) {
        if (typeof window !== 'undefined')
            router.push('/404').catch(console.log);
        return <LoadingScreen />;
    }
    if(fetching || lang.fetching) {
        return <LoadingScreen />;
    }

    if (!data) {
        return <LoadingScreen />;
    }

    if (!lang.data) {
        return <LoadingScreen />;
    }

    const sides = allSections(data.profile, lang.data.topLang);

    return (
        <div className="New-header">
            <Grid
                h="97vh"
                gap=".5rem"
                templateAreas={`
                    'a  b  c'
                    'j  🌟 d'
                    'i  🌟 e'
                    'h  g  f'
                `}
                gridTemplateRows="repeat(4, 25%)"
                gridTemplateColumns="20vmin auto 20vmin"
            >
                {sides.map(({val, children}, idx) => {
                    const delay = (idx + 1) * DELAY;
                    return (
                        <GridItem
                            className="New-Section"
                            key={idx}
                            gridArea={val}
                            bg={darkMode}
                            style={{animationDelay: `${delay}ms`}}
                        >
                            {children}
                        </GridItem>
                    );
                })}
                <GridItem
                    className="New-Section"
                    gridArea="🌟"
                    style={{animationDelay: `${13 * DELAY}ms`}}
                    bg={darkMode}
                >
                    <VStack>
                        <Hero title={data.profile.name} />
                        <LogoBackground/>
                        <Box m={2}>
                            <Text
                                align={'center'}
                                m={2} color="#fafafa"
                            >{data.profile.bio}</Text>
                        </Box>
                    </VStack>
                </GridItem>
            </Grid>
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(New);
