//
//  LoginForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:11 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Box, Button, Flex, FormControl, FormHelperText, FormLabel, Spacer, useToast} from '@chakra-ui/react';
import {FormResult} from '../../models/enum/FormResult';
import KeyForm from '../shared/form/KeyForm';
import {useWindowSize} from '../../lib/hooks/useWindow';
import {useRouter} from 'next/router';

interface Props {
    login: (key: string) => Promise<FormResult>,
}

const LoginForm: React.FC<Props> = ({login}: React.PropsWithChildren<Props>) => {
    const router = useRouter();
    const [key, setKey] = useState<string>('');
    const [res, setRes] = useState<FormResult>(FormResult.none);
    const window = useWindowSize();
    const toast = useToast();

    const alertContent = ((): {status: 'success' | 'error' | 'info', title: string, body: string} => {
        switch (res) {
        case FormResult.none:
            return {
                status: 'info',
                title: 'Something happened',
                body: 'Be patient, as we try to resolve this'
            };
        case FormResult.failure:
            return {
                status: 'error',
                title: 'Failure',
                body: 'Failed to login as admin, check your credentials!'
            };
        case FormResult.success:
            return {
                status: 'success',
                title: 'Success',
                body: 'Welcome admin. Continue on!'
            };
        }
    })();

    React.useEffect(() => {
        if (res === FormResult.none)
            return;
        toast({
            title: alertContent.title,
            description: alertContent.body,
            status: alertContent.status,
            duration: 2000,
            isClosable: true,
            onCloseComplete: async () => {
                if(res === FormResult.success)
                    await router.push('/');
            }
        });
    }, [res]);

    return (
        <Box p={5} minW={Math.floor(window.width / 2.5)} boxShadow="dark-lg" borderRadius={10}>
            <FormControl>
                <FormLabel color="#fafafa">Login as Admin</FormLabel>
                <KeyForm keyValue={key} changeKey={key => setKey(key)}/>
                <Flex direction={'row'}>
                    <FormHelperText mt="auto" color="gray.500">
                        This is for admin only
                    </FormHelperText>
                    <Spacer/>
                    <Button
                        size="sm"
                        mt={6}
                        colorScheme="green"
                        onClick={async () => setRes(await login(key))}
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    );
};

export default LoginForm;
