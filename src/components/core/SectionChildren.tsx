//
//  SectionChildren.tsx
//  exclaimation
//
//  Created by d-exclaimation on 2:51 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import React from 'react';
import {LanguageSnapShotFragment, ProfileSnapFragment} from '../../models/graphql/types';
import SocialCarousel from './SocialCarousel';
import ProfileStats from './ProfileStats';
import LatestPreview from './LatestPreview';

type Section = {
    val: string,
    children: JSX.Element
}

export const allSections = (profile: ProfileSnapFragment, topLang: LanguageSnapShotFragment): Section[] =>
    [
        {
            val: 'a',
            children: <></>
        },
        {
            val: 'b',
            children: <>
            </>
        },
        {
            val: 'c',
            children: <>
            </>
        },
        {
            val: 'd',
            children: <>

            </>
        },
        {
            val: 'e',
            children: <></>
        },
        {
            val: 'f',
            children: <>
                <ProfileStats github={profile} topLang={topLang} />
            </>
        },
        {
            val: 'g',
            children: <>
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
            children: <></>
        },
        {
            val: 'j',
            children: <></>
        },
    ];
