import DataLoader from 'dataloader';
import { PrismaClient, TodoList } from '@prisma/client';

const loadUsersTodoLists = (
  prisma: PrismaClient,
  main: DataLoader<number, TodoList | null>,
) => async (keys: ReadonlyArray<number>) => {
  // Fetch data
  const result = await prisma.todoList.findMany({
    where: { userId: { in: keys as number[] } },
  });

  // Parse result
  const dict = new Map<number, TodoList[]>();
  result.forEach((todoList) => {
    main.prime(todoList.id, todoList);
    const array = dict.get(todoList.userId);
    if (array) array.push(todoList);
    else dict.set(todoList.userId, [todoList]);
  });

  return keys.map((key) => dict.get(key) || []);
};

export default (
  prisma: PrismaClient,
  main: DataLoader<number, TodoList | null>,
) => {
  return new DataLoader<number, TodoList[]>(loadUsersTodoLists(prisma, main));
};
