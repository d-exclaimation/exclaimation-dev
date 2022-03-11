//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 00:07.
//

import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import {
    motion, useMotionTemplate, useSpring, useTransform, useViewportScroll
} from 'framer-motion';
import { withUrqlClient } from 'next-urql';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import MetaHead from '../components/shared/meta/MetaHead';
import Scrambled from '../components/shared/meta/Scrambled';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import { useResponsive } from '../lib/hooks/useResponsive';
import { DUDS, useScramble } from '../lib/hooks/useScramble';
import { createUrqlClient } from '../lib/server/createUrqlClient';
import { useProfileQuery } from '../models/graphql/types';

const MotionText = motion(Text);

const Index: React.FC = () => {
    const [{fetching, data, error}] = useProfileQuery();
    const router = useRouter();
    const {isPortrait} = useResponsive();
    const title = useScramble([data?.profile.name ?? 'd-exclaimation', 'vin'], 15, 5000);
    const { scrollYProgress } = useViewportScroll();
    const headingSize = useTransform(scrollYProgress, [0, 0.4], [6, 3]);
    const headingSizeSpring = useSpring(headingSize, {
        mass: 0.008
    });
    const headingSizePx = useMotionTemplate`${headingSizeSpring}vw`;

    if (error) {
        if (typeof window !== 'undefined')
            router.push('/404').catch(console.log);
        return <LoadingScreen />;
    }

    if (fetching || !data) {
        return <LoadingScreen/>;
    }

    return (
        <Box mb="300px" fontFamily="mono">
            <RouteNavBar/>
            <MetaHead
                title={data.profile.name}
                description={
                    data.profile.bio
                }
            />
            <Box pos="fixed" inset={0}>
                <Box maxW="1000" margin="0 auto" py={14} px={12}>
                    <Stack alignItems="flex-end">
                        <Flex
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            wrap="wrap"
                        >
                            {title.map((char, i) => {
                                const isSpaces = char === ' ';
                                const isDUDS = DUDS.indexOf(char) !== -1;
                                return (
                                    <MotionText
                                        key={i}
                                        fontFamily="monospace"
                                        color={isDUDS ? 'gray.500' : 'gray.50'}
                                        opacity={isSpaces ? 0 : 1}
                                        style={{fontSize: headingSizePx}}
                                    >
                                        {isSpaces ? '_' : char}
                                    </MotionText>
                                );
                            })}
                        </Flex>
                        <Stack direction={isPortrait ? 'row' : 'column'} alignItems="flex-end">
                            <NextLink href="/repos" passHref>
                                <Link fontWeight={400} fontFamily="mono" size="min(1.5rem, 3vw)">
                                Projects
                                </Link>
                            </NextLink>
                            <NextLink href="/chill" passHref>
                                <Link fontWeight={400} fontFamily="mono" size="min(1.5rem, 3vw)">
                                Chill
                                </Link>
                            </NextLink>
                            <NextLink href={data.profile.githubURL} passHref>
                                <Link fontWeight={400} textColor="messenger.200" isExternal fontFamily="mono" size="min(1.5rem, 3vw)">
                                Github
                                </Link>
                            </NextLink>
                            <NextLink href={`https://twitter.com/${data.profile.twitterUsername}`} passHref>
                                <Link fontWeight={400} textColor="messenger.200" isExternal fontFamily="mono" size="min(1.5rem, 3vw)">
                                Twitter
                                </Link>
                            </NextLink>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box
                bg="bg"
                pos="relative"
                margin="0 auto"
                zIndex={1}
                lineHeight="170%"
                {...(isPortrait 
                    ? {
                        p: 4,
                        maxWidth: '90vw',
                        top: '10vh',
                        fontSize: 'sm',
                        borderRadius: 'md',
                    } 
                    : {
                        p: 16,
                        maxW: 'min(800px, 95vw)',
                        top: '20vh',
                        right: '8vw',
                        fontSize: 'lg',
                        borderRadius: 'md',
                    } 
                )}

            >
                <Scrambled phrases={[
                    'Software Engineer', 'Computer Science Student', 'Somewhat competent Backend Engineer', 'Maybe Full Stack Developer', 'Probably not Frontend Developer', 'Avid functional programming enjoyer',
                    'I don\'t know...', 'You should stop reading..', 'Like right now...', 'I am out of titles...',
                    'Hope you enjoy your visit...', 'Here is the part where I advertise myself', 'Follow me on Twitter',
                    '@d_exclaimation'
                ]} speed={10} delay={5000} align="start" fontWeight={500} fontSize={isPortrait ? 'lg' : '2xl'} mb={8}/>
                Hello, I am Vincent (d-exclaimation). I am a software engineer and student from somewhere on this planet. 
                I like a lot of things especially involving software engineering and new technologies such as distributed systems, server-side programming, GraphQL, etc. 
                <br />
                <br />
                Studying is currently my number 1 priority as I am still a university student. However, as already stated, I spend a good amount of my free time learning and working on programming projects.
                I often use different technologies as I like exploring. At the moment, I am leaning towards backend engineering using languages like Scala, Elixir, and Go.
                <br />
                <br />
                <Scrambled phrases={[
                    'Profesional Experience', 'Work history', 'and other things people put in their resume'
                ]} speed={10} delay={7500} align="start" fontWeight={400} fontSize={isPortrait ? 'md' : 'lg'} mb="4"/>
                I don{'\''}t have any professional experience as of now, so enjoy a picture of a cute dog I found on the internet instead.
                <br />
                <br />
                <Image src="/images/doge.jpeg" />
                <br />
                <br />
                You{'\''}re welcome.
            </Box>
        </Box>
    );
};

export default  withUrqlClient(createUrqlClient, { ssr: true })(Index);
