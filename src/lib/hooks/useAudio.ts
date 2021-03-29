//
//  AudioPlayer.ts
//  app
//
//  Created by d-exclaimation on 3:08 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import React from 'react';
import {useInterval} from './useInterval';

interface AudioPlayer {
    isPlaying: boolean,
    toggleAudio: () => void,
    volume: number,
    toggleVolume: (vol: number) => void,
    time: number
}

export const usePlayer = (url: string, loop: boolean): AudioPlayer => {
    const [volume, setVolume] = React.useState(0.5);
    const [audio] = React.useState(new Audio(url));
    const [time, setTime] = React.useState(audio.currentTime);
    const [isPlaying, setPlaying] = React.useState(false);

    const toggleVolume = (vol: number) => {
        setPlaying(!isPlaying);
        setVolume(vol);
        setPlaying(isPlaying);
    };
    const toggleAudio = () => {
        setPlaying(!isPlaying);
    };

    audio.volume = volume;

    useInterval(() => {
        setTime(Math.floor(audio.currentTime));
    }, 1000);


    React.useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying]);

    React.useEffect(() => {
        audio.addEventListener('ended', () => {
            setPlaying(false);
            if (loop)
                setTimeout(toggleAudio, 0); 
        });
        return () => {
            audio.removeEventListener('ended', () => {
                setPlaying(false);
                if (loop)
                    setTimeout(toggleAudio, 0);
            });
        };
    }, []);

    return {
        isPlaying,
        toggleAudio,
        volume,
        toggleVolume,
        time
    };
};

export const useAudio = (url: string): (() => void) => {
    return usePlayer(url, false).toggleAudio;
};
