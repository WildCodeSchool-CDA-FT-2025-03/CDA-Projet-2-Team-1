import 'vite';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.VITE_APOLLO_SERVER || 'http://localhost:4000',
  documents: ['src/schemas/**/*.ts'],
  generates: {
    './src/gql/graphql-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
  overwrite: true,
};

export default config;
