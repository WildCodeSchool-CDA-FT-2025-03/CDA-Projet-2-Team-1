module.exports = {
  'frontend/src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    const paths = filenames.map((filename) => `"${filename}"`);
    return [
      `cd frontend && npx eslint --fix ${paths.join(' ')}`,
      `cd frontend && npx prettier --write ${paths.join(' ')}`,
    ];
  },
  'backend/src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    const paths = filenames.map((filename) => `"${filename}"`);
    return [
      `cd backend && npx eslint --fix ${paths.join(' ')}`,
      `cd backend && npx prettier --write ${paths.join(' ')}`,
    ];
  },
  '*.{css,scss}': (filenames) => {
    const paths = filenames.map((filename) => `"${filename}"`);
    return [`npx prettier --write ${paths.join(' ')}`];
  },
  '*.{json,md}': (filenames) => {
    const paths = filenames.map((filename) => `"${filename}"`);
    return [`npx prettier --write ${paths.join(' ')}`];
  },
  '*.{yml,yaml}': (filenames) => {
    const paths = filenames.map((filename) => `"${filename}"`);
    return [`npx prettier --write ${paths.join(' ')}`];
  },
  '*.{js,jsx,ts,tsx}': (filenames) => {
    const rootFiles = filenames.filter(
      (file) =>
        !file.startsWith('frontend/') &&
        !file.startsWith('backend/') &&
        !file.endsWith('.eslintrc.js') &&
        !file.endsWith('lint-staged.config.js') &&
        !file.endsWith('commitlint.config.js')
    );
    if (rootFiles.length === 0) return [];
    const paths = rootFiles.map((filename) => `"${filename}"`);
    return [`npx eslint --fix ${paths.join(' ')}`, `npx prettier --write ${paths.join(' ')}`];
  },
};
