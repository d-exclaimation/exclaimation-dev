//
//  MediaModal.tsx
//  exclaimation
//
//  Created by d-exclaimation on 8:14 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {IMedia} from '../../models/interfaces/Media';

import {
    Button, DarkMode,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import FormModal from '../templates/FormModal';

interface Props {
    appendMusic: (musics: IMedia) => void;
}

const MediaModal: React.FC<Props> = ({appendMusic}: React.PropsWithChildren<Props>) => {
    const [shown, setShown] = React.useState(false);
    const [name, setName] = React.useState('');
    const [url, setURL] = React.useState('');

    return (
        <DarkMode>
            <Button
                colorScheme="teal"
                boxShadow="dark-lg"
                fontSize="min(16px, 3vw + 2px)"
                borderRadius="50%"
                onClick={() => setShown(true)}> + </Button>
            <FormModal
                title={'Add a new media'}
                isShown={shown}
                onCancel={() => setShown(false)}
                onConfirm={() => {
                    appendMusic({ name: name, url: url });
                    setShown(false);
                }}
            >
                <FormControl>
                    <FormLabel> Name </FormLabel>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        variant="flushed"
                        placeholder="Enter name" />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel> URL </FormLabel>
                    <Input
                        value={url}
                        onChange={e => setURL(e.target.value)}
                        variant="flushed"
                        placeholder="Enter URL (make sure you send the link to audio file, not a link to YouTube or Spotify)"
                    />
                </FormControl>
            </FormModal>
        </DarkMode>
    );
};

export default MediaModal;
