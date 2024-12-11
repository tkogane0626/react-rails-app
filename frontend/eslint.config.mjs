import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [
      "**/*.js",
      "**/*.ts",
      "**/*.tsx"
    ],
    // settings: {
    //   react: {
    //     version: "detect"
    //   }
    // },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      // "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      // "@typescript-eslint/consistent-return": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      // "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      // "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/init-declarations": "error",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: [
            "camelCase",
            "PascalCase"
          ]
        }
      ],
      "@typescript-eslint/no-array-constructor": "error",
      // "@typescript-eslint/no-array-delete": "error",
      // "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      // "@typescript-eslint/no-confusing-void-expression": "error",
      // "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/no-dupe-class-members": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      // "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      // "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      // "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-invalid-this": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-loss-of-precision": "error",
      "@typescript-eslint/no-magic-numbers": "error",
      // "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      // "@typescript-eslint/no-misused-promises": "error",
      // "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-redeclare": "error",
      // "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-restricted-imports": "error",
      "@typescript-eslint/no-restricted-types": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-type-alias": "error",
      // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      // "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      // "@typescript-eslint/no-unnecessary-qualifier": "error",
      // "@typescript-eslint/no-unnecessary-template-expression": "error",
      // "@typescript-eslint/no-unnecessary-type-arguments": "error",
      // "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      // "@typescript-eslint/no-unnecessary-type-parameters": "error",
      // "@typescript-eslint/no-unsafe-argument": "error",
      // "@typescript-eslint/no-unsafe-assignment": "error",
      // "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      // "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      // "@typescript-eslint/no-unsafe-member-access": "error",
      // "@typescript-eslint/no-unsafe-return": "error",
      // "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      // "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      // "@typescript-eslint/non-nullable-type-assertion-style": "error",
      // "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-as-const": "error",
      // "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      // "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      // "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      // "@typescript-eslint/prefer-nullish-coalescing": "error",
      // "@typescript-eslint/prefer-optional-chain": "error",
      // "@typescript-eslint/prefer-promise-reject-errors": "error",
      // "@typescript-eslint/prefer-readonly": "error",
      // "@typescript-eslint/prefer-readonly-parameter-types": "error",
      // "@typescript-eslint/prefer-reduce-type-parameter": "error",
      // "@typescript-eslint/prefer-regexp-exec": "error",
      // "@typescript-eslint/prefer-return-this-type": "error",
      // "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      // "@typescript-eslint/promise-function-async": "error",
      // "@typescript-eslint/related-getter-setter-pairs": "error",
      // "@typescript-eslint/require-array-sort-compare": "error",
      // "@typescript-eslint/require-await": "error",
      // "@typescript-eslint/restrict-plus-operands": "error",
      // "@typescript-eslint/restrict-template-expressions": "error",
      // "@typescript-eslint/return-await": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      // "@typescript-eslint/strict-boolean-expressions": "error",
      // "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/typedef": "error",
      // "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/unified-signatures": "error",
      // "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
      "max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2
        }
      ],
      "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "camelcase" :[
        "error",
        {
          "properties": "always"
        }
      ],
      "semi": [
        "error",
        "always"
      ],
      "eqeqeq": [
        "error",
        "always"
      ],
      "indent": [
        "error",
        2
      ]
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
];
