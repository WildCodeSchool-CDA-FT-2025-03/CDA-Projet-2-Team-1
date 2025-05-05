module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: [
    'dist/**',
    'node_modules/**',
    'build/**',
    'coverage/**',
    '**/*.min.js',
    '**/*.d.ts',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
  },
  overrides: [
    {
      files: ['frontend/src/**/*.{ts,tsx}'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      plugins: ['react-refresh'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-no-constructed-context-values': 'warn',
        'react/no-array-index-key': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    },
    {
      files: ['backend/src/**/*.{ts,js}'],
      extends: ['plugin:node/recommended'],
      settings: {
        node: {
          tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
        },
      },
    },
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/vite.config.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
