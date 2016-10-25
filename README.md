# GACon Take Home Coding Challenge
### Misha LeClair

## Objective
Build an API for GACon that includes RESTful routes including a list of all talks and a list of all attendees.

## Technical Stack

I chose to use MongoDB/Mongoose and Express. I know GA uses a MEAN stack, which I am comfortable working in. I am also comfortable with the Schema and explicit server-side routing of MongoDB.

## Challenges

I ran into a block while working on the association between the speaker and the talk. I began a process of debugging after receiving this error

```sers/mishaleclair/wdi_31/take-home-coding-challenge/models/talk.js:8
  speaker: [Speaker.Schema],
            ^

ReferenceError: Speaker is not defined
    at Object.<anonymous> (/Users/mishaleclair/wdi_31/take-home-coding-challenge/models/talk.js:8:13)
    ```

I am researching associations in MongoDB to reassess my strategy and see if I can resolve the issue by implementing a new strategy or if the best course of action is more debugging with my current strategy.

## With more time I would:

I would implement cURL to test my routes and server configuration.
