module.exports = {
  env: {
    node: true, // This line is needed to indicate that the code will run in a Node.js environment
    es2021: true, // This line indicates that your code is written using ES2021 syntax
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'solid', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/recommended',
    'prettier',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
    'plugin:import/errors', // Include this
    'plugin:import/warnings', // and this
  ],
  rules: {
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    'prettier/prettier': 'error',
    'no-console': 1,
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
