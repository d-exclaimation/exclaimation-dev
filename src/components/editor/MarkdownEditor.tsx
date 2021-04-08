//
//  MarkdownEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Button, HStack, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton} from '@chakra-ui/react';
import MarkdownForm from './MarkdownForm';
import KeyForm from './KeyForm';
import Hero from '../templates/Hero';
import AlertPopUp from '../templates/AlertPopUp';
import {useRouter} from 'next/router';

interface Props {
    submit: (title: string, body: string, key: string) => Promise<'success' | 'failure'>,
}

const MarkdownEditor: React.FC<Props> = ({submit}: Props) => {
    const router = useRouter();
    const [form, setForm] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [key, setKey] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);
    const [res, setRes] = useState<'success' | 'failure' | 'none'>('none');

    return (
        <>
            <Hero title={title || 'Enter your title'} />
            <MarkdownForm title={title} setTitle={setTitle} body={form} setBody={setForm}/>

            <HStack m={10} py={3} px={5} boxShadow="dark-lg" borderRadius={10}>
                { res !== 'none' ?
                    <Alert status={res === 'success' ? 'success' : 'error'} borderRadius={10}>
                        <AlertIcon />
                        <HStack flex="1">
                            <AlertTitle>{res === 'success' ? 'Success' : 'Failure'}!</AlertTitle>
                            <AlertDescription display="block">
                                { res === 'success' ? 'Data uploaded to the server. Fire on!' : 'Fail to upload post!'}
                            </AlertDescription>
                        </HStack>
                        <CloseButton ml={3} onClick={() => {
                            router.push('/post');
                            setRes('none');
                        }} />
                    </Alert>
                    : <>
                        <KeyForm changeKey={setKey} keyValue={key}/>
                        <Button colorScheme="teal" onClick={() => setAlert(true)}>Submit</Button>
                        <AlertPopUp
                            header={'Create new post'}
                            body={'Are you sure you want to post this?'}
                            confirmation={'Yes'}
                            isShown={isAlert} onConfirm={async () => {
                                setRes(await submit(title, form, key));
                                setAlert(false);
                            }} onClose={() => setAlert(false)}/>
                    </>}
            </HStack>
        </>
    );
};

export default MarkdownEditor;
