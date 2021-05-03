//
//  ChillViewModel.tsx
//  exclaimation
//
//  Created by d-exclaimation on 3:35 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useCallback, useState} from 'react';
import {IMedia} from '../../models/interfaces/Media';
import {
    Box,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import {useResponsive} from '../../lib/hooks/useResponsive';
import Hero from '../shared/meta/Hero';
import FooterDisclaimer from '../shared/meta/FooterDisclaimer';
import MusicDisc from './content/MusicDisc';
import MusicControlPanel from './content/MusicControlPanel';
import DummyControlPanel from './content/DummyControlPanel';
import {useToggle} from '../../lib/hooks/useToggle';
import PlaylistViewModel from './PlaylistViewModel';

interface Props {
   preRenderedList: IMedia[]
}

const ChillViewModel: React.FC<Props> = ({preRenderedList}: React.PropsWithChildren<Props>) => {
    const {isPortrait} = useResponsive();
    const [musicList, setMusicList] = useState(preRenderedList);
    const [on, toggle] = useToggle();
    const [currMusic, setCurr] = useState<IMedia | null>(null);
    const [isPlaying, setPlaying] = useState(false);

    const appendMusic = useCallback((newTrack: IMedia) => {
        setMusicList(prev => [...prev, newTrack]);
    }, [setMusicList]);

    const gridArea = !isPortrait
        ? `
            't t t'
            'd d l'
            'p p l'
            'f f f'
        `
        : `
            't'
            'd'
            'p'
            'f'
        `;


    return (
        <Grid
            h="82vh"
            gap=".5rem"
            templateAreas={gridArea}
            gridTemplateRows="10vh 50vh 20vh 2vh"
            gridTemplateColumns={isPortrait ? 'auto' : '20vmin auto 50vmin'}
            color="#fafafa"
        >
            <GridItem
                className="New-Section"
                gridArea="t"
            >
                <Box mt="2vh">
                    <Hero title={'Chill Zone'} />
                </Box>
            </GridItem>
            <GridItem
                className="New-Section"
                gridArea="d"
            >
                <Box mt="3vmin" onClick={() => toggle()}>
                    <MusicDisc isPlaying={isPlaying}/>
                </Box>
            </GridItem>
            <GridItem
                className="New-Section"
                gridArea="p"
            >
                {
                    currMusic
                        ? <MusicControlPanel music={currMusic} setPlaying={setPlaying} />
                        : <DummyControlPanel />
                }
            </GridItem>
            <GridItem
                className="New-Section"
                gridArea="f"
            >
                <FooterDisclaimer/>
            </GridItem>
            <PlaylistViewModel
                isOpen={on}
                onClose={toggle}
                musicList={musicList}
                setCurr={setCurr}
                appendMusic={appendMusic}
            />
        </Grid>
    );
};

export default ChillViewModel;
