//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import BackgroundViewModel from '../components/shared/features/BackgroundViewModel';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import { lavender } from '../constants/color.scheme';

const Error: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Flex direction="column" className="New-header" alignItems="center" justifyContent="center">
                <Box pos="fixed" top="1vh" left="1vw">
                    <BackgroundViewModel/>
                </Box>
                <VStack>
                    <Heading
                        onClick={async () => {
                            await router.push('/');
                        }}
                        fontSize="6vw"
                        color={lavender}
                    >
                        404
                    </Heading>
                    <Heading
                        fontSize="1vw"
                        color={'tan'}
                    >
                        Page Not Found
                    </Heading>
                </VStack>
                <FooterDisclaimer/>
            </Flex>
        </>
    );
};

export default Error;
