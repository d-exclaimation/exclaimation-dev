//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 00:07.
//

import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import {
    motion, useMotionTemplate, useSpring, useTransform, useViewportScroll
} from 'framer-motion';
import { default as NextLink } from 'next/link';
import React from 'react';
import MetaHead from '../components/shared/meta/MetaHead';
import Scrambled from '../components/shared/meta/Scrambled';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import { useResponsive } from '../lib/hooks/useResponsive';
import { DUDS, useScramble } from '../lib/hooks/useScramble';

const MotionText = motion(Text);

const New: React.FC = () => {
    const {isPortrait} = useResponsive();
    const title = useScramble(['d-exclaimation', 'vin'], 15, 5000);
    const { scrollYProgress } = useViewportScroll();
    const headingSize = useTransform(scrollYProgress, [0, 0.4], [6, 3]);
    const headingSizeSpring = useSpring(headingSize, {
        mass: 0.008
    });
    const headingSizePx = useMotionTemplate`${headingSizeSpring}vw`;

    return (
        <Box mb="300px" fontFamily="mono">
            <RouteNavBar/>
            <MetaHead
                title="d-exclaimation"
                description={
                    'Welcome to the d-exclaimation developer website by vin aka d-exclaimation. This is the website / web app for all things related to me. My profiles, links, repos, projects, bios, and blogs, you named it it is probably here'
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
                        <Stack direction={isPortrait ? 'row' : 'column'}>
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
                            <NextLink href="https://github.com/d-exclaimation" passHref>
                                <Link fontWeight={400} isExternal fontFamily="mono" size="min(1.5rem, 3vw)">
                                Github
                                </Link>
                            </NextLink>
                            <NextLink href="https://twitter.com/d_exclaimation" passHref>
                                <Link fontWeight={400} isExternal fontFamily="mono" size="min(1.5rem, 3vw)">
                                Twitter
                                </Link>
                            </NextLink>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box
                {...(isPortrait 
                    ? {
                        p: 4,
                        bg: 'bg',
                        pos: 'relative',
                        maxWidth: '90vw',
                        margin: '0 auto',
                        top: '20vh',
                        zIndex: 1,
                        fontSize: 'sm',
                        lineHeight: '170%',
                        borderRadius: 'md',
                    } 
                    : {
                        p: 16,
                        bg: 'bg',
                        pos: 'relative',
                        maxW: 'min(800px, 95vw)',
                        margin: '0 auto',
                        top: '20vh',
                        right: '8vw',
                        zIndex: 1,
                        fontSize: 'lg',
                        lineHeight: '170%',
                        borderRadius: 'md',
                    } 
                )}

            >
                <Scrambled phrases={[
                    'Software Engineer', 'Computer Science Student', 'Somewhat competent Backend Engineer', 'Maybe Full Stack Developer', 'Probably not Frontend Developer', 'Avid functional programming enjoyer',
                    'I don\'t know...', 'You should stop reading..', 'Like right now...', 'I am out of titles...',
                    'Hope you enjoy your visit...', 'Here is the part where I advertise myself', 'Follow me on Twitter',
                    '@d_exclaimation'
                ]} speed={10} delay={5000} align="start" fontWeight={600} fontSize={isPortrait ? 'lg' : '2xl'} mb={8}/>
                Hello, I am Vincent (d-exclaimation). I am a software engineer and student from somewhere on this planet. 
                I like a lot of things especially involving software engineering and new technologies such as distributed systems, server-side programming, GraphQL, etc. 
                <br />
                <br />
                Studying is currently my number 1 priority as I am still a university student. However, as already stated, I spend a good amount of my free time learning and working on programming projects.
                <br />
                <br />
                <Heading fontWeight={isPortrait ? 200 : 100} size={isPortrait ? 'md' : 'lg'} mb={4}>
                    Proffesional Experience
                </Heading>
                I don{'\''}t have any professional experience as of now, so enjoy a picture of a cute dog I found on the internet instead.
                <br />
                <br />
                <Image src="/images/doge.jpeg" />
                <br />
                <br />
                Your welcome.
            </Box>
        </Box>
    );
};

export default New;
