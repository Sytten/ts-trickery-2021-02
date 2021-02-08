import { makeSchema } from 'nexus';
import * as path from 'path';

import * as allTypes from './resolvers';

export const schema = makeSchema({
  contextType: {
    alias: 'ctx',
    export: 'Application',
    module: path.join(
      __dirname.replace(/\/dist$/, '/src'),
      './context/index.ts',
    ),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
  outputs: {
    schema: path.join(__dirname, '../schema.graphql'),
    typegen: path.join(__dirname.replace(/\/dist$/, '/src'), './typegen.ts'),
  },

  prettierConfig: path.join(__dirname, '../.prettierrc.yml'),
  sourceTypes: {
    modules: [
      {
        alias: 'db',
        module: '.prisma/client/index.d.ts',
      },
    ],
  },
  types: allTypes,
});
