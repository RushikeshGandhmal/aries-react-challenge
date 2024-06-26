module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-duplicate-imports": "error",
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    camelcase: ["warn", { properties: "always", ignoreDestructuring: true }],
    eqeqeq: ["error", "always"],
    "max-params": ["error", 3],
    "no-var": "error",
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "import", next: "export" },
      {
        blankLine: "always",
        prev: "*",
        next: ["throw", "return", "function", "debugger"],
      },
      { blankLine: "always", prev: "debugger", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-block-like" },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
    "default-param-last": ["error"],
    "key-spacing": [
      "error",
      { beforeColon: false, afterColon: true, mode: "strict" },
    ],
    "keyword-spacing": ["error", { before: true, after: true }],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
          "&&": "before",
          "||": "before",
        },
      },
    ],
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "space-infix-ops": "error",
    "@typescript-eslint/no-extra-boolean-cast": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
