//
//  LifeBlock.tsx
//  exclaimation
//
//  Created by d-exclaimation on 7:24 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React, {useRef} from 'react';

interface Props {
    index: {i: number, j: number},
    value: 1 | 0
    toggle: (i: number, j: number) => void,
}

const LifeBlock: React.FC<Props> = ({index, value, toggle}: Props) => {
    const {i, j} = index;
    return (
        <div
            style={{
                width: '2vmin',
                height: '2vmin',
                backgroundColor: value ? '#8e56f5' : undefined,
            }}
            onClick={() => toggle(i, j)}
        />
    );
};

export default React.memo(LifeBlock);
