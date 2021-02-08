import { UserInputError } from 'apollo-server-express';

export const toInt = (id?: string | number) => {
  const converted = Number(id);

  if (Number.isNaN(converted)) {
    throw new UserInputError(`Invalid id: ${id}`);
  }

  return converted;
};
