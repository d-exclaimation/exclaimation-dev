//
//  TitleEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:30 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Input} from '@chakra-ui/react';

interface Props {
    state: string
    changeState: (newVal: string) => void
}

const TitleEditor: React.FC<Props> = ({state, changeState}: Props) => {
    return (
        <Input
            variant="flushed"
            value={state}
            onChange={e => changeState(e.target.value)}
        />
    );
};

export default TitleEditor;
