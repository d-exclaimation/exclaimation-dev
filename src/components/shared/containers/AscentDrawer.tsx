//
//  AscentDrawer.tsx
//  exclaimation
//
//  Created by d-exclaimation on 5:59 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    DarkMode,
    Drawer,
    DrawerBody,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Text
} from '@chakra-ui/react';
import React from 'react';

interface Props {
    title: string
    placement: 'left' | 'right' | 'top' | 'bottom'
    onClose: () => void
    isOpen: boolean
    footer?: string | JSX.Element
}

/// Drawer with the correct theme matching ascent color
const AscentDrawer: React.FC<Props> = ({placement, onClose, isOpen, title, footer, children}: React.PropsWithChildren<Props>) => {
    return (
        <DarkMode>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent color="white">
                        <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
                        <DrawerBody>
                            {children}
                        </DrawerBody>
                        {
                            footer &&
                            <DrawerFooter>
                                {
                                    typeof footer === 'string'
                                        ? <Text>{footer}</Text>
                                        : footer
                                }
                            </DrawerFooter>
                        }
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </DarkMode>
    );
};

export default AscentDrawer;
