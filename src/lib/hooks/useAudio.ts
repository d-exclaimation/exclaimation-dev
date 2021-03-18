//
//  AudioPlayer.ts
//  app
//
//  Created by d-exclaimation on 3:08 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import React from 'react';


export const usePlayer = (url: string, loop: boolean): [boolean, () => void, number, (vol: number) => void, number] => {
    const [volume, setVolume] = React.useState(0.5);
    const [audio] = React.useState(new Audio(url));
    const [time, setTime] = React.useState(audio.currentTime);
    const [isPlaying, setPlaying] = React.useState(false);

    audio.volume = volume;
    setInterval(() => {
        setTime(Math.floor(audio.currentTime));
    }, 1000);

    const toggleVolume = (vol: number) => {
        setPlaying(!isPlaying);
        setVolume(vol);
        setPlaying(isPlaying);
    };
    const toggleAudio = () => {
        setPlaying(!isPlaying);
    };


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

    return [isPlaying, toggleAudio, volume, toggleVolume, time];
};

export const useAudio = (url: string): (() => void) => {
    return usePlayer(url, false)[1];
};
