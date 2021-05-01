//
//  PlaylistViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 6:36 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import AscentDrawer from '../templates/AscentDrawer';
import MusicPlaylist from './content/MusicPlaylist';
import {Box, Spacer, GridItem, Text, Flex, Heading} from '@chakra-ui/react';
import {IMedia} from '../../models/interfaces/Media';
import {useResponsive} from '../../lib/hooks/useResponsive';
import MediaModal from './MediaModal';

interface Props {
    isOpen: boolean
    onClose: () => void
    musicList: IMedia[]
    setCurr: (state: IMedia) => void
}

const PlaylistViewModel: React.FC<Props> = ({isOpen, onClose, musicList, setCurr}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();

    if (isPortrait)
        return (
            <AscentDrawer
                placement={'right'}
                title={'Playlist'}
                isOpen={isOpen}
                onClose={onClose}
                footer={
                    <>
                        <Text>All music is owned by their respective owner</Text>
                        <MediaModal appendMusic={console.log}/>
                    </>
                }
            >
                <MusicPlaylist musics={musicList} setCurr={curr => setCurr(curr)}/>
            </AscentDrawer>
        );

    return (
        <GridItem
            className="New-Section"
            gridArea="l"
        >
            <Box
                bg="bg"
                h="clamp(20vh, 60vh, 100vh)"
                w="clamp(20vw, 40vw, 60vw)"
                spacing={8}
                boxShadow="dark-lg"
                p="2vmin"
                mr="2vmin"
            >
                <Flex direction="column" h="100%">
                    <Flex alignItems="center" justifyContent="center">
                        <Heading fontSize="xl" color="tan">Playlist</Heading>
                    </Flex>
                    <MusicPlaylist musics={musicList} setCurr={curr => setCurr(curr)}/>
                    <Spacer />
                    <Flex justifyContent="flex-end">
                        <MediaModal appendMusic={console.log}/>
                    </Flex>
                </Flex>
            </Box>
        </GridItem>
    );
};

export default PlaylistViewModel;
