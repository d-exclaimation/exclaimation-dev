//
//  RoutesSideBar.tsx
//  personal
//
//  Created by d-exclaimation on 7:21 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box, VStack, Button } from '@chakra-ui/react';
import {favRed} from '../constants/color.scheme';
import Link from 'next/link';

import {routes} from '../lib/routes';
import {useWindowSize} from '../lib/WindowConfig';
import {capitalized} from '../lib/Typography';

const RouteSideCar: React.FC = (): JSX.Element => {
    const res = routes();
    const window = useWindowSize();
    const location = [
        Math.floor(Math.min(window.height * 0.005, 2)),
        Math.floor(Math.min(window.width * 0.005, 2))
    ];

    const bSize = (): 'sm' | 'md' | 'lg' | 'xs' => {
        const size = (window.width / 1300) * 4;
        const index = Math.floor(size) - 1;
        const all: ('xs' | 'sm' | 'md' | 'lg')[] = ['xs', 'sm', 'sm', 'lg'];
        return all[index];
    };

    return (
        <Box
            pos="absolute" top={location[0]} left={location[1]}
            p={location[1]}
        >
            <VStack spacing={location[1] * 2}>
                {res.map((val, i) => {
                    const name = val.length > 1 ?
                        capitalized(val.slice(1))
                        : 'Home';
                    return (
                        <Link key={i} href={val}>
                            <Button
                                color={favRed}
                                variant="ghost"
                                size={bSize()}
                                boxShadow="dark-lg"
                            > { name } </Button>
                        </Link>
                    );
                })}
            </VStack>
        </Box>
    );
};

export default RouteSideCar;
