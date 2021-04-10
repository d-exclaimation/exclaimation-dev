//
//  createUrqlClient.ts
//  exclaimation
//
//  Created by d-exclaimation on 7:23 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {__graph__} from '../../constants/uri';
import {SSRExchange} from 'next-urql';

export const createUrqlClient = (_ssrExchange: SSRExchange) => ({
    url: __graph__,
    fetchOptions: {
        credentials: 'include' as const
    },
    // exchanges: [_ssrExchange]
});
