import { TodoItem } from '@prisma/client';

import { Context } from '~/context';

import { findList } from '~/modules/TodoList/actions';

const resolvers = {
  TodoItem: {
    list: (parent: TodoItem, _args: {}, ctx: Context) => {
      return findList(parent.listId, ctx);
    },
  },
};

export default resolvers;
