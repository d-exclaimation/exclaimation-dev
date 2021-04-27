//
//  LifeBlock.tsx
//  exclaimation
//
//  Created by d-exclaimation on 7:24 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React  from 'react';
import {lavender} from '../../../../constants/color.scheme';

interface Props {
    color?: string,
    index: {i: number, j: number},
    value: 1 | 0
    toggle: (i: number, j: number) => void,
}

const LifeBlock: React.FC<Props> = ({index, value, toggle, color}: Props) => {
    const {i, j} = index;
    return (
        <div
            style={{
                width: '2vmin',
                height: '2vmin',
                backgroundColor: value ? (color ? color : lavender) : undefined,
            }}
            onClick={() => toggle(i, j)}
        />
    );
};

export default React.memo(LifeBlock);
