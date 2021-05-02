//
//  useAuth.ts
//  exclaimation
//
//  Created by d-exclaimation on 2:59 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {useMeQuery} from '../../models/graphql/types';

export function useAuth(): boolean {
    const [{data, fetching, error}] = useMeQuery({
        pause: typeof window === 'undefined'
    });
    return !error && !fetching && !!data;
}
