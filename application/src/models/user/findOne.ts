import type { User } from '@prisma/client';

import type { Application } from '~/context';

type FindOneInput = {
  id: number;
};

export default async (
  app: Application,
  { id }: FindOneInput,
): Promise<User | null> => app.prisma.user.findUnique({ where: { id } });
