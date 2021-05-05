//
//  FormModal.ts
//  app
//
//  Created by d-exclaimation on 2:28 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, useColorMode
} from '@chakra-ui/react';

interface Props {
    title: string,
    isShown: boolean,
    onCancel: () => void,
    onConfirm: () => void,
    children?: React.ReactNode
}

/// Form on a modal
const FormModal: React.FC<Props> = ({title, isShown, onConfirm, onCancel, children}: React.PropsWithChildren<Props>) => {
    const {colorMode} = useColorMode();
    return (
        <Modal
            size={'2xl'}
            isOpen={isShown}
            onClose={onCancel}
        >
            <ModalOverlay />
            <ModalContent color={colorMode === 'dark' ? 'white' : 'black'}>
                <ModalHeader> { title } </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    { children }
                </ModalBody>

                <ModalFooter>
                    <Button
                        onClick={onConfirm}
                        colorScheme="teal"
                        variant="ghost"
                        mr={3}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onCancel}
                        colorScheme="red"
                        variant="ghost"
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FormModal;
