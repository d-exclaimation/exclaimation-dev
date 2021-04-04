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

export type Mutation = {
  __typename?: 'Mutation';
  newPost: Post;
  updatePost: Post;
  incrementCrabRave: Post;
  deletePost: Post;
};


export type MutationNewPostArgs = {
  input: PostDto;
  key: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Int'];
  input: PostDto;
  key: Scalars['String'];
};


export type MutationIncrementCrabRaveArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
  key: Scalars['String'];
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
  type: Scalars['String'];
  leaf: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type FullPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'crabrave'>
  & { nodes: Array<(
    { __typename?: 'PostNode' }
    & Pick<PostNode, 'type' | 'leaf'>
  )> }
);

export type PostSnippetFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'snippet' | 'crabrave'>
);

export type CreatePostMutationMutationVariables = Exact<{
  input: PostDto;
  key: Scalars['String'];
}>;


export type CreatePostMutationMutation = (
  { __typename?: 'Mutation' }
  & { newPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'crabrave'>
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

export type AllPostQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostSnippetFragment
  )> }
);

export const FullPostFragmentDoc = gql`
    fragment FullPost on Post {
  id
  title
  nodes {
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
export const CreatePostMutationDocument = gql`
    mutation CreatePostMutation($input: PostDTO!, $key: String!) {
  newPost(input: $input, key: $key) {
    id
    title
    body
    crabrave
  }
}
    `;

export function useCreatePostMutationMutation() {
    return Urql.useMutation<CreatePostMutationMutation, CreatePostMutationMutationVariables>(CreatePostMutationDocument);
}
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
}
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...FullPost
  }
}
    ${FullPostFragmentDoc}`;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'> = {}) {
    return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
}
export const AllPostDocument = gql`
    query AllPost {
  posts {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;

export function useAllPostQuery(options: Omit<Urql.UseQueryArgs<AllPostQueryVariables>, 'query'> = {}) {
    return Urql.useQuery<AllPostQuery>({ query: AllPostDocument, ...options });
}
