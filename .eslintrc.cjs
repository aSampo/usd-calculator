module.exports = {
  env: {
    browser: true, es2020: true, node: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': ['error', 'single'],
  },
}
