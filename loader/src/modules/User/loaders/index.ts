import { PrismaClient } from '@prisma/client';
import user from './user';

export default (prisma: PrismaClient) => {
  const main = user(prisma);
  const extended = Object.assign(main, {});
  return extended;
};
