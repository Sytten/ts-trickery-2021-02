import type { Context } from '~/context';

// This works because of contravariance (Context is injected as Application)
export const inject = <T, U>(
  ctx: Context,
  fn: (app: Context, input: T) => U,
) => {
  return (input: T) => fn(ctx, input);
};

export const assertNotNull = <T>(input?: T | null): T => {
  if (input !== null && input !== undefined) return input;
  throw new Error('Object should not be null'); // This will result in a 500
};
