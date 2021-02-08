import type { TodoList } from '@prisma/client';

import type { Application } from '~/context';

type FindOneInput = {
  id: number;
};

export default async (
  app: Application,
  { id }: FindOneInput,
): Promise<TodoList | null> =>
  app.prisma.todoList.findUnique({ where: { id } });
