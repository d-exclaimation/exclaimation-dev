//
//  RoutesSideBar.tsx
//  personal
//
//  Created by d-exclaimation on 7:21 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box, Button, Stack } from '@chakra-ui/react';
import {favRed} from '../../constants/color.scheme';
import Link from 'next/link';

import {routes} from '../../lib/routes';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {capitalized} from '../../lib/Typography';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';
import {useDynamicSize} from '../../lib/hooks/useDynamicSize';

const RouteSideCar: React.FC = (): JSX.Element => {
    const res = routes();
    const window = useWindowSize();
    const location = useDynamicCorner();
    const bSize = useDynamicSize();

    const [shown, setShown] = React.useState<boolean>(false);

    return (
        <Box
            pos="absolute" top={location.y} left={location.x}
            p={location.x}
        >
            <Stack direction={ window.width >= window.height ? 'row'  : 'column'} spacing={location.x * 2}>
                {shown && res.map((val, i) => {
                    const name = val.length > 1 ?
                        capitalized(val.slice(1))
                        : 'Home';
                    return (
                        <Link key={i} href={val}>
                            <Button
                                color={favRed}
                                variant="ghost"
                                size={bSize}
                                boxShadow="dark-lg"
                            > { name } </Button>
                        </Link>
                    );
                })}
                <Button
                    color={shown ? favRed : 'gray.500'}
                    variant="ghost"
                    size={bSize}
                    boxShadow="dark-lg"
                    onClick={() => setShown(!shown)}
                >
                    { shown ? ( window.width >= window.height ? '⟨' : '︿') : '...' }
                </Button>
            </Stack>
        </Box>
    );
};

export default RouteSideCar;