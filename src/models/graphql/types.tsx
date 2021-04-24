import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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
  loginAsAdmin: Scalars['String'];
  newPost: Post;
  updatePost: Post;
  incrementCrabRave: Post;
  deletePost: Post;
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


export type MutationIncrementCrabRaveArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};

export type PasswordInput = {
  time: Scalars['String'];
  pass: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  crabrave: Scalars['Int'];
  snippet: Scalars['String'];
  nodes: Array<PostNode>;
};

export type PostDto = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostNode = {
  __typename?: 'PostNode';
  id: Scalars['ID'];
  type: Scalars['String'];
  leaf: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  avatarURL: Scalars['String'];
  githubURL: Scalars['String'];
  name: Scalars['String'];
  location: Scalars['String'];
  bio: Scalars['String'];
  twitterUsername: Scalars['String'];
  reposCount: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
  profile: Profile;
  repos: Array<Repo>;
  topLang: Language;
  me?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  limit: Scalars['Int'];
  by: Scalars['String'];
};


export type QueryReposArgs = {
  limit: Scalars['Int'];
};

export type Repo = {
  __typename?: 'Repo';
  id: Scalars['ID'];
  name: Scalars['String'];
  repoName: Scalars['String'];
  url: Scalars['String'];
  description: Scalars['String'];
  language?: Maybe<Scalars['String']>;
};

export type FullPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'crabrave'>
  & { nodes: Array<(
    { __typename?: 'PostNode' }
    & Pick<PostNode, 'id' | 'type' | 'leaf'>
  )> }
);

export type PostSnippetFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'snippet' | 'crabrave'>
);

export type ProfileSnapFragment = (
  { __typename?: 'Profile' }
  & Pick<Profile, 'id' | 'name' | 'bio' | 'githubURL' | 'twitterUsername' | 'reposCount'>
);

export type RepoSnapshotFragment = (
  { __typename?: 'Repo' }
  & Pick<Repo, 'id' | 'language' | 'name' | 'description' | 'repoName' | 'url'>
);

export type CreatePostMutationMutationVariables = Exact<{
  input: PostDto;
}>;


export type CreatePostMutationMutation = (
  { __typename?: 'Mutation' }
  & { newPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & { deletePost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type UpRaveMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UpRaveMutation = (
  { __typename?: 'Mutation' }
  & { incrementCrabRave: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'crabrave'>
  ) }
);

export type LoginAdminMutationVariables = Exact<{
  time: Scalars['String'];
  key: Scalars['String'];
}>;


export type LoginAdminMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'loginAsAdmin'>
);

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = (
  { __typename?: 'Query' }
  & { topLang: (
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'lang' | 'percentage'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'me'>
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & FullPostFragment
  )> }
);

export type AllPostQueryVariables = Exact<{
  limit: Scalars['Int'];
  by: Scalars['String'];
}>;


export type AllPostQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostSnippetFragment
  )> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile: (
    { __typename?: 'Profile' }
    & ProfileSnapFragment
  ) }
);

export type ReposQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type ReposQuery = (
  { __typename?: 'Query' }
  & { repos: Array<(
    { __typename?: 'Repo' }
    & RepoSnapshotFragment
  )> }
);

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
export const LanguagesDocument = gql`
    query Languages {
  topLang {
    id
    lang
    percentage
  }
}
    `;

export function useLanguagesQuery(options: Omit<Urql.UseQueryArgs<LanguagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LanguagesQuery>({ query: LanguagesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...FullPost
  }
}
    ${FullPostFragmentDoc}`;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
};
export const AllPostDocument = gql`
    query AllPost($limit: Int!, $by: String!) {
  posts(limit: $limit, by: $by) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;

export function useAllPostQuery(options: Omit<Urql.UseQueryArgs<AllPostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllPostQuery>({ query: AllPostDocument, ...options });
};
export const ProfileDocument = gql`
    query Profile {
  profile {
    ...ProfileSnap
  }
}
    ${ProfileSnapFragmentDoc}`;

export function useProfileQuery(options: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};
export const ReposDocument = gql`
    query Repos($limit: Int!) {
  repos(limit: $limit) {
    ...RepoSnapshot
  }
}
    ${RepoSnapshotFragmentDoc}`;

export function useReposQuery(options: Omit<Urql.UseQueryArgs<ReposQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReposQuery>({ query: ReposDocument, ...options });
};