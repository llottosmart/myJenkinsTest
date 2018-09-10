// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
  
    "no-console":[0,{"allow":["warn","error"]}],
    "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
    "no-void": 2, // 禁用void操作符
    "no-with": 2, // 禁用with
    "curly": 1, // 必须使用 if(){} 中的{}
    "no-inner-declarations":0, // 禁止在嵌套的块中出现变量声明或 function 声明

    // "camelcase": 0, // 强制驼峰法命名
    "no-use-before-define":2,
    "default-case":2, // switch中必须有defautl分支.

    "indent": [2, 4], // 缩进风格, 4个空格.
    "keyword-spacing":[2,{"before":true,"after":true}], // 关键字前后留至少一个空格
    "new-cap":2, // 要求构造函数首字母大写
    "quotes": [2,"single"], // 使用单引号, 也可以使用反引号.
    "space-before-function-paren":1, // 函数声明时括号与函数之间加空格
    "brace-style":1, // else 关键字与花括号保持在同一行
    "no-multiple-empty-lines":1, // 不允许有连续多行空行
    "key-spacing":[1,{"beforeColon":true,"afterColon":true}], // 键值对当中冒号前后留一个空格之间保留空白
    // "prefer-arrow-callback":2, // 要求回调函数使用箭头函数
    "no-duplicate-imports":2, // 禁止重复模块导入

    "no-alert": 'error', // 禁用 alert、confirm 和 prompt
    "for-direction":2, // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "block-scoped-var":2, // 强制把变量的使用限制在其定义的作用域范围内
    "no-empty-function":2, // 禁止出现空函数
    "no-eval":2, // 禁用 eval()
    "no-undef-init":2, // 禁止将变量初始化为 undefined
    "no-multi-assign":2, // 禁止连续赋值
    "no-nested-ternary":2, // 禁用嵌套的三元表达式
    "arrow-body-style":2, // 要求箭头函数体使用大括号
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
