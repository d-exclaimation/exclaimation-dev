//
//  AudioPlayer.ts
//  app
//
//  Created by d-exclaimation on 3:08 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import {useState, useEffect, useRef} from 'react';
import {useInterval} from './useInterval';
import {useToggle} from './useToggle';

/// Audio Player Controls and Data
type AudioPlayer = {
    isPlaying: boolean,
    toggleAudio: () => void,
    volume: number,
    toggleVolume: (vol: number) => void,
    time: number
}

/// Custom Hook to handle audio logic
export function usePlayer(url: string, loop: boolean): AudioPlayer {
    const audio = useRef(new Audio(url));
    const [volume, setVolume] = useState(audio.current.volume);
    const [time, setTime] = useState(audio.current.currentTime);
    const [isPlaying, toggleAudio] = useToggle();
    const toggleVolume = (vol: number) => {
        setVolume(vol);
    };

    const endAudio = () => {
        toggleAudio(false);
        if (loop)
            setTimeout(() => toggleAudio(true), 0);
    };

    useInterval(() => setTime(Math.floor(audio.current.currentTime)), 1000);

    useEffect(() => {
        audio.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        isPlaying ? audio.current.play() : audio.current.pause();
    }, [isPlaying]);

    useEffect(() => {
        audio.current.addEventListener('ended', endAudio);
        return () => {
            audio.current.removeEventListener('ended', endAudio);
        };
    }, []);

    return { isPlaying, toggleAudio: () => toggleAudio(), volume, toggleVolume, time };
}

/// Custom hook to abstract usePlayer for easier use i.e one time sound effects
export function useAudio(url: string): (() => void)  {
    return usePlayer(url, false).toggleAudio;
}
