//
//  LoginForm.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:11 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Box, Button, Flex, FormControl, FormHelperText, FormLabel, Spacer, useToast} from '@chakra-ui/react';
import KeyForm from '../shared/modal/KeyForm';
import {useRouter} from 'next/router';
import {useLoginAdminMutation} from '../../models/graphql/types';


const LoginViewModel: React.FC = () => {
    const [, loginAdmin] = useLoginAdminMutation();
    const router = useRouter();
    const [key, setKey] = useState<string>('');
    const toast = useToast();

    const login = async () => {
        // try to login using credentials, either way sent a toast to notify the user of the result
        try {
            const {error} = await loginAdmin({
                time: new Date().toUTCString(),
                key: key,
            });

            toast({
                title: error ? 'Error' : 'Success',
                description: error ? 'Failed to login as admin, check your credentials!' : 'Welcome admin. Continue on!',
                status: error ? 'error' : 'success',
                duration: 2000,
                isClosable: true,
                onCloseComplete: async () => {
                    setKey('');
                    if (error)
                        return;
                    await router.push('/');
                }
            });
        } catch (e) {
            // Just in case Typescript throws the error
            toast({
                title: 'Exception',
                description: 'Be patient, as we try to resolve this',
                status: 'info',
                duration: 2000,
                isClosable: true,
                onCloseComplete: () => {
                    setKey('');
                }
            });
        }
    };

    return (
        <Box bg="bg" p={5} minW="40vw" boxShadow="dark-lg" borderRadius={10}>
            <FormControl>
                <FormLabel color="gray.300">Login as Admin</FormLabel>
                <KeyForm keyValue={key} changeKey={key => setKey(key)}/>
                <Flex direction="row">
                    <FormHelperText mt="auto" color="gray.500">
                        This is for admin only
                    </FormHelperText>
                    <Spacer/>
                    <Button
                        size="sm"
                        mt={6}
                        colorScheme="green"
                        onClick={login}
                    >
                        Submit
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    );
};

export default LoginViewModel;
