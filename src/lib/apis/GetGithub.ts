//
//  GetGithub.ts
//  personal
//
//  Created by d-exclaimation on 10:01 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {GithubProfile, parseRaw} from '../../models/interfaces/GithubProfile';
import {parseRepo, Repo, RepoRaw} from '../../models/interfaces/Repo';

export const getProfile = async (): Promise<GithubProfile> => {
    const resp = await fetch(process.env.GITHUB || '');
    return parseRaw(await resp.json());
};

export const getRepos = async (): Promise<Repo[]> => {

    try {
        const resp = await fetch(process.env.REPOS || '');
        const raws: RepoRaw[] = await resp.json();
        return raws.map(raw => parseRepo(raw));
    } catch (e) {
        console.log(e.message);
        return [];
    }
};
