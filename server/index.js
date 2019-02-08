/*
#install packages
npm i babel-cli babel-preset-env nodemon --save-dev express express-graphql graphql graphql-subscriptions graphql-tools sequelize graphql-server-express http subscriptions-transport-ws body-parser sqlite3 casual loadsh  babel-preset-es2015 babel-preset-stage-2 babel-plugin-inline-import graphql-errors

npm i backpack-core --save

#test server
yarn add jest jest-cli --dev
yarn add babel-register

#run project
npm run start
*/
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { createServer } from 'http';
import { subscriptionManager } from './subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import bodyParser from 'body-parser';
import express from 'express';
import { execute, subscribe } from 'graphql';
import schemaFail from './schema';


var { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql')

//const { maskErrors } = require('graphql-errors');

let PORT = 4000;

const WS_GQL_PATH = '/subscriptions';

/*
if (process.env.PORT) {
  PORT = parseInt(process.env.PORT, 10) + 100;
}
*/



/*
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = createServer(app);


new SubscriptionServer({ schema, execute, subscribe }, { server, path: WS_GQL_PATH });

app.use(
  '/graphql',
  graphqlExpress(req => {    
    const query = req.query.query || req.body.query;
    if (query && query.length > 2000) {
      // None of our app's queries are this long
      // Probably indicates someone trying to send an overly expensive query
      throw new Error('Query too large.');
    }
    return {
      schema,
      graphiql: true
    };
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);
*/

//maskErrors(schema);

/*
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }))



server.listen(PORT, () => {
  console.log(`API Server is now running on http://localhost:${PORT}/graphql`); // eslint-disable-line no-console
  console.log(
    `API Server over web socket with subscriptions is now running on ws://localhost:${PORT}${WS_GQL_PATH}`
  ); // eslint-disable-line no-console
});

*/


/****/
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

// Maps username to content
var fakeDatabase = {};

var root = {
  getMessage: function ({id}) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  createMessage: function ({input}) {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage: function ({id, input}) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

var app = express();

/*
console.log(schema)
console.log("------------------------------------------------------------------------------------")
console.log(schemaFail)
*/

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});