//
//  MarkdownEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {Button, HStack} from '@chakra-ui/react';
import MarkdownForm from './MarkdownForm';
import KeyForm from './KeyForm';

interface Props {
    submit: (title: string, body: string, key: string) => void,
}

const MarkdownEditor: React.FC<Props> = ({submit}: Props) => {
    const [form, setForm] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [key, setKey] = useState<string>('');


    return (
        <>
            <MarkdownForm title={title} setTitle={setTitle} body={form} setBody={setForm}/>
            <HStack m={5}>
                <KeyForm changeKey={setKey} keyValue={key}/>
                <Button colorScheme="teal" onClick={() => submit(title, form, key)}>Submit</Button>
            </HStack>
        </>
    );
};

export default MarkdownEditor;
