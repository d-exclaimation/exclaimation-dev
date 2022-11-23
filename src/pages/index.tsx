//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 00:07.
//

import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { withUrqlClient } from "next-urql";
import { default as NextLink } from "next/link";
import React from "react";
import LoadingScreen from "../components/shared/features/LoadingScreen";
import SpiningImage from "../components/shared/features/SpiningImage";
import MetaHead from "../components/shared/meta/MetaHead";
import Scrambled from "../components/shared/meta/Scrambled";
import RouteNavBar from "../components/shared/routes/RouteNavBar";
import { useResponsive } from "../lib/hooks/useResponsive";
import { DUDS, useScramble } from "../lib/hooks/useScramble";
import { createUrqlClient } from "../lib/server/createUrqlClient";
import { useProfileQuery } from "../models/graphql/types";

const MotionText = motion(Text);

const Index: React.FC = () => {
  const [{ fetching, data }] = useProfileQuery();
  const { isPortrait } = useResponsive();
  const { scrollYProgress } = useViewportScroll();

  const title = useScramble(
    [data?.profile.name ?? "d-exclaimation", "vin"],
    15,
    5000
  );
  const titleTransformation = useTransform(scrollYProgress, [0, 0.4], [6, 3]);
  const titleSpring = useSpring(titleTransformation, {
    mass: 0.008,
  });
  const titleSize = useMotionTemplate`${titleSpring}vw`;

  if (fetching) {
    return <LoadingScreen />;
  }

  return (
    <Box mb="300px" fontFamily="mono" bg="black">
      <RouteNavBar />
      <MetaHead
        title={data?.profile.name ?? "d-exclaimation"}
        description={data?.profile.bio ?? "This is my website"}
      />
      <Box pos="fixed" inset={0}>
        <Box maxW="1000" margin="0 auto" py={14} px={12}>
          <Stack alignItems="flex-start">
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="center"
              wrap="wrap"
            >
              {title.map((char, i) => {
                const isSpaces = char === " ";
                const isDUDS = DUDS.indexOf(char) !== -1;
                return (
                  <MotionText
                    key={i}
                    fontFamily="monospace"
                    color={isDUDS ? "gray.500" : "gray.50"}
                    opacity={isSpaces ? 0 : 1}
                    style={{ fontSize: titleSize }}
                  >
                    {isSpaces ? "_" : char}
                  </MotionText>
                );
              })}
            </Flex>
            <Stack
              direction={isPortrait ? "row" : "column"}
              alignItems="flex-start"
            >
              <NextLink href="/repos" passHref>
                <Link
                  fontWeight={400}
                  fontFamily="mono"
                  size="min(1.5rem, 3vw)"
                >
                  Projects
                </Link>
              </NextLink>
              <NextLink href="/chill" passHref>
                <Link
                  fontWeight={400}
                  fontFamily="mono"
                  size="min(1.5rem, 3vw)"
                >
                  Chill
                </Link>
              </NextLink>
              <NextLink href="https://linkedin.com/in/d-exclaimation" passHref>
                <Link
                  fontWeight={400}
                  fontFamily="mono"
                  size="min(1.5rem, 3vw)"
                >
                  Linkedin
                </Link>
              </NextLink>
              {data && (
                <NextLink href={data.profile.githubURL} passHref>
                  <Link
                    fontWeight={400}
                    textColor="messenger.200"
                    isExternal
                    fontFamily="mono"
                    size="min(1.5rem, 3vw)"
                  >
                    Github
                  </Link>
                </NextLink>
              )}
              {data && (
                <NextLink
                  href={`https://twitter.com/${data.profile.twitterUsername}`}
                  passHref
                >
                  <Link
                    fontWeight={400}
                    textColor="messenger.200"
                    isExternal
                    fontFamily="mono"
                    size="min(1.5rem, 3vw)"
                  >
                    Twitter
                  </Link>
                </NextLink>
              )}
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
              maxWidth: "90vw",
              top: "10vh",
              fontSize: "sm",
            }
          : {
              p: 16,
              maxW: "min(800px, 95vw)",
              top: "20vh",
              left: "8vw",
              fontSize: "lg",
            })}
      >
        <Scrambled
          phrases={[
            "Software Engineer",
            "Computer Science Student",
            "Somewhat competent Backend Engineer",
            "Maybe Full Stack Developer",
            "Probably not Frontend Developer",
            "Avid functional programming enjoyer",
            "I don't know...",
            "You should stop reading..",
            "Like right now...",
            "I am out of titles...",
            "Hope you enjoy your visit...",
            "Here is the part where I advertise myself",
            "Follow me on Twitter",
            "@d_exclaimation",
            "Cheers!!",
          ]}
          speed={10}
          delay={5000}
          align="start"
          fontWeight={600}
          fontSize={isPortrait ? "lg" : "2xl"}
          mb={8}
        />
        Hello, I am Vincent (d-exclaimation). I am a software engineer and
        university student. As you can probably tell, I am a big fan of
        programming. I enjoy working on a lot of fields especially involving new
        technologies but most of the time, I work on full-stack projects front
        to back, big to small, anything that I find interesting.
        <br />
        <br />
        Currently, I mainly dedicated most of my time towards studying. However,
        I often spend my free time coming up with some software projects to work
        on, sometimes as an excuse to use a new technology or learn a concept.
        <br />
        <br />
        My specialization is on server-side development mainly around API
        designs, concurrency, and databases but I have learnt and worked on
        fields beyond my comfort zone such as web frontend and iOS development.
        Often times, you{"'"}ll see me using programming languages such as
        Scala, Go, Swift, Elixir, and Typescript, and technologies such as
        React, SwiftUI, Akka, GraphQL, Node.js, etc.
        <br />
        <br />
        <Scrambled
          phrases={[
            "Profesional Experience",
            "Work history",
            "and other things people put in their resume",
          ]}
          speed={10}
          delay={7500}
          align="start"
          fontWeight={600}
          fontSize={isPortrait ? "md" : "lg"}
          mb="4"
        />
        I don{"'"}t have any professional experience or job history as of now,
        so enjoy a picture of a cat I found on the internet instead.
        <br />
        <br />
        <SpiningImage src="/images/cat-vibe.gif" />
        <i>
          <small>Try clicking the image</small>
        </i>
        <br />
        <br />
        You{"'"}re welcome.
        <br />
        <NextLink href="/static/cv.pdf" passHref>
          <Link
            fontWeight={400}
            textColor="messenger.200"
            isExternal
            fontFamily="mono"
          >
            <Text fontSize={isPortrait ? "xs" : "sm"}>
              Also, here is my CV.
            </Text>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
