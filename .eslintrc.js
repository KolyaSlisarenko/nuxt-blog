module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: [
    'html',
    'vue',
  ],
  extends: [
    // add more generic rule sets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/require-prop-types': 'error',
    'vue/this-in-template': 'error',
    /**
     * Please use v-html responsible.
     * v-html is used only for translations rendering.
     */
    'vue/no-v-html': 0,
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        'message': 'Unexpected property on console object was called'
      }
    ],
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'no-useless-escape': 'off',
    'no-debugger': 'off',
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'vue/no-lone-template': 'off',
    'vue/multi-word-component-names': 'off',
    // TODO enable and fix
    'vue/no-mutating-props': 'off',
    'no-useless-catch': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
  },
};

