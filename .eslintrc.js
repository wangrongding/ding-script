module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier', // prettier规范,覆盖eslint格式配置,写在最后
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'func-names': 0,
    'max-len': 0,
    'no-use-before-define': 0,
    // quotes: ['error', 'single'],
  },
};
