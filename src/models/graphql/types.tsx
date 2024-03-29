import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  lang: Scalars['String'];
  percentage: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePost: Post;
  incrementCrabRave: Post;
  loginAsAdmin: Scalars['String'];
  newPost: Post;
  updatePost: Post;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationIncrementCrabRaveArgs = {
  id: Scalars['Int'];
};


export type MutationLoginAsAdminArgs = {
  options: PasswordInput;
};


export type MutationNewPostArgs = {
  input: PostDto;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  input: PostDto;
};

export type PasswordInput = {
  pass: Scalars['String'];
  time: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  crabrave: Scalars['Int'];
  id: Scalars['ID'];
  nodes: Array<PostNode>;
  snippet: Scalars['String'];
  title: Scalars['String'];
};

export type PostDto = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type PostNode = {
  __typename?: 'PostNode';
  id: Scalars['ID'];
  leaf: Scalars['String'];
  type: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  avatarURL: Scalars['String'];
  bio: Scalars['String'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  githubURL: Scalars['String'];
  id: Scalars['ID'];
  location: Scalars['String'];
  name: Scalars['String'];
  reposCount: Scalars['Int'];
  twitterUsername: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  latestPost: Post;
  latestRepo: Repo;
  me?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  profile: Profile;
  repos: Array<Repo>;
  topLang: Language;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  by: Scalars['String'];
  limit: Scalars['Int'];
};


export type QueryReposArgs = {
  limit: Scalars['Int'];
};

export type Repo = {
  __typename?: 'Repo';
  description: Scalars['String'];
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  repoName: Scalars['String'];
  url: Scalars['String'];
};

export type FullPostFragment = { __typename?: 'Post', id: string, title: string, crabrave: number, nodes: Array<{ __typename?: 'PostNode', id: string, type: string, leaf: string }> };

export type LanguageSnapShotFragment = { __typename?: 'Language', id: string, lang: string, percentage: number };

export type PostSnippetFragment = { __typename?: 'Post', id: string, title: string, snippet: string, crabrave: number };

export type ProfileSnapFragment = { __typename?: 'Profile', id: string, name: string, bio: string, githubURL: string, twitterUsername: string, reposCount: number };

export type RepoSnapshotFragment = { __typename?: 'Repo', id: string, language?: string | null, name: string, description: string, repoName: string, url: string };

export type CreatePostMutationMutationVariables = Exact<{
  input: PostDto;
}>;


export type CreatePostMutationMutation = { __typename?: 'Mutation', newPost: { __typename?: 'Post', id: string } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: string } };

export type UpRaveMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UpRaveMutation = { __typename?: 'Mutation', incrementCrabRave: { __typename?: 'Post', id: string, crabrave: number } };

export type LoginAdminMutationVariables = Exact<{
  time: Scalars['String'];
  key: Scalars['String'];
}>;


export type LoginAdminMutation = { __typename?: 'Mutation', loginAsAdmin: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: string | null };

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title: string, crabrave: number, nodes: Array<{ __typename?: 'PostNode', id: string, type: string, leaf: string }> } | null };

export type AllPostQueryVariables = Exact<{
  limit: Scalars['Int'];
  by: Scalars['String'];
}>;


export type AllPostQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, snippet: string, crabrave: number }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', id: string, name: string, bio: string, githubURL: string, twitterUsername: string, reposCount: number } };

export type ReposQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type ReposQuery = { __typename?: 'Query', repos: Array<{ __typename?: 'Repo', id: string, language?: string | null, name: string, description: string, repoName: string, url: string }> };

export const FullPostFragmentDoc = gql`
    fragment FullPost on Post {
  id
  title
  nodes {
    id
    type
    leaf
  }
  crabrave
}
    `;
export const LanguageSnapShotFragmentDoc = gql`
    fragment LanguageSnapShot on Language {
  id
  lang
  percentage
}
    `;
export const PostSnippetFragmentDoc = gql`
    fragment PostSnippet on Post {
  id
  title
  snippet
  crabrave
}
    `;
export const ProfileSnapFragmentDoc = gql`
    fragment ProfileSnap on Profile {
  id
  name
  bio
  githubURL
  twitterUsername
  reposCount
}
    `;
export const RepoSnapshotFragmentDoc = gql`
    fragment RepoSnapshot on Repo {
  id
  language
  name
  description
  repoName
  url
}
    `;
export const CreatePostMutationDocument = gql`
    mutation CreatePostMutation($input: PostDTO!) {
  newPost(input: $input) {
    id
  }
}
    `;

export function useCreatePostMutationMutation() {
  return Urql.useMutation<CreatePostMutationMutation, CreatePostMutationMutationVariables>(CreatePostMutationDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  deletePost(id: $id) {
    id
  }
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const UpRaveDocument = gql`
    mutation UpRave($id: Int!) {
  incrementCrabRave(id: $id) {
    id
    crabrave
  }
}
    `;

export function useUpRaveMutation() {
  return Urql.useMutation<UpRaveMutation, UpRaveMutationVariables>(UpRaveDocument);
};
export const LoginAdminDocument = gql`
    mutation LoginAdmin($time: String!, $key: String!) {
  loginAsAdmin(options: {time: $time, pass: $key})
}
    `;

export function useLoginAdminMutation() {
  return Urql.useMutation<LoginAdminMutation, LoginAdminMutationVariables>(LoginAdminDocument);
};
export const MeDocument = gql`
    query Me {
  me
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...FullPost
  }
}
    ${FullPostFragmentDoc}`;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
};
export const AllPostDocument = gql`
    query AllPost($limit: Int!, $by: String!) {
  posts(limit: $limit, by: $by) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;

export function useAllPostQuery(options: Omit<Urql.UseQueryArgs<AllPostQueryVariables>, 'query'>) {
  return Urql.useQuery<AllPostQuery>({ query: AllPostDocument, ...options });
};
export const ProfileDocument = gql`
    query Profile {
  profile {
    ...ProfileSnap
  }
}
    ${ProfileSnapFragmentDoc}`;

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};
export const ReposDocument = gql`
    query Repos($limit: Int!) {
  repos(limit: $limit) {
    ...RepoSnapshot
  }
}
    ${RepoSnapshotFragmentDoc}`;

export function useReposQuery(options: Omit<Urql.UseQueryArgs<ReposQueryVariables>, 'query'>) {
  return Urql.useQuery<ReposQuery>({ query: ReposDocument, ...options });
};