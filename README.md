# Coding Assignment

The goal of this assignment is to showcase your ability to develop features and your coding style. Due to the time

constraint you will have to prioritize what you work on, and have to try and balance cleanliness with just getting it

done.

Even though the app is small, one can easily spend the whole week working on it: perfecting styles, testing every single

method, or carefully crafting every single line of code. Please don't! Do as much as you can in about three hours and

share the results.

The most important part of the interview will come after this one, when we look at the app together, talk about the

decisions you have made, etc..

## Getting Started

Install the packages and you're good to go!

```bash

# Install dependencies
yarn

# Run the app
yarn start

# Run the server
yarn start-server

# run the tests
yarn test

```

## Rest API Urls

### Users

- Get all users: `GET http://localhost:3004/users`

- Get user: `GET http://localhost:3004/users/{userId}`

- Update user(Put): `PUT http://localhost:3004/users/{userId}`

- Update user(Patch): `PATCH http://localhost:3004/users/{userId}`

- Remove user: `DELETE http://localhost:3004/users/{userId}`

- Full text search : `GET http://localhost:3004/users?q={searchText}`

### Tickets

- Get all tickets: `GET http://localhost:3004/tickets`

- Get all tickets with associated user: `GET http://localhost:3004/tickets?_expand=user`

- Get ticket: `GET http://localhost:3004/tickets/{ticketId}`

- Update ticket(Put):` PUT http://localhost:3004/tickets/{ticketId}`

- Update ticket(Patch):` PUT http://localhost:3004/tickets/{ticketId}`

- Remove ticket: `DELETE http://localhost:3004/tickets/{ticketId}`

- Search by status : `GET http://localhost:3004/tickets?status={statusValue}`

- Full text search : `GET http://localhost:3004/tickets?q={searchText}`

### User & Ticket Schema

```typeScript
    interface User {
        id: number,
        firstName: string,
        lastName: string,
        dob: string,
        address: string,
        image:string
    }

    interface Ticket {
        id: number,
        userId?: number,
        number: string,
        status: string,
    }
```

## Ticketing managing application

Build a ticket managing app, where the user can _add_, _filter_ (by status), _assign_, and _complete_ tickets.

- The app should have two screens:

  1.  the list screen and

  2.  the details screen.

Tickets could have one of these states: `"assigned", "completed", "unassigned"`

Please use the React Router to manage the transitions between them.

- You can use any state management library you want (or none at all).

- Write a couple of tests. The goal here is not to build a production-quality app, so don't test every single detail. Two or three tests should be good enough.

- Don't forget about error handling and race conditions. The API server has a random delay. If you bump it up to say 10 seconds, would the app still work correctly?

**💡 Feel free to use any of the popular react UI component libraries like MUI, Chakra-UI, etc ...**

## Submitting your solution

Please send us the link to your repo on GitHub, Gitlab, etc. We will continue to work on it during the pair-programming

sessions. Please also indicate approximately how long you spent on the submission.
