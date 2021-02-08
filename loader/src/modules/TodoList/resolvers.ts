import { TodoList } from '@prisma/client';

import { Context } from '~/context';

import { findListItems } from '~/modules/TodoItem/actions';

const resolvers = {
  TodoList: {
    items: (parent: TodoList, _args: {}, ctx: Context) => {
      return findListItems(parent.id, ctx);
    },
  },
};

export default resolvers;
