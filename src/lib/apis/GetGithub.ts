//
//  GetGithub.ts
//  personal
//
//  Created by d-exclaimation on 10:01 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {GithubProfile, parseRaw} from '../../models/interfaces/GithubProfile';
import {parseRepo, Repo, RepoRaw} from '../../models/interfaces/Repo';
import {Language} from '../crunching/Language';
import {getStatistic, getTexts} from '../crunching/crunch';
import {__lang__, __profile__, __repos__} from '../../constants/uri';

export const getProfile = async (): Promise<GithubProfile> => {
    const resp = await fetch(__profile__);
    return parseRaw(await resp.json());
};

export const getRepos = async (): Promise<Repo[]> => {
    try {
        const resp = await fetch(__repos__);
        const raws: RepoRaw[] = await resp.json();
        return raws.map(raw => parseRepo(raw));
    } catch (e) {
        console.log(e.message);
        return [];
    }
};

export const getTopLang = async (): Promise<Language> => {
    try {
        const resp = await fetch(__lang__);
        const html = await resp.text();
        const res = getTexts(html);
        return getStatistic(res[0], res[1]);
    } catch (e) {
        console.log(e.message);
        return new Language('English', '100%');
    }
};
