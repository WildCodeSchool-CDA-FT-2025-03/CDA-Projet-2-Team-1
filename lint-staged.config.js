module.exports = {
  'frontend/src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return [
      `cd frontend && npx eslint --fix ${filenames.join(' ')}`,
      `cd frontend && npx prettier --write ${filenames.join(' ')}`,
    ];
  },
  'backend/src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return [
      `cd backend && npx eslint --fix ${filenames.join(' ')}`,
      `cd backend && npx prettier --write ${filenames.join(' ')}`,
    ];
  },
  '*.{css,scss}': (filenames) => {
    return [`npx prettier --write ${filenames.join(' ')}`];
  },
  '*.{json,md}': (filenames) => {
    return [`npx prettier --write ${filenames.join(' ')}`];
  },
  '*.{yml,yaml}': (filenames) => {
    return [`npx prettier --write ${filenames.join(' ')}`];
  },
};
