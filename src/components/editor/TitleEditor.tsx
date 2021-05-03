//
//  TitleEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Input, Box} from '@chakra-ui/react';
import {useResponsive} from '../../lib/hooks/useResponsive';

interface Props {
    state: string
    changeState: (newVal: string) => void
}

const TitleEditor: React.FC<Props> = ({state, changeState}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    return (
        <Box
            m="4"
        >
            <Input
                borderRadius={10}
                p={isPortrait ? 2 : 4}
                bg="cover"
                color="white"
                placeholder="Enter your title"
                minW="80vw"
                variant="unstyled"
                value={state}
                onChange={e => changeState(e.target.value)}
            />
        </Box>
    );
};

export default TitleEditor;
