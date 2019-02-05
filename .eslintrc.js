// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": false
    }
  },

  env: {
    browser: true,
    node: true
  },

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:vue/recommended'],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  // add your custom rules here
  'rules': [
    'standard',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
