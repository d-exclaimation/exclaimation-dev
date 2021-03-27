//
//  useApollo.ts
//  exclaimation
//
//  Created by d-exclaimation on 3:28 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useMemo} from 'react';
import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>  {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        uri: process.env.GRAPH_URI || process.env.NEXT_PUBLIC_URI || 'http://localhost:4000/graphql',
        cache: new InMemoryCache()
    });
};

export const initializeClient = (initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> =>  {
    const _apolloClient = apolloClient ?? createApolloClient();

    if (initialState) {
        const existingCache = _apolloClient.extract();
        _apolloClient.cache.restore({...existingCache, ...initialState});
    }

    apolloClient = typeof window === 'undefined' ? apolloClient : (apolloClient ?? _apolloClient);
    return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject | null): ApolloClient<NormalizedCacheObject> => {
    return useMemo(() => initializeClient(initialState), [initialState]);
};
