//
//  MarkdownEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Box, Button, useToast} from '@chakra-ui/react';
import MarkdownForm from './MarkdownForm';
import Hero from '../templates/Hero';
import AlertPopUp from '../templates/AlertPopUp';
import {useRouter} from 'next/router';
import {FormResult} from '../../models/enum/FormResult';

interface Props {
    submit: (title: string, body: string) => Promise<FormResult>,
}

const MarkdownEditor: React.FC<Props> = ({submit}: Props) => {
    const router = useRouter();
    const toast = useToast();
    const [form, setForm] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);
    const [res, setRes] = useState<FormResult>(FormResult.none);

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
                body: 'Failed to upload post!'
            };
        case FormResult.success:
            return {
                status: 'success',
                title: 'Success',
                body: 'Data uploaded to the server. Fire on!'
            };
        }
    })();

    const clear = (): void => {
        setForm('');
        setTitle('');
        setAlert(false);
    };

    React.useEffect(() => {
        setRes(FormResult.none);
    }, [title, form]);

    React.useEffect(() => {
        if (res === FormResult.none)
            return;
        toast({
            title: alertContent.title,
            description: alertContent.body,
            status: alertContent.status,
            duration: 4000,
            isClosable: true,
            onCloseComplete: async () => {
                setRes(FormResult.none);
                if(res === FormResult.success)
                    await router.push('/post');
                else
                    clear();
            }
        });
    }, [res]);


    return (
        <>
            <Box m={5} mt="min(10px, 40vw)">
                <Hero title={title || 'Enter your title'}/>
            </Box>
            <MarkdownForm title={title} setTitle={setTitle} body={form} setBody={setForm}/>
            <Button m={10} variant="ghost" boxShadow="dark-lg" colorScheme="teal" onClick={() => setAlert(true)}>Submit</Button>
            <AlertPopUp
                header={'Create new post'}
                body={'Are you sure you want to post this?'}
                confirmation={'Yes'}
                isShown={isAlert} onConfirm={async () => {
                    setRes(await submit(title, form));
                    setAlert(false);
                }} onClose={() => setAlert(false)}/>
        </>
    );
};

export default MarkdownEditor;
