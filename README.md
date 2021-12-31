# Overview of the project

## Description
The idea of the app let a user search for users and repos on GitHub. After clicking
search, the user will see a list of user search results. When clicking on a User, you
will then see a list of Repositories. After clicking on a Repository, you
will go to the Repository overview, where you will be able to see all of the current
Open issues of that repository. Next, you can create a new issue.

<hr/>

## Technologies
React, GraphQL, Apollo Client, Github GraphQL API

<hr/>

## Installation instructions.
- clone the repository.
- run `npm install` in the project directory.
- run `npm start`.

<hr/>

## List of important dependencies
- @material-ui/core
- @material-ui/icons
- @apollo/client
- moment
- graphql

<hr/>

## File structure

```
src
    |
    └─── components
            |
            └─── Issue
            |
            └─── IssueList
            |
            └─── Repository
            |
            └─── RepositoryList
            |
            └─── User
            |
            └─── UserList
    |
    └─── client
    |
    └─── helpers
    |
    └─── queries

```
<hr/>

## List of known bugs and missing features
- Repositories page doesn't have pagination.

<hr/>

## Features that can be added to the project
- Displaying more information for each user
- Pagination for both repositories and issues
- Having notification system for high rated repositories if any new issue created
- Improving the validation system 