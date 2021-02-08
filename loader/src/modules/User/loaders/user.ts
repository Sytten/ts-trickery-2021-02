import DataLoader from 'dataloader';
import { User, PrismaClient } from '@prisma/client';

const loadUsers = (prisma: PrismaClient) => async (
  keys: ReadonlyArray<number>
) => {
  // Fetch data
  const result = await prisma.user.findMany({
    where: { id: { in: keys as number[] } },
  });

  // Parse result
  const dict = new Map<number, User>();
  result.forEach((user) => {
    dict.set(user.id, user);
  });

  return keys.map((key) => dict.get(key) || null);
};

export default (prisma: PrismaClient) => {
  return new DataLoader<number, User | null>(loadUsers(prisma));
};
