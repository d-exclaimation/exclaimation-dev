//
//  admin.tsx
//  exclaimation
//
//  Created by d-exclaimation on 12:03 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {Flex, Text} from '@chakra-ui/react';
import MetaHead from '../components/shared/meta/MetaHead';
import LoginViewModel from '../components/admin/LoginViewModel';
import {withUrqlClient} from 'next-urql';
import {createUrqlClient} from '../lib/server/createUrqlClient';
import {useAuth} from '../lib/server/useAuth';

export const Admin: React.FC = () => {
    const auth = useAuth();

    if (auth)
        return (<Flex className="New-header" alignItems="center" justifyContent="center">
            <Text color="#fafafa"> You have logged in </Text>
        </Flex>);

    return (
        <>
            <MetaHead title={'d-exclaimation admin login page'} description={'Login page for d-exclaimation'} />
            <Flex className="New-header" alignItems="center" justifyContent="center">
                <LoginViewModel />
            </Flex>
        </>
    );
};

export default withUrqlClient(createUrqlClient)(Admin);
