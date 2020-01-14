# Neardev (Backend w/ Node.js)

This is Neardev, the idea of ​​creating this app came from the difficulty I have, not only finding manpower, but also finding other developers near me that I can exchange an idea about the technologies I'm studying, sometimes I have a developer studying the same technology as me on my street and I don't even know this person exists.

This API made with [Node.js](https://nodejs.org/en/) contains all the business rules of the application which allow us to register developers with github username, technologies of interest and location (latitude and longitude), listing all registered users and most importantly, searching for developers using the same technology within 10 kilometers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Feel free to deploy if you want.

### Prerequisites

You need a MONGO_URL from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or if you want, for a local MongoDB and past to .env file in the root oh the project

```
MONGO_URL=yourMongoUrl
```

### Installation

Clone the repository and run

```javascript
// With NPM
$ npm install
$ npm run dev

// With Yarn
$ yarn install
$ yarn dev
```

## Built With

-   [Express](https://expressjs.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [Axios](https://github.com/axios/axios)

## Contributing

Please feel free to send pull request if you want to contribute!

## Authors

-Nubelson - _Development_ - [nubelsondev](https://github.com/nubelsondev)
