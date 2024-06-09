module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'tailwindcss'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    tailwindcss: {
      // Optional Tailwind CSS plugin settings
    }
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
