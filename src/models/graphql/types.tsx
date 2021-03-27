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
};

export type PostDto = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type AllPostQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'crabrave'>
  )> }
);


export const AllPostDocument = gql`
    query AllPost {
  posts {
    id
    title
    crabrave
  }
}
    `;

export function useAllPostQuery(options: Omit<Urql.UseQueryArgs<AllPostQueryVariables>, 'query'> = {}) {
    return Urql.useQuery<AllPostQuery>({ query: AllPostDocument, ...options });
}
