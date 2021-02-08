import { PrismaClient } from '@prisma/client';

import todoItem from '~/modules/TodoItem/loaders';
import todoList from '~/modules/TodoList/loaders';
import user from '~/modules/User/loaders';

const loader = (prisma: PrismaClient) => {
  return {
    user: user(prisma),
    todoItem: todoItem(prisma),
    todoList: todoList(prisma),
  };
};

export type Loader = ReturnType<typeof loader>;

export default loader;
