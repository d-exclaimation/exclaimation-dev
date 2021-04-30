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
    Box, Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import FormModal from '../templates/FormModal';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';

interface Props {
    musics: IMedia[],
    setMusics: (musics: IMedia[]) => void;
}

const MediaModal: React.FC<Props> = ({musics, setMusics}: React.PropsWithChildren<Props>) => {
    const corner = useDynamicCorner();
    const [shown, setShown] = React.useState(false);
    const [name, setName] = React.useState('');
    const [url, setURL] = React.useState('');

    return (
        <Box
            pos="absolute" bottom={corner.y} left={corner.x}
        >
            <Button
                color="teal"
                boxShadow="dark-lg"
                fontSize="min(16px, 3vw + 2px)"
                onClick={() => setShown(true)}> Add New </Button>
            <FormModal
                title={'Add a new media'}
                isShown={shown}
                onCancel={() => setShown(false)}
                onConfirm={() => {
                    setMusics([...musics, { name: name, url: url }]);
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
        </Box>
    );
};

export default MediaModal;
