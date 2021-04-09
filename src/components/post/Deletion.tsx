//
//  Deletion.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:40 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import KeyForm from '../shared/KeyForm';
import {
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import {ViewOffIcon} from '@chakra-ui/icons';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';
import {FormResult} from '../../models/enum/FormResult';
import {useRouter} from 'next/router';

interface Props {
    deletePost: (key: string) => Promise<FormResult>,
}
const Deletion: React.FC<Props> = ({deletePost}: Props) => {
    const router = useRouter();
    const corner = useDynamicCorner();
    const [isShown, setShown] = useState<boolean>(false);
    const [pass, setPass] = useState<string>('');
    const onClose = () => setShown(false);
    return (
        <>
            <IconButton
                aria-label="delete"
                icon={<ViewOffIcon/>}
                variant="ghost"
                boxShadow="dark-lg"
                colorScheme="red"
                onClick={() => setShown(true)}
                pos="absolute"
                bottom={corner.y}
                right={corner.x}
            />
            <Modal isOpen={isShown} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#282c34">
                    <ModalHeader color="#fafafa">Delete this post?</ModalHeader>
                    <ModalCloseButton color="#fafafa" />
                    <ModalBody>
                        <KeyForm keyValue={pass} changeKey={setPass}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="pink" variant="ghost" onClick={async () => {
                            const res = await deletePost(pass);
                            if(res === FormResult.success)
                                await router.push('/post');
                        }}>Yes, please!</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Deletion;
