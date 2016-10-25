# GACon Take Home Coding Challenge
### Misha LeClair

## Objective
Build an API for GACon that includes RESTful routes including a list of all talks and a list of all attendees.

## Technical Stack

I chose to use MongoDB/Mongoose and Express. I know GA uses a MEAN stack, which I am comfortable working in. I am also comfortable with the Schema and explicit server-side routing of MongoDB.

## Challenges

I ran into a block while working on the relationship between talks and the speaker. I began a process of debugging after receiving this error:

```sers/mishaleclair/wdi_31/take-home-coding-challenge/models/talk.js:8
  speaker: [Speaker.Schema],
            ^

ReferenceError: Speaker is not defined
    at Object.<anonymous> (/Users/mishaleclair/wdi_31/take-home-coding-challenge/models/talk.js:8:13)
    ```

I took a step back to research associations in MongoDB. I reassessed my strategy and decided to simplify my models and relationships. I started by embedding the speaker into the talk model. I am doing additional research on this strategy. I will also take a second look at the referenced relationship between attendees and talks.

## With more time I would:

I would implement cURL to test my routes and server configuration.
