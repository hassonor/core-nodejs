module.exports = {
  env: {
    node: true,
    mocha: true,
    browser: true,
    es2021: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-underscore-dangle": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "no-undef": "off",
    "linebreak-style": 0,
    "no-unused-vars": "off",
    "consistent-return": "off",
    "arrow-body-style": "off"
  }
};
