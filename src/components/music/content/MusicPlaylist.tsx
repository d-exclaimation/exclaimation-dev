//
//  MusicPlaylist.tsx
//  exclaimation
//
//  Created by d-exclaimation on 4:32 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, Button, DarkMode} from '@chakra-ui/react';
import {IMedia} from '../../../models/interfaces/Media';

interface Props {
    musics: IMedia[]
    setCurr: (curr: IMedia) => void
}

const MusicPlaylist: React.FC<Props> = ({musics, setCurr}: React.PropsWithChildren<Props>) => {
    const schemes = ['purpled', 'pink', 'orange', 'messenger'];
    return (
        <DarkMode>
            <Flex direction={'column'} alignItems={'flex-start'}>
                { musics.map((music, i) => (
                    <Button
                        key={i}
                        colorScheme={schemes[Math.floor(i % schemes.length)]}
                        variant="ghost"
                        m={2}
                        onClick={() => {
                            setCurr(music);
                        }}
                    >{ music.name }</Button>
                ))}
            </Flex>
        </DarkMode>
    );
};

export default MusicPlaylist;
