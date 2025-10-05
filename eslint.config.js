import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, prettier: pluginPrettier },
    extends: ["js/recommended", "plugin:prettier/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      "prettier/prettier": "error"
    }
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.json"],
    plugins: { json, prettier: pluginPrettier },
    extends: ["json/recommended", "plugin:prettier/recommended"],
    language: "json/json",
    rules: {
      "prettier/prettier": "error"
    }
  }
]);
