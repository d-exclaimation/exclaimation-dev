//
//  KeyForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:16 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Input, InputGroup, InputRightElement, Button, Box} from '@chakra-ui/react';
import {useWindowSize} from '../../lib/hooks/useWindow';

interface Props {
    keyValue: string
    changeKey: (val: string) => void,
}
const KeyForm: React.FC<Props> = ({keyValue, changeKey}: Props) => {
    const [isShown, setShown] = useState<boolean>(false);
    const window = useWindowSize();
    return (
        <Box>
            <InputGroup size="md">
                <Input
                    variant={isShown ? 'outline' : 'filled'}
                    color="#fafafa"
                    maxW={Math.floor(window.width / 1.5)}
                    pr="4.5rem"
                    type={isShown ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={keyValue}
                    onChange={e => changeKey(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => setShown(!isShown)}>
                        {isShown ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    );
};

export default KeyForm;
