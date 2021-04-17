//
//  AudioPlayer.ts
//  app
//
//  Created by d-exclaimation on 3:08 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import React, {useState, useEffect} from 'react';
import {useInterval} from './useInterval';

interface AudioPlayer {
    isPlaying: boolean,
    toggleAudio: () => void,
    volume: number,
    toggleVolume: (vol: number) => void,
    time: number
}

export function usePlayer(url: string, loop: boolean): AudioPlayer {
    const [volume, setVolume] = useState(0.5);
    const [audio] = useState(new Audio(url));
    const [time, setTime] = useState(audio.currentTime);
    const [isPlaying, setPlaying] = useState(false);

    const toggleVolume = (vol: number) => {
        setPlaying(!isPlaying);
        setVolume(vol);
        setPlaying(isPlaying);
    };
    const toggleAudio = () => {
        setPlaying(!isPlaying);
    };

    const endAudio = () => {
        setPlaying(false);
        if (loop)
            setTimeout(toggleAudio, 0);
    };

    useInterval(() => {
        setTime(Math.floor(audio.currentTime));
    }, 1000);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying]);

    useEffect(() => {
        audio.volume = volume;
        audio.addEventListener('ended', endAudio);
        return () => {
            audio.removeEventListener('ended', endAudio);
        };
    }, []);

    return { isPlaying, toggleAudio, volume, toggleVolume, time };
}

export function useAudio(url: string): (() => void)  {
    return usePlayer(url, false).toggleAudio;
}
