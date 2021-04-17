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
import FooterDisclaimer from '../components/shared/FooterDisclaimer';


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
                <FooterDisclaimer/>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const medias: IMedia[] = [
        { name: 'Time-lapse.wav', url: 'https://delivery-exclaimation-30760d.netlify.app/audio/timelapse.wav' },
        { name: 'Time-lapse.webm', url: 'https://delivery-exclaimation-30760d.netlify.app/audio/timelapse.webm'},
        { name: 'Close to the sun.wav', url: 'https://delivery-exclaimation-30760d.netlify.app/audio/closetothesun.wav'},
        { name: 'Close to the sun.webm', url: 'https://delivery-exclaimation-30760d.netlify.app/audio/closetothesun.webm'}
    ];

    return {
        props: {
            musics: medias,
        }
    };
};

export default Chill;
