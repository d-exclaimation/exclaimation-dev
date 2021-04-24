//
//  SectionChildren.tsx
//  exclaimation
//
//  Created by d-exclaimation on 2:51 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import {Language, ProfileSnapFragment} from '../../models/graphql/types';
import SocialCarousel from './SocialCarousel';
import ProfileStats from './ProfileStats';

type Section = {
    val: string,
    children: JSX.Element
}

export const allSections = (profile: ProfileSnapFragment, topLang: Language): Section[] =>
    [
        {
            val: 'a',
            children: <pre>dab</pre>
        },
        {
            val: 'b',
            children: <pre>dab</pre>
        },
        {
            val: 'c',
            children: <pre>dab</pre>
        },
        {
            val: 'd',
            children: <pre>dab</pre>
        },
        {
            val: 'e',
            children: <pre>dab</pre>
        },
        {
            val: 'f',
            children: <pre>dab</pre>
        },
        {
            val: 'g',
            children: <>
                <ProfileStats github={profile} topLang={topLang} />
            </>
        },
        {
            val: 'h',
            children: <>
                <SocialCarousel github={profile}/>
            </>
        },
        {
            val: 'i',
            children: <pre>dab</pre>
        },
        {
            val: 'j',
            children: <pre>dab</pre>
        },
    ];
