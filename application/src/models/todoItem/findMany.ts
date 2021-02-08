import type { TodoItem } from '@prisma/client';

import type { Application } from '~/context';

type FindManyInput = {
  listId: number;
};

export default async (
  app: Application,
  { listId }: FindManyInput,
): Promise<TodoItem[]> => app.prisma.todoItem.findMany({ where: { listId } });
