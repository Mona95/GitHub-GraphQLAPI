/**
 * This file includes all the queries that have been used
 * in this application
 */
import { gql } from "@apollo/client";

/**
 * Responisble to search for the repositories in githubAPI
 * required variables:
 * $search_term
 */
export const SEARCH_FOR_REPOS = gql`
  query ($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            descriptionHTML
          }
        }
      }
    }
  }
`;

/**
 * Responsible to search for users in githubAPI
 * required variables:
 * $name
 */
export const SEARCH_FOR_USERS = gql`
  query ($name: String!) {
    search(query: $name, type: USER, first: 50) {
      userCount
      edges {
        node {
          __typename
          ... on User {
            login
            bio
            email
          }
        }
      }
    }
  }
`;

/**
 * Responsible to search for repositories of a specific user in githubAPI
 * required variables :
 * $username
 */
export const SERACH_REPO_BY_OWNER = gql`
  query ($username: String!) {
    user(login: $username) {
      name
      login
      company
      bio
      twitterUsername
      websiteUrl
      url
      repositories(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              url
              name
              owner {
                login
              }
              stargazers {
                totalCount
              }
              descriptionHTML
            }
          }
        }
      }
    }
  }
`;

/**
 * Responsible to create issue for repository in githubAPI
 * required variables :
 * $repo_id
 * $title
 * $body
 */
export const CREATE_ISSUE = gql`
  mutation CreateIssue($repo_id: String!, $title: String!, $body: String!) {
    createIssue(input: { repositoryId: $repo_id, title: $title, body: $body }) {
      issue {
        number
        body
      }
    }
  }
`;

/**
 * Responsible to search for issues of a specific repository in githubAPI
 * required variables :
 * $owner
 * $name
 */
export const GET_REPO_ISSUES = gql`
  query ($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      issues(
        first: 20
        states: [OPEN]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          title
          bodyHTML
          createdAt
          author {
            login
          }
        }
      }
    }
  }
`;
