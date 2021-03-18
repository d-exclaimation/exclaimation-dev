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
    ModalOverlay
} from '@chakra-ui/react';
import {favRed, nextBlue} from '../../constants/color.scheme';

interface Props {
    title: string,
    isShown: boolean,
    onCancel: () => void,
    onConfirm: () => void,
    children?: React.ReactNode
}

const FormModal: React.FC<Props> = ({title, isShown, onConfirm, onCancel, children}: Props) => {
    return (
        <Modal
            size={'2xl'}
            isOpen={isShown}
            onClose={onCancel}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> { title } </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    { children }
                </ModalBody>

                <ModalFooter>
                    <Button
                        onClick={onConfirm}
                        color={'#20ac74'}
                        variant="ghost"
                        shadow="dark-lg"
                        mr={3}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onCancel}
                        color={favRed}
                        variant="ghost"
                        shadow="dark-lg"
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FormModal;
