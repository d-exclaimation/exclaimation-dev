//
//  music.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:29 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import MetaHead from '../components/shared/MetaHead';
import MusicPlayer from '../components/music/MusicPlayer';
import MediaModal from '../components/music/MediaModal';
import MusicList from '../components/music/MusicList';
import RouteSideCar from '../components/shared/RoutesSideBar';
import Hero from '../components/templates/Hero';

import {GetStaticProps} from 'next';
import {drivePlayURL} from '../lib/GoogleDriveURL';
import {IMedia} from '../models/interfaces/Media';


interface Props {
    musics: IMedia[]
}

const Chill: React.FC<Props> = ({ musics }: Props) => {
    const [musicList, setMusicList] = React.useState<IMedia[]>(musics);
    const [curr, setCurr] = React.useState<IMedia | null>(null);

    return (
        <>
            <MetaHead title={'d-exclaimation\'s music place'} description={'A music place to listen to your favourite lofi hiphop songs to study and relax'}/>
            <div className="App-header">
                <RouteSideCar/>
                <MediaModal musics={musicList} setMusics={setMusicList}/>
                <MusicList curr={curr} setCurr={setCurr} musics={musicList}/>
                {
                    curr ?
                        <MusicPlayer url={curr.url} name={curr.name}/> :
                        <Hero title={'Chill Zone'} />
                }
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const musics: [string, string][] = [
        ['Time-Lapse', 'https://drive.google.com/file/d/1QUcBuO473xmpW9vQ23qeOW9bvE5pOnMj/view?usp=sharing'],
        ['Close to The Sun', 'https://drive.google.com/file/d/12tRQQuJezu71ZY4IBGXLzKrz9IxFrmGA/view?usp=sharing'],
        ['Close to The Sun | raw', 'https://drive.google.com/file/d/1WrJ5gDCPSZ8q8uN85MxYFYKRsd9jPU2O/view?usp=sharing'],
    ];

    const parseDriveAudio = ([name, url]: [string, string]): IMedia => ({ name: name, url: drivePlayURL(url) });

    return {
        props: {
            musics: musics.map(parseDriveAudio),
        }
    };
};

export default Chill;
