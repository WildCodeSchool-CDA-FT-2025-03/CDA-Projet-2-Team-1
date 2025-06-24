import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/tests-integration/**/*.test.ts'],
  moduleFileExtensions: ['js', 'ts'],
};

export default config;
