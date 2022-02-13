# IronEval

A simple test environment designed to assess iron-students web dev skills.

# Installation

```shell
$ npm i
$ npm run dev
```

# The .env file

Create a .env file containing this line:

```
VITE_APP_BACKEND_URL = https://backend-jury.herokuapp.com
```

# API calls

## The backend

The database has a collection of superheroes, a collection of publishers and a collection of users.

The hero model has a relation to a user - the user that created this hero on the site - and a relation to a publisher - a comics publisher, such as DC Comics.

## Available endpoints

This base URL should prefix all requests:
`https://backend-jury.herokuapp.com/api`

| Route          | HTTP Verb | Response               |
| -------------- | --------- | ---------------------- |
| `/heroes`      | GET       | Get all superheroes    |
| `/hero/random` | GET       | Get a random superhero |
| `/heroes`      | POST      | Create a hero          |
| `/heroes/:id`  | GET       | Get a hero by id       |
| `/heroes/:id`  | DELETE    | Delete a hero by id    |

The same endpoints are available for comics publishers, beginning with "publishers" instead of "heroes".
