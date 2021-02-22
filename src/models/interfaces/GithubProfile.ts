//
//  GithubProfile.ts
//  personal
//
//  Created by d-exclaimation on 9:57 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export interface GithubRaw {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company?: any;
    blog: string;
    location: string;
    email?: any;
    hireable?: any;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface GithubProfile {
    avatar_url: string;
    html_url: string;
    type: string;
    name: string;
    location: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
}

export const parseRaw = (raw: GithubRaw): GithubProfile => {
    return {
        avatar_url: raw.avatar_url,
        html_url: raw.html_url,
        type: raw.type,
        name: raw.name,
        location: raw.location,
        bio: raw.bio,
        twitter_username: raw.twitter_username,
        public_repos: raw.public_repos
    };
};
