import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './nexus';
import { createApplication } from './context';

export const app = express();

const apollo = new ApolloServer({
  schema,
  context: createApplication,
  subscriptions: false,
});

apollo.applyMiddleware({
  app,
  cors: false,
  disableHealthCheck: true,
});
