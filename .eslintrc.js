// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    // 'vue',
    'html'
  ],
  // add your custom rules here
  rules: {
    semi: 0,
    eqeqeq: 0,
    camelcase: 0,
    'comma-spacing': [2, { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': [2, 'never'],
    'no-unused-vars': 0,
    'no-unneeded-ternary': 0,
    'no-useless-constructor': 0,
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    "indent": 0,
    "comma-dangle": 0,
    "handle-callback-err": 0,
    "eol-last": 0,
    'no-debugger': 0
  }
}