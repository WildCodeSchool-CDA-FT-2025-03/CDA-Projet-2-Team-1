import { defineConfig, loadEnv } from 'vite';
import type { CodegenConfig } from '@graphql-codegen/cli';

const root = process.cwd();

const config: CodegenConfig = {
  schema: `${process.env.VITE_APOLLO_SERVER}/`,
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
