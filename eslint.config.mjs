import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: ["dist/**", "webpack.config.js", "webpack.dev.js", "webpack.prod.js"] },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  }
];