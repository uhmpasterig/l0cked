const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
    "*.config.*",
    "src/index.ts",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      rules: {
        "no-unused-vars": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-undef-init": "off",
        "no-undef": "off",
        "no-redeclare": "off",
        "no-undeclared-env-vars": "off",
      },
    },
  ],
};
