import type { CodegenConfig } from '@graphql-codegen/cli';
import 'vite';

console.log(process.env.VITE_APOLLO_SERVER);
const config: CodegenConfig = {
  schema: 'http://localhost:4000', //`${process.env.VITE_APOLLO_SERVER}/`,
  documents: ['./src/schemas/**/*.ts'],
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
