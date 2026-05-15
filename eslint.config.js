import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
    js.configs.recommended,
    ...vue.configs["flat/recommended"],
    prettier,
    {
        files: ["**/*.vue", "**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                window: "readonly",
                document: "readonly"
            }
        },
        rules: {
            "vue/multi-word-component-names": "off", // Отключаем требование длинных имен
            "vue/require-default-prop": "off", // Не требовать обязательные default props
        },
    },
];
