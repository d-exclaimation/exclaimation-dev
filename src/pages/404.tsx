//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import BackgroundViewModel from '../components/shared/features/BackgroundViewModel';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import Scrambled from '../components/shared/meta/Scrambled';

const Error: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Flex direction="column" className="New-header" alignItems="center" justifyContent="center">
                <Box pos="fixed" top="1vh" left="1vw">
                    <BackgroundViewModel/>
                </Box>
                <Scrambled
                    phrases={['404', 'Page not found', 'Not much here', 'There are a mini games, though', 'Have fun']}
                    speed={10}
                    delay={2500}
                    onClick={async () => {
                        await router.push('/');
                    }}
                    fontSize="5vw"
                    fontFamily="mono"
                />
                <FooterDisclaimer/>
            </Flex>
        </>
    );
};

export default Error;
