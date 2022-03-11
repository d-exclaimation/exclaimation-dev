//
//  new.tsx
//  exclaimation
//
//  Created by d-exclaimation on 19:50.
//

import { useRouter } from 'next/router';
import React from 'react';
import LoadingScreen from '../components/shared/features/LoadingScreen';

const New: React.FC = () => {
    const router = useRouter();

    if (typeof window !== 'undefined')
        router.push('/');

    return (
        <LoadingScreen/>
    );
};

export default New;