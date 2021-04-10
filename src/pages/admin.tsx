//
//  admin.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:03 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import MetaHead from '../components/shared/MetaHead';
import LoginForm from '../components/admin/LoginForm';
import {FormResult} from '../models/enum/FormResult';
import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {useLoginAdminMutation, useMeQuery} from '../models/graphql/types';
import {useRouter} from 'next/router';

export const Admin: React.FC = () => {
    const router = useRouter();
    const [, loginAdmin] = useLoginAdminMutation();
    const [{error, fetching}] = useMeQuery();

    if (!error && !fetching)
        (async () => await router.push('/'))();

    return (
        <>
            <MetaHead title={'d-exclaimation admin login page'} description={'Login page for d-exclaimation'} />
            <div className="App-header">
                <LoginForm login={async key => {
                    try {
                        const {error} = await loginAdmin({
                            time: new Date().toUTCString(),
                            key: key,
                        });

                        console.log(error);
                        return error ? FormResult.failure : FormResult.success;
                    } catch (e) {
                        return FormResult.failure;
                    }
                }}/>
            </div>
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Admin);