// https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg
// https://pjchender.dev/webdev/note-eslint/

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // parser and parserOptions.parser are separate and intentionally different.
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    // semi: ["error", "never"],
    // quotes: ["error", "single"],
    // "no-console": "off",
  }
}
