//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 19:50.
//

import { useRouter } from 'next/router';
import React from 'react';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import MetaHead from '../components/shared/meta/MetaHead';

const New: React.FC = () => {
    const router = useRouter();

    if (typeof window !== 'undefined')
        router.push('/');

    return (
        <>
            <MetaHead title="d-exclaimation" description="About me" />
            <LoadingScreen/>
        </>
    );
};

export default New;