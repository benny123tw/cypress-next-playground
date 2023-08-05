const prettierRules = require('./prettier.config.cjs')

/** @type {import('eslint').ESLint.ConfigData}  */
const config = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierRules,
      },
    ],
  },
}

module.exports = config
