//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {VStack, Heading, Flex} from '@chakra-ui/react';
import {lavender} from '../constants/color.scheme';
import {useRouter} from 'next/router';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import BackgroundViewModel from '../components/shared/features/BackgroundViewModel';

const Error: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Flex direction="column" className="New-header" alignItems="center" justifyContent="center">
                <BackgroundViewModel/>
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
