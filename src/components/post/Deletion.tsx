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
import {MdDelete} from 'react-icons/md';
import {FormResult} from '../../models/enum/FormResult';
import {useRouter} from 'next/router';
import AlertPopUp from '../shared/modal/AlertPopUp';

interface Props {
    deletePost: () => Promise<FormResult>,
}
const Deletion: React.FC<Props> = ({deletePost}: React.PropsWithChildren<Props>) => {
    const router = useRouter();
    const [isShown, setShown] = useState<boolean>(false);
    const onClose = () => setShown(false);
    return (
        <>
            <IconButton
                aria-label="delete"
                icon={<MdDelete/>}
                colorScheme="red"
                size="sm"
                onClick={() => setShown(true)}
            />
            <AlertPopUp
                header={'Delete this post?'} body={'Are you sure about this?'}
                confirmation={'Yes, please!'}
                isShown={isShown}
                onConfirm={async () => {
                    await deletePost();
                    setShown(false);
                    setTimeout(async () => await router.push('/post'), 20);
                }}
                onClose={onClose}
            />
        </>
    );
};

export default Deletion;
