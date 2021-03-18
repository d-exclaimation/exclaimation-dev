//
//  chill.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:29 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box} from '@chakra-ui/react';
import MetaHead from '../components/global/MetaHead';
import MusicPlayer from '../components/MusicPlayer';

import {GetStaticProps} from 'next';
import {drivePlayURL} from '../lib/GoogleDriveURL';
import {IMedia} from '../models/interfaces/Media';
import MediaModal from '../components/MediaModal';
import MusicList from '../components/MusicList';
import RouteSideCar from '../components/global/RoutesSideBar';
import Hero from '../components/templates/Hero';

interface Props {
    musics: IMedia[]
}

const Chill: React.FC<Props> = ({ musics }: Props) => {
    const [musicList, setMusicList] = React.useState<IMedia[]>(musics);
    const [curr, setCurr] = React.useState<IMedia | null>(null);

    return (
        <>
            <MetaHead title={'d-exclaimation\'s chill place'} description={'A chill place to listen to your favourite lofi hiphop songs to study and relax'}/>
            <header className="App-header">
                <RouteSideCar/>
                <MediaModal musics={musicList} setMusics={setMusicList}/>
                <MusicList curr={curr} setCurr={setCurr} musics={musicList}/>
                {
                    curr ?
                        <MusicPlayer url={curr.url} name={curr.name}/> :
                        <Hero title={'Chill Zone'} />
                }
            </header>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const musics: [string, string][] = [
        ['Time-Lapse', 'https://drive.google.com/file/d/190hvOqQAcSoBuzG71DbAYYG6cDXeLxIf/view?usp=sharing'],
        ['Close to The Sun', 'https://drive.google.com/file/d/12tRQQuJezu71ZY4IBGXLzKrz9IxFrmGA/view?usp=sharing'],
    ];

    const parseDriveAudio = ([name, url]: [string, string]): IMedia => ({ name: name, url: drivePlayURL(url) });

    return {
        props: {
            musics: musics.map(parseDriveAudio),
        }
    };
};

export default Chill;
