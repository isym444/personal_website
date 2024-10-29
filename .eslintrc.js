module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
} 