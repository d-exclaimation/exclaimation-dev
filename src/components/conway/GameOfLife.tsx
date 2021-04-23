//
//  GameOfLife.tsx
//  exclaimation
//
//  Created by d-exclaimation on 7:24 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useEffect} from 'react';
import {COLS} from './libs/utils/constant';
import {useConway} from './libs/useConway';
import LifeBlock from './LifeBlock';
import {MoonIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react';
import {useDynamicCorner} from '../../lib/hooks/useDynamicCorner';

const GameOfLife: React.FC<{init?: boolean}> = ({init}: {init?: boolean}) => {
    const corner = useDynamicCorner();
    const [{grid, isRunning}, {toggleGrid, toggleRunning}] = useConway();

    useEffect(() => {
        if (!init)
            return;
        toggleRunning();
    }, []);

    if (!isRunning)
        return (
            <IconButton
                aria-label="delete"
                icon={<MoonIcon/>}
                variant="ghost"
                boxShadow="dark-lg"
                colorScheme="purple"
                onClick={() => toggleRunning()}
                pos="absolute"
                top={corner.y}
                right={corner.x}
            />
        );

    const gridStyle: React.CSSProperties = {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        opacity: .2,
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, 2vmin)`
    };

    return (
        <>
            <IconButton
                aria-label="delete"
                icon={<MoonIcon/>}
                variant="ghost"
                boxShadow="dark-lg"
                colorScheme="purple"
                onClick={() => toggleRunning()}
                pos="absolute"
                top={corner.y}
                right={corner.x}
            />
            <div
                style={gridStyle}
            >
                {grid.map((row, i) =>
                    row.map((col, j) =>
                        (<LifeBlock key={`Block-[${i},${j}]`} index={{i, j}} toggle={toggleGrid} value={col} />)
                    )
                )}
            </div>
        </>
    );
};

export default GameOfLife;
