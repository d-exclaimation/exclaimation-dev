//
//  TitleEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Input, Box} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    state: string
    changeState: (newVal: string) => void
}

const TitleEditor: React.FC<Props> = ({state, changeState}: React.PropsWithChildren<Props>) => {
    const window = useWindowSize();
    return (
        <Box
            p={window.width < window.height ? 2 : 4}
            px={window.width < window.height ? 4 : 6}
            m={10} boxShadow="dark-lg" borderRadius={10}
        >
            <Input
                color="white"
                placeholder="Enter your title"
                minW={Math.floor(window.width / 1.25)}
                variant="unstyled"
                value={state}
                onChange={e => changeState(e.target.value)}
            />
        </Box>
    );
};

export default TitleEditor;
