module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'prettier/prettier': ['error', { 'space-before-function-paren': false }],
    'vue/html-self-closing': ['error', {
        'html': {
            'void': 'always',
        }
    }]
  }
}
