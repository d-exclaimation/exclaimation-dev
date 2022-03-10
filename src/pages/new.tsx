//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 00:07.
//

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import {
    motion, useMotionTemplate, useSpring, useTransform, useViewportScroll
} from 'framer-motion';
import React from 'react';
import MetaHead from '../components/shared/meta/MetaHead';
import { DUDS, useScramble } from '../lib/hooks/useScramble';

const MotionText = motion(Text);

const New: React.FC = () => {
    const desc = useScramble(['d-exclaimation', 'vin'], 15, 2000);
    const { scrollYProgress } = useViewportScroll();
    const headingSize = useTransform(scrollYProgress, [0, 0.4], [100, 50]);
    const headingSizeSpring = useSpring(headingSize, {
        mass: 0.008
    });
    const headingSizePx = useMotionTemplate`${headingSizeSpring}px`;

    return (
        <Box mb="300px" fontFamily="mono">
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
                            {desc.map((char, i) => {
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
                        {/* <MotionHeading fontWeight={600} style={{ fontSize: headingSizePx }}>
              d-exclaimation
            </MotionHeading> */}
                        <Heading fontWeight={400} fontSize="lg">
              About
                        </Heading>
                        <Heading fontWeight={400} fontSize="lg">
              Work
                        </Heading>
                        <Heading fontWeight={400} fontSize="lg">
              Contact
                        </Heading>

                    </Stack>
                </Box>
            </Box>
            <Box
                p={16}
                bg="bg"
                pos="relative"
                maxW="800px"
                margin="0 auto"
                top={180}
                right={160}
                zIndex={1}
                fontSize="lg"
                lineHeight="170%"
                borderRadius="md"
            >
                <Heading fontWeight={400} size="2xl" mb={8}>
          Web Developer
                </Heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
        ullamcorper massa, quis varius ex. Duis eu malesuada elit. Donec orci
        nulla, pharetra non tellus in, pretium dignissim purus. Nunc vulputate
        nulla et quam hendrerit tincidunt. Etiam sed nisi augue. Vestibulum nec
        ornare augue. Maecenas eget nunc porttitor, pharetra est eget, laoreet
        magna. Donec sit amet tellus tristique, dapibus ligula et, efficitur
        sem. Sed eget fringilla eros. Donec maximus tortor dui.
                <br />
                <br />
                <Heading fontWeight={100} size="lg" mb={4}>
          Experience
                </Heading>
        Sed feugiat arcu diam, in tincidunt quam tempor sit amet. Pellentesque
        bibendum convallis turpis, vitae egestas lectus accumsan eget. Cras
        aliquam justo non augue sollicitudin porttitor. Praesent sodales neque
        sed blandit consequat. Nam et nisi neque. Aenean elit purus, interdum ut
        ipsum sed, interdum pellentesque ligula. Curabitur risus eros, elementum
        vel sem non, elementum interdum neque. Nam vestibulum ex in magna
        posuere, nec cursus velit condimentum. Aliquam at euismod nibh, id
        consectetur massa. Sed ac luctus eros, faucibus placerat magna. Duis non
        nisi sed tortor pellentesque ornare. Nam sit amet lacus nec dolor rutrum
        auctor.
                <br />
                <br />
        Aenean pellentesque ante eleifend, vestibulum magna nec, blandit risus.
        Nam malesuada quam at pretium bibendum. In odio enim, sodales nec sapien
        quis, luctus malesuada turpis. Proin rhoncus neque sit amet malesuada
        tristique. Donec volutpat egestas est, sit amet placerat ante dictum at.
        Donec nisl lorem, egestas vel lectus nec, varius varius dolor. Donec eu
        placerat turpis.
                <br />
                <br />
        Curabitur euismod purus tellus, sit amet lacinia elit accumsan ac. Ut
        vehicula eleifend libero, non consectetur enim sagittis vitae. Cras at
        lectus porttitor, feugiat augue id, sodales dolor. Ut vehicula cursus
        mauris scelerisque interdum. Integer aliquet neque tincidunt tortor
        condimentum aliquam. Sed condimentum non lorem at scelerisque. Aenean
        pharetra elit ut lobortis condimentum. Nulla in dui nec quam facilisis
        pellentesque. Aenean sollicitudin orci vel egestas tempus. Phasellus
        quis aliquet nunc. Integer suscipit consequat odio, ac convallis dui
        eleifend nec. Pellentesque laoreet eleifend eros, at suscipit nisi
        vestibulum nec. Integer ornare ac tellus sed suscipit. Nulla auctor
        ipsum a sodales egestas. Praesent blandit, risus eu bibendum volutpat,
        ex justo fringilla velit, facilisis cursus dui enim ut nisl. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
                <br />
                <br />
        Sed tincidunt volutpat efficitur. Duis blandit consectetur metus at
        volutpat. Nulla semper felis elit, non scelerisque enim dignissim non.
        Maecenas malesuada tincidunt est eu semper. Quisque blandit sed justo eu
        rhoncus. Morbi vehicula ipsum vel ex posuere fermentum. Aenean nisl
        tortor, luctus non lobortis at, iaculis eget orci. Mauris a arcu vel
        lorem euismod egestas a et ex. In in nunc in dolor commodo hendrerit.
        Sed accumsan, metus ut tincidunt hendrerit, ligula libero sodales
        lectus, sed interdum urna nibh id nunc. Proin fermentum purus sit amet
        sollicitudin faucibus.
                <br />
                <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
        ullamcorper massa, quis varius ex. Duis eu malesuada elit. Donec orci
        nulla, pharetra non tellus in, pretium dignissim purus. Nunc vulputate
        nulla et quam hendrerit tincidunt. Etiam sed nisi augue. Vestibulum nec
        ornare augue. Maecenas eget nunc porttitor, pharetra est eget, laoreet
        magna. Donec sit amet tellus tristique, dapibus ligula et, efficitur
        sem. Sed eget fringilla eros. Donec maximus tortor dui.
                <br />
                <br />
        Sed feugiat arcu diam, in tincidunt quam tempor sit amet. Pellentesque
        bibendum convallis turpis, vitae egestas lectus accumsan eget. Cras
        aliquam justo non augue sollicitudin porttitor. Praesent sodales neque
        sed blandit consequat. Nam et nisi neque. Aenean elit purus, interdum ut
        ipsum sed, interdum pellentesque ligula. Curabitur risus eros, elementum
        vel sem non, elementum interdum neque. Nam vestibulum ex in magna
        posuere, nec cursus velit condimentum. Aliquam at euismod nibh, id
        consectetur massa. Sed ac luctus eros, faucibus placerat magna. Duis non
        nisi sed tortor pellentesque ornare. Nam sit amet lacus nec dolor rutrum
        auctor.
                <br />
                <br />
        Aenean pellentesque ante eleifend, vestibulum magna nec, blandit risus.
        Nam malesuada quam at pretium bibendum. In odio enim, sodales nec sapien
        quis, luctus malesuada turpis. Proin rhoncus neque sit amet malesuada
        tristique. Donec volutpat egestas est, sit amet placerat ante dictum at.
        Donec nisl lorem, egestas vel lectus nec, varius varius dolor. Donec eu
        placerat turpis.
                <br />
                <br />
        Curabitur euismod purus tellus, sit amet lacinia elit accumsan ac. Ut
        vehicula eleifend libero, non consectetur enim sagittis vitae. Cras at
        lectus porttitor, feugiat augue id, sodales dolor. Ut vehicula cursus
        mauris scelerisque interdum. Integer aliquet neque tincidunt tortor
        condimentum aliquam. Sed condimentum non lorem at scelerisque. Aenean
        pharetra elit ut lobortis condimentum. Nulla in dui nec quam facilisis
        pellentesque. Aenean sollicitudin orci vel egestas tempus. Phasellus
        quis aliquet nunc. Integer suscipit consequat odio, ac convallis dui
        eleifend nec. Pellentesque laoreet eleifend eros, at suscipit nisi
        vestibulum nec. Integer ornare ac tellus sed suscipit. Nulla auctor
        ipsum a sodales egestas. Praesent blandit, risus eu bibendum volutpat,
        ex justo fringilla velit, facilisis cursus dui enim ut nisl. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
                <br />
                <br />
        Sed tincidunt volutpat efficitur. Duis blandit consectetur metus at
        volutpat. Nulla semper felis elit, non scelerisque enim dignissim non.
        Maecenas malesuada tincidunt est eu semper. Quisque blandit sed justo eu
        rhoncus. Morbi vehicula ipsum vel ex posuere fermentum. Aenean nisl
        tortor, luctus non lobortis at, iaculis eget orci. Mauris a arcu vel
        lorem euismod egestas a et ex. In in nunc in dolor commodo hendrerit.
        Sed accumsan, metus ut tincidunt hendrerit, ligula libero sodales
        lectus, sed interdum urna nibh id nunc. Proin fermentum purus sit amet
        sollicitudin faucibus.
            </Box>
        </Box>
    );
};

export default New;
