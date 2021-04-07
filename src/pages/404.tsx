//
//  404.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:13 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {HStack, VStack, Heading, Img, Divider} from '@chakra-ui/react';
import {favRed} from '../constants/color.scheme';
import {useWindowSize} from '../lib/hooks/useWindow';

const Error: React.FC = () => {
    const window = useWindowSize();
    return (
        <>
            <div className="App-header">
                <HStack>
                    <Img
                        maxW={Math.floor(window.width / 3)}
                        src="/images/mylogo.png"
                        alt="this is an image lol"
                        mr={3}
                    />
                    <VStack>
                        <Heading
                            fontSize="6vw"
                            color={favRed}
                        >
                            404
                        </Heading>
                        <Divider
                            color="white"
                        />
                        <Heading
                            fontSize="1vw"
                            color={'#c10142'}
                        >
                           Page Not Found
                        </Heading>
                    </VStack>
                </HStack>
            </div>
        </>
    );
};

export default Error;
