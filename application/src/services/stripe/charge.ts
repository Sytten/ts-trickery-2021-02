import Stripe from 'stripe';
import type { Application } from '~/context';

type ChargeInput = {
  customerId: string;
  amount: number;
};

export default async (
  app: Application,
  { customerId, amount }: ChargeInput,
): Promise<Stripe.Charge> => {
  const charge = await app.stripe.charges.create({
    amount,
    customer: customerId,
    capture: true,
  });
  return charge;
};
