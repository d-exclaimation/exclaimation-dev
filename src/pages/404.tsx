//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {VStack, Heading} from '@chakra-ui/react';
import {favRed} from '../constants/color.scheme';
import FooterDisclaimer from '../components/shared/meta/FooterDisclaimer';
import GameOfLife from '../components/conway/GameOfLife';

const Error: React.FC = () => {
    return (
        <>
            <div className="App-header">
                <VStack>
                    <Heading
                        fontSize="6vw"
                        color={favRed}
                    >
                        404
                    </Heading>
                    <Heading
                        fontSize="1vw"
                        color={'#c10142'}
                    >
                        Page Not Found
                    </Heading>
                </VStack>
                <GameOfLife init={true} />
                <FooterDisclaimer/>
            </div>
        </>
    );
};

export default Error;
