/* eslint-env node */
module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },

    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],

    // 0关闭 1提示 2错误
    rules: {
        'prettier/prettier': 1,

        // 禁止没使用的变量
        'no-unused-vars': 2,
        // 强制使用let或const 不能使用var
        'no-var': 2,
        // 禁止使用弱等于
        eqeqeq: 2,
        // 禁止重新声明变量
        'no-redeclare': 2,
        // 对象中禁止出现重复的key
        'no-dupe-keys': 2,
        // 数组使用一致的空格
        'array-bracket-spacing': 2,
        // 控制逗号前后的空格
        'comma-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        // 最大语句数
        'max-statements': [2, 100],
        // 最大深度
        'max-nested-callbacks': [2, 5],
        // filter, map, reduce等需要return
        'array-callback-return': 2,
        // 子类必须调用父类super
        'constructor-super': 2,
    },

    ignorePatterns: ['!.prettierrc.js'],
};