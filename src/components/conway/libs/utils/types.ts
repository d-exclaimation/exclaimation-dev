//
//  types.ts
//  conway
//
//  Created by d-exclaimation on 12:52 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export type ConwayGrid = Array<Array<0 | 1>>
export type ConwayAction = {type: 'toggle', index: [number, number]}
    | { type: 'runtime' }
    | { type: 'set-initial', payload: 'populated' | 'clear' | 'stranded' | 'glider-gun' }

export type ConwayToggles = (i: number, j: number) => void;
export type ConwayRuntime = () => void;
export type ToggleGame = () => void;
export type ToggleInitial = () => void;

export type ConwayState = {
    grid: ConwayGrid,
    isRunning: boolean
}

export type ConwayFunctions = {
    toggleGrid: ConwayToggles,
    toggleRunning: ToggleGame
}
