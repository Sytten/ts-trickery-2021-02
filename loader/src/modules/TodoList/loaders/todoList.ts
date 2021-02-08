import DataLoader from 'dataloader';
import { PrismaClient, TodoList } from '@prisma/client';

const loadTodoLists = (prisma: PrismaClient) => async (
  keys: ReadonlyArray<number>,
) => {
  // Fetch data
  const result = await prisma.todoList.findMany({
    where: { id: { in: keys as number[] } },
  });

  // Parse result
  const dict = new Map<number, TodoList>();
  result.forEach((todoList) => {
    dict.set(todoList.id, todoList);
  });

  return keys.map((key) => dict.get(key) || null);
};

export default (prisma: PrismaClient) => {
  return new DataLoader<number, TodoList | null>(loadTodoLists(prisma));
};
