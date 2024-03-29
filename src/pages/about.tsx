//
//  profile.tsx
//  personal
//
//  Created by d-exclaimation on 3:40 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { useRouter } from 'next/router';
import React from 'react';
import LoadingScreen from '../components/shared/features/LoadingScreen';
import MetaHead from '../components/shared/meta/MetaHead';

const About: React.FC = () => {
    const router = useRouter();

    if (typeof window !== 'undefined')
        router.push('/new');
    return (
        <>
            <MetaHead title="d-exclaimation" description="About me" />
            <LoadingScreen/>
        </>
    );
};



export default About;
