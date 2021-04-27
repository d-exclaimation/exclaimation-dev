//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {VStack, Heading} from '@chakra-ui/react';
import {lavender} from '../constants/color.scheme';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import BackgroundEntertainment from '../components/shared/features/BackgroundEntertainment';

const Error: React.FC = () => {
    return (
        <>
            <div className="App-header">
                <BackgroundEntertainment/>
                <VStack>
                    <Heading
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
            </div>
        </>
    );
};

export default Error;
