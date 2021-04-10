//
//  Deletion.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:40 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useState} from 'react';
import {
    IconButton,
} from '@chakra-ui/react';
import {ViewOffIcon} from '@chakra-ui/icons';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';
import {FormResult} from '../../models/enum/FormResult';
import {useRouter} from 'next/router';
import AlertPopUp from '../templates/AlertPopUp';

interface Props {
    deletePost: () => Promise<FormResult>,
}
const Deletion: React.FC<Props> = ({deletePost}: Props) => {
    const router = useRouter();
    const corner = useDynamicCorner();
    const [isShown, setShown] = useState<boolean>(false);
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
            <AlertPopUp
                header={'Delete this post?'} body={'Are you sure about this?'}
                confirmation={'Yes, please!'}
                isShown={isShown}
                onConfirm={async () => {
                    const res = await deletePost();
                    if(res === FormResult.success)
                        await router.push('/post');
                }}
                onClose={onClose}
            />
        </>
    );
};

export default Deletion;
