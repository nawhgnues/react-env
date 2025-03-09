/** @type {import('lint-staged').Config} */
const config = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings=0", "prettier --write"],
};

export default config;
