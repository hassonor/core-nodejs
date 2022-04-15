module.exports = {
  env: {
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
    "no-undef": "off",
    "no-unused-vars": "off",
    "consistent-return": "off"
  }
};
