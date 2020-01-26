'use strict';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from 'schema';
import {resolvers} from 'resolvers';
import {connectDB, verifyToken} from 'utils';

require('dotenv').config({path: __dirname + '/config/.env'});
const app = express();

//Connect to Mongodb
connectDB();


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: verifyToken,
});

server.applyMiddleware({app,
  cors: {
    credentials: true,
    origin: true
  },});

app.listen({port: 8000}, () => console.log(`Servidor corriendo por  [ http://localhost:3000${server.graphqlPath} ]`));
