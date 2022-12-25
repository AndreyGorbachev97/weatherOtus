module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "no-new": 0,
    "no-param-reassign": ["error", { props: false }],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
  },
};
