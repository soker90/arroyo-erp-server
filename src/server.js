'use strict';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from 'schema';
import {resolvers} from 'resolvers';
import {connectDB} from 'utils/connectDB';
import {verifyToken} from 'utils/verifyToken';

require('dotenv').config({path: __dirname + '/config/.env'});
const app = express();

//Connect to Mongodb
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: verifyToken,
});

server.applyMiddleware({app});

app.listen({port: 3000}, () => console.log(`Servidor corriendo por  [ http://localhost:3000${server.graphqlPath} ]`));
