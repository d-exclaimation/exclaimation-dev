//
//  MarkdownEditor.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:00 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Box, GridItem, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useCreatePostMutationMutation } from '../../models/graphql/types';
import Hero from '../shared/meta/Hero';
import AlertPopUp from '../shared/modal/AlertPopUp';
import MarkdownForm from './MarkdownForm';

const EditorViewModel: React.FC = () => {
    const [, createPost] = useCreatePostMutationMutation();
    const router = useRouter();
    const toast = useToast();
    const [form, setForm] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [isAlert, setAlert] = useState<boolean>(false);

    const onSubmit = async () => {
        // Try submitting and notify with toast all the result
        try {
            const {error} = await createPost({
                input: {
                    title,
                    body: form,
                },
            });
            toast({
                title: error ? 'Failure' : 'Success',
                description: error ? 'Failed to upload post' : 'Data uploaded to the server. Fire on!',
                status: error ? 'error' : 'success',
                duration: 4000,
                isClosable: true,
                onCloseComplete: async () => {
                    setAlert(false);
                    if(!error)
                        await router.push('/post');
                    else
                        clear();
                    
                }
            });
        } catch (e) {
            // Handling error on client side
            toast({
                title: 'Failure',
                description: 'Caught an exception when trying to upload',
                status: 'error',
                duration: 4000,
                isClosable: true,
                onCloseComplete: () => {
                    setAlert(false);
                    clear();
                }
            });
        }
    };

    /// Automatically clear all form input
    const clear = (): void => {
        setForm('');
        setTitle('');
        setAlert(false);
    };

    return (
        <>
            <GridItem
                className="New-Section"
                gridArea="t"
            >
                <Box m={5} mt="min(10px, 40vw)">
                    <Hero title={title || 'Enter your title'} oneWord/>
                </Box>
            </GridItem>
            <GridItem
                className="New-Section"
                gridArea="b"
            >
                <Box>
                    <MarkdownForm title={title} setTitle={setTitle} body={form} setBody={setForm} setAlert={setAlert}/>
                </Box>
            </GridItem>
            <AlertPopUp
                header={'Create new post'}
                body={'Are you sure you want to post this?'}
                confirmation={'Yes'}
                isShown={isAlert}
                onConfirm={onSubmit}
                onClose={() => setAlert(false)}
            />
        </>
    );
};

export default EditorViewModel;
