import { PrismaClient } from '@prisma/client';
import todoList from './todoList';
import userTodoLists from './userTodoLists';

export default (prisma: PrismaClient) => {
  const main = todoList(prisma);
  const extended = Object.assign(main, { byUser: userTodoLists(prisma, main) });
  return extended;
};
