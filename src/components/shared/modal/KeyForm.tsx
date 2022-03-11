//
//  KeyForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:16 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Button, Input, InputGroup, InputRightElement, LightMode } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
    keyValue: string
    changeKey: (val: string) => void,
}

/// Password Keyinput
const KeyForm: React.FC<Props> = ({keyValue, changeKey}: React.PropsWithChildren<Props>) => {
    const [isShown, setShown] = useState<boolean>(false);
    return (
        <LightMode>
            <InputGroup size="md">
                <Input
                    variant={isShown ? 'outline' : 'filled'}
                    textColor="#fafafa"
                    maxW="67vw"
                    pr="4.5rem"
                    type={isShown ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={keyValue}
                    onChange={e => changeKey(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" textColor="bg" onClick={() => setShown(!isShown)}>
                        {isShown ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </LightMode>
    );
};

export default KeyForm;
