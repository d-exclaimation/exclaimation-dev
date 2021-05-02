//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 1:26 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    Grid,
    GridItem,
    Text,
    VStack,
    Stack,
    Flex,
} from '@chakra-ui/react';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {withUrqlClient} from 'next-urql';
import {useRouter} from 'next/router';
import {useLanguagesQuery, useProfileQuery} from '../models/graphql/types';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import Hero from '../components/templates/Hero';
import {allSections} from '../components/core/SectionChildren';
import {useResponsive} from '../lib/hooks/useResponsive';
import ExBoxedIcon from '../components/shared/icons/ExBoxedIcon';
import MetaHead from '../components/shared/meta/MetaHead';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import {useScramble, DUDS} from '../lib/hooks/useScramble';
import {splitAtEveryOther} from '../lib/Typography';

const DELAY = 50;

export const Index: React.FC = () => {
    const {isPortrait} = useResponsive();
    const router = useRouter();
    const [{fetching, data, error}] = useProfileQuery();
    const [lang] = useLanguagesQuery();
    const phrases = [
        ...(data ? splitAtEveryOther(data.profile.bio, ' ') : []),
        'Follow me at github btw',
        'and at twitter as well',
        'Thanks',
    ];
    const desc = useScramble(phrases);

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

    const sides = allSections(data.profile, lang.data.topLang, isPortrait);

    return (
        <div className="New-header">
            <MetaHead
                title={data.profile.name}
                description={
                    'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'
                }
            />
            <RouteNavBar isHome={true}/>
            <Grid
                h="82vh"
                gap=".5rem"
                templateAreas={`
                    'a  b c'
                    'j  🌟 d'
                    'i  🌟 e'
                    'h  g  f'
                `}
                gridTemplateRows="20vh 20vh 21vh 24vh"
                gridTemplateColumns="20vmin auto 20vmin"
            >
                {sides.map(({val, children}, idx) => {
                    const delay = (idx + 1) * DELAY;
                    return (
                        <GridItem
                            className="New-Section"
                            key={idx}
                            gridArea={val}
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
                >
                    <Stack direction={isPortrait ? 'column' : 'row-reverse'} align="center">
                        <ExBoxedIcon w={'30vmin'} />
                        <VStack align={isPortrait ? 'center' : 'flex-end'}>
                            <Hero title={data.profile.name} />

                            <Flex
                                m={2}
                                direction={'row'}
                                alignItems="center"
                                justifyContent="center"
                                w="80%"
                                wrap="wrap"
                            >
                                {desc.map((char, i) => {
                                    const isSpaces = char === ' ';
                                    const isDUDS = DUDS.indexOf(char) !== -1;
                                    return (
                                        <Text
                                            key={i}
                                            fontFamily="monospace"
                                            color={isDUDS ? 'gray.500' : 'gray.50'}
                                            opacity={isSpaces ? 0 : 1}
                                        >
                                            {isSpaces ? '_' : char}
                                        </Text>
                                    );
                                })}
                            </Flex>
                        </VStack>
                    </Stack>
                </GridItem>
            </Grid>
        </div>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
