//
//  conwayReducer.ts
//  conway
//
//  Created by d-exclaimation on 8:00 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {ConwayGrid, ConwayAction} from './utils/types';
import {COLS, ROWS, neighbours} from './utils/constant';

export function conwayReducer(state: ConwayGrid, action: ConwayAction): ConwayGrid {
    switch (action.type) {
    case 'toggle':
        return state
            .map((row, i) =>
                i !== action.index[0] ? row :
                    row.map((col, j) =>
                        j !== action.index[1] ? col : (col ? 0: 1)
                    )
            );
    case 'runtime':
        return state
            .map((row, i) =>
                row
                    .map((col, j) => {
                        let count = 0;
                        for (const [y, x] of neighbours) {
                            const [r, c] = [i + y, j + x];
                            if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
                                count += state[r][c];
                            }
                        }

                        if (col === 0) {
                            return count === 3 ? 1 : col;
                        }
                        return count < 2 || count > 3 ? 0 : col;
                    })
            );
    default:
        return state;
    }
}
