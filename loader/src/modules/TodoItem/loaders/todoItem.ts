import DataLoader from 'dataloader';
import { PrismaClient, TodoItem } from '@prisma/client';

const loadTodoItems = (prisma: PrismaClient) => async (
  keys: ReadonlyArray<number>,
) => {
  // Fetch data
  const result = await prisma.todoItem.findMany({
    where: { id: { in: keys as number[] } },
  });

  // Parse result
  const dict = new Map<number, TodoItem>();
  result.forEach((todoItem) => {
    dict.set(todoItem.id, todoItem);
  });

  return keys.map((key) => dict.get(key) || null);
};

export default (prisma: PrismaClient) => {
  return new DataLoader<number, TodoItem | null>(loadTodoItems(prisma));
};
