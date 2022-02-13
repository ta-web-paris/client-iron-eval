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

This base URL should prefix all requests:
`https://backend-jury.herokuapp.com/api`

| Route          | HTTP Verb | Response           |
| -------------- | --------- | ------------------ |
| `/cats`        | GET       | Get all cats       |
| `/cats/random` | GET       | Get a random cat   |
| `/cats`        | POST      | Create a cat       |
| `/cats/:id`    | GET       | Get a cat by id    |
| `/cats/:id`    | DELETE    | Delete a cat by id |

The same endpoints are available for superheroes and comics publishers, beginning respectively with "heroes" and "publishers".
