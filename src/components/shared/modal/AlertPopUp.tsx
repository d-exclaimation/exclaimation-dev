//
//  AlertPopUp.tsx
//  exclaimation
//
//  Created by d-exclaimation on 6:08 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from '@chakra-ui/react';

interface Props {
    header: string,
    body: string,
    confirmation: string
    isShown: boolean
    onConfirm: () => void,
    onClose: () => void
}

/// Alert Dialog Pop Up with custom logic
const AlertPopUp: React.FC<Props> = ({header, body, confirmation, isShown, onClose, onConfirm}: React.PropsWithChildren<Props>) => {
    const cancelRef = React.useRef<HTMLButtonElement>(null);
    return (
        <AlertDialog
            isOpen={isShown}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {header}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {body}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} variant="ghost" colorScheme="red" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="green" variant="ghost" onClick={onConfirm} ml={3}>
                            {confirmation}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertPopUp;
