//
//  createUrqlClient.ts
//  exclaimation
//
//  Created by d-exclaimation on 7:23 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { cacheExchange } from '@urql/exchange-graphcache';
import { NextPageContext } from 'next';
import { NextUrqlClientConfig, SSRExchange } from 'next-urql';
import { dedupExchange, fetchExchange } from 'urql';
import { __graph__ } from '../../constants/uri';
import { MeDocument } from '../../models/graphql/types';

/// Create a URQL Client for SSR that can handle custom revalidation of cache and send cookie from the server
export const createUrqlClient: NextUrqlClientConfig = (ssrExchange: SSRExchange, ctx: NextPageContext | undefined) => {
    // Pass cookie to the browser from the server
    let cookie = '';
    if (typeof window === 'undefined') {
        cookie = ctx?.req?.headers?.cookie ?? '';
    }

    return ({
        url: __graph__,
        fetchOptions: {
            credentials: 'include' as const,
            headers: cookie ? {
                cookie,
            } : undefined,
        },
        // Exchanges overide to revalidate cache
        exchanges: [dedupExchange, cacheExchange({
            updates: {
                Mutation: {
                    loginAsAdmin: (_result, _var, cache) => {
                        cache.updateQuery({ query: MeDocument }, data => data);
                    },
                    deletePost : (_result, _var, cache) => {
                        cache.invalidate({
                            __typename: 'Post',
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            id: _var.id as any,
                        });
                    }
                }
            }
        }), ssrExchange, fetchExchange]
    }); };
