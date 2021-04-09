//
//  AlertNotification.tsx
//  exclaimation
//
//  Created by d-exclaimation on 9:56 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Box, Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, HStack, SlideFade} from '@chakra-ui/react';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';

interface Props {
    status: 'info' | 'warning' | 'success' | 'error'
    title: string,
    body: string,
    isShown: boolean,
    onClose: () => void
}
const AlertNotification: React.FC<Props> = ({ status, title, body, isShown, onClose }: Props) => {
    const corner = useDynamicCorner();
    return (
        <Box pos="fixed" top={corner.y} right={corner.x} opacity={isShown ? 1 : 0}>
            <SlideFade offsetY={-20} in={isShown} style={{ zIndex: 10 }}>
                <Alert status={status} borderRadius={10}>
                    <AlertIcon />
                    <HStack flex="1">
                        <AlertTitle>{title}!</AlertTitle>
                        <AlertDescription display="block">
                            {body}
                        </AlertDescription>
                    </HStack>
                    <CloseButton ml={3} onClick={() => onClose()} />
                </Alert>
            </SlideFade>
        </Box>
    );
};

export default AlertNotification;
