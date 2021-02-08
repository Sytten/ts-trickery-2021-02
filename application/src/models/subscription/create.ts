import type { Subscription } from '@prisma/client';

import type { Application } from '~/context';

const TIERS = {
  STANDARD: 'STANDARD',
};

const PRICING = {
  [TIERS.STANDARD]: 100,
};

type CreateInput = {
  userId: number;
};

export default async (
  app: Application,
  { userId }: CreateInput,
): Promise<Subscription> => {
  const subscription = await app.prisma.subscription.create({
    data: {
      tier: TIERS.STANDARD,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  await app.services.stripe.charge({
    customerId: 'SomeCustomerId',
    amount: PRICING[TIERS.STANDARD],
  });

  return subscription;
};
