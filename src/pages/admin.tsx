//
//  admin.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:03 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Text} from '@chakra-ui/react';
import MetaHead from '../components/shared/meta/MetaHead';
import LoginForm from '../components/admin/LoginForm';
import {FormResult} from '../models/enum/FormResult';
import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {useLoginAdminMutation} from '../models/graphql/types';
import {useAuth} from '../lib/server/useAuth';

export const Admin: React.FC = () => {
    const [, loginAdmin] = useLoginAdminMutation();
    const auth = useAuth();

    if (auth)
        return (<div className="App-header">
            <Text color="#fafafa"> You have logged in </Text>
        </div>);

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
