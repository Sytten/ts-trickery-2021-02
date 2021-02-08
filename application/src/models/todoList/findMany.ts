import type { TodoList } from '@prisma/client';

import type { Application } from '~/context';

type FindManyInput = {
  userId: number;
};

export default async (
  app: Application,
  { userId }: FindManyInput,
): Promise<TodoList[]> => app.prisma.todoList.findMany({ where: { userId } });
