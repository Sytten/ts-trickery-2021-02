import { PrismaClient } from '@prisma/client';
import todoItem from './todoItem';
import listTodoItems from './listTodoItems';

export default (prisma: PrismaClient) => {
  const main = todoItem(prisma);
  const extended = Object.assign(main, { byList: listTodoItems(prisma, main) });
  return extended;
};
