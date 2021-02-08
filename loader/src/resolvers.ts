import TodoItem from './modules/TodoItem/resolvers';
import TodoList from './modules/TodoList/resolvers';
import User from './modules/User/resolvers';

const baseResolvers = {
  Query: {
    _: () => {
      return true;
    },
  },
  Mutation: {},
};

export default [baseResolvers, TodoItem, TodoList, User];
