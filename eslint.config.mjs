import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // ...js.configs.recommended.rules,
  // ...react.configs.recommended.rules,
  // ...react.configs['jsx-runtime'].rules,
  // ...reactHooks.configs.recommended.rules,
  // 'react/jsx-no-target-blank',
  // 'react/prop-types',
  // 'react/no-unescaped-entities',
  // 'no-unused-vars',
  // 'react/no-unknown-property',
  // 'react-refresh/only-export-components',
  // 'axe/name-role-value',
];

export default eslintConfig;
