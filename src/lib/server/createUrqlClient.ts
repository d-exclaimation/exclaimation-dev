//
//  createUrqlClient.ts
//  exclaimation
//
//  Created by d-exclaimation on 7:23 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {__graph__} from '../../constants/uri';
import { dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import {SSRExchange} from 'next-urql';
import {MeDocument} from '../../models/graphql/types';

export const createUrqlClient = (ssrExchange: SSRExchange) => ({
    url: __graph__,
    fetchOptions: {
        credentials: 'include' as const
    },
    exchanges: [dedupExchange, cacheExchange({
        updates: {
            Mutation: {
                loginAsAdmin: (_result, _var, cache) => {
                    cache.updateQuery({ query: MeDocument }, data => data);
                },
                deletePost : (_result, _var, cache) => {
                    cache.invalidate({
                        __typename: 'Post',
                        id: _var.id as any,
                    });
                }
            }
        }
    }), ssrExchange, fetchExchange]
});
