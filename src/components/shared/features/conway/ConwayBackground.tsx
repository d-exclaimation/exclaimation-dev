//
//  ConwayBackground.tsx
//  exclaimation
//
//  Created by d-exclaimation on 10:25 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useConway } from './libs/useConway';
import { COLS } from './libs/utils/constant';
import LifeBlock from './LifeBlock';

export const ConwayBackground: React.FC = () => {
    const [{grid, isRunning}, {toggleRunning, toggleGrid}] = useConway();

    useEffect(() => {
        toggleRunning();
    }, []);

    if(!isRunning)
        return <></>;

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

    return ReactDOM.createPortal(
        <div
            style={gridStyle}
        >
            {grid.map((row, i) =>
                row.map((col, j) =>
                    (<LifeBlock
                        key={`Block-[${i},${j}]`}
                        index={{i, j}}
                        toggle={toggleGrid}
                        value={col}
                    />)
                )
            )}
        </div>,
        document.getElementById('__next') ?? document.body
    );
};

export default ConwayBackground;
