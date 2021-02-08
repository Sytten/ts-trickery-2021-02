import { PrismaClient } from '@prisma/client';
import { Stripe } from 'stripe';

import models from '~/models';
import services from '~/services';

import prisma from './prisma';
import stripe from './stripe';

export type Context = {
  prisma: PrismaClient;
  stripe: Stripe;
};

export type Application = Context & {
  models: ReturnType<typeof models>;
  services: ReturnType<typeof services>;
};

export function createApplication(): Application {
  const ctx: Context = {
    prisma,
    stripe,
  };
  return Object.assign(ctx, {
    models: models(ctx),
    services: services(ctx),
  });
}
