/* eslint-disable @typescript-eslint/no-var-requires */
const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'node', // ou "jsdom" si tu testes des composants React
  testPathIgnorePatterns: ['/node_modules/', '/tests/'], // Ignore les tests Playwright
  transform: {
    ...tsJestTransformCfg,
  },
};
