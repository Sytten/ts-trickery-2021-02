import gql from 'graphql-tag';

import TodoItem from './modules/TodoItem/typeDefs';
import TodoList from './modules/TodoList/typeDefs';
import User from './modules/User/typeDefs';

const baseSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [baseSchema, TodoItem, TodoList, User];
