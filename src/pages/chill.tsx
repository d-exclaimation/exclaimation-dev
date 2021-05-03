//
//  content.tsx
//  exclaimation
//
//  Created by d-exclaimation on 11:29 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import MetaHead from '../components/shared/meta/MetaHead';
import {GetStaticProps} from 'next';
import {IMedia} from '../models/interfaces/Media';
import RouteNavBar from '../components/shared/routes/RouteNavBar';
import ChillViewModel from '../components/music/ChillViewModel';


interface Props {
    musics: IMedia[]
}

const Chill: React.FC<Props> = ({ musics }: Props) => {
    return (
        <>
            <MetaHead title={'d-exclaimation\'s content place'} description={'A content place to listen to your favourite lofi hiphop songs to study and relax'}/>
            <div className="New-header">
                <RouteNavBar/>
                <ChillViewModel preRenderedList={musics}/>
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
