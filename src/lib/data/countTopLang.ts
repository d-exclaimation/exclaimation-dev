//
//  countTopLang.ts
//  exclaimation
//
//  Created by d-exclaimation on 10:46 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
import {LanguageSnapshotFragment} from '../../models/graphql/types';

export const countTopLang = (langSnaps: LanguageSnapshotFragment[] | undefined): {top: string, percentage: number} => {
    if (!langSnaps)
        return {
            top: 'English',
            percentage: 69
        };
    const counter = new Map<string, number>();

    for (const snap of langSnaps) {
        if (!snap.language)
            continue;
        const prev = counter.get(snap.language) ?? 0;
        counter.set(snap.language, prev + 1);
    }

    const ranking = Array.from(counter.keys()).sort((lhs, rhs) => {
        const [lc, rc] = [counter.get(lhs), counter.get(rhs)];
        if (!lc)
            return 1;
        if (!rc)
            return -1;
        return rc - lc;
    }).map(lang => ({ lang: lang, percentage: (counter.get(lang) ?? 0) * 100 / (langSnaps.length || 1) }));


    if (!ranking.length)
        return {
            top: 'English',
            percentage: 69
        };
    return {
        top: ranking[0].lang,
        percentage: ranking[0].percentage
    };
};

