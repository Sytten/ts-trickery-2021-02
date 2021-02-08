import { PrismaClient } from '@prisma/client';

import prisma from './prisma';

import loader, { Loader } from './loader';

export type Context = {
  prisma: PrismaClient;
  loader: Loader;
};

export function createContext(): Context {
  return {
    prisma,
    loader: loader(prisma),
  };
}
