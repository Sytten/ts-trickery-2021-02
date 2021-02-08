import DataLoader from 'dataloader';
import { PrismaClient, TodoItem, TodoList } from '@prisma/client';

const loadListsTodoItems = (
  prisma: PrismaClient,
  main: DataLoader<number, TodoItem | null>,
) => async (keys: ReadonlyArray<number>) => {
  // Fetch data
  const result = await prisma.todoItem.findMany({
    where: { listId: { in: keys as number[] } },
  });

  // Parse result
  const dict = new Map<number, TodoItem[]>();
  result.forEach((todoItem) => {
    main.prime(todoItem.id, todoItem);
    const array = dict.get(todoItem.listId);
    if (array) array.push(todoItem);
    else dict.set(todoItem.listId, [todoItem]);
  });

  return keys.map((key) => dict.get(key) || []);
};

export default (
  prisma: PrismaClient,
  main: DataLoader<number, TodoItem | null>,
) => {
  return new DataLoader<number, TodoItem[]>(loadListsTodoItems(prisma, main));
};
