// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  ...require("@org/config/eslint-app"),
  ignorePatterns: ["src/generated/**/*"],
};

module.exports = config;
