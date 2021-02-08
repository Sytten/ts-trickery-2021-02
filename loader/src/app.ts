/* eslint-disable import/prefer-default-export */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import { createContext } from './context';

export const app = express();

const apollo = new ApolloServer({
  schema,
  context: createContext,
  subscriptions: false,
});

apollo.applyMiddleware({
  app,
  cors: false,
  disableHealthCheck: true,
});
