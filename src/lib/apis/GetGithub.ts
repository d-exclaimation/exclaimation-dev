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
    console.log(process.env.GITHUB);
    const resp = await fetch(process.env.GITHUB || 'https://api.github.com/users/d-exclaimation');
    return parseRaw(await resp.json());
};

export const getRepos = async (): Promise<Repo[]> => {

    try {
        const resp = await fetch(process.env.REPOS || 'https://api.github.com/users/d-exclaimation/repos');
        const raws: RepoRaw[] = await resp.json();
        return raws.map(raw => parseRepo(raw));
    } catch (e) {
        console.log(e.message);
        return [];
    }
};
