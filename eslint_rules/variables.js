// Variables, 12 rules
// These rules relate to variable declarations:
module.exports = {
  // require or disallow initialization in variable declarations
  // 要求或禁止 var 声明中的初始化
  // {@link https://eslint.org/docs/rules/init-declarations}
  // {@link http://eslint.cn/docs/rules/init-declarations}
  "init-declarations": ["error", "always"],
  // disallow catch clause parameters from shadowing variables in the outer scope
  // 禁止 catch 子句的参数与外层作用域中的变量同名
  // {@link https://eslint.org/docs/rules/no-catch-shadow}
  // {@link http://eslint.cn/docs/rules/no-catch-shadow}
  // 在 IE 8 及更早的版本，catch 子句的参数可以覆盖一个外部的同名变量的值。
  "no-catch-shadow": "error",
  // disallow deleting variables
  // 禁止删除变量
  // {@link https://eslint.org/docs/rules/no-delete-var}
  // {@link http://eslint.cn/docs/rules/no-delete-var}
  // [recommended]
  "no-delete-var": "error",
  // disallow labels that share a name with a variable
  // 不允许标签与变量同名
  // {@link https://eslint.org/docs/rules/no-label-var}
  // {@link http://eslint.cn/docs/rules/no-label-var}
  "no-label-var": "error",
  // disallow specified global variables
  // 禁用特定的全局变量
  // {@link https://eslint.org/docs/rules/no-restricted-globals}
  // {@link http://eslint.cn/docs/rules/no-restricted-globals}
  "no-restricted-globals": ["error"],
  // disallow variable declarations from shadowing variables declared in the outer scope
  // 禁止变量声明与外层作用域的变量同名
  // {@link https://eslint.org/docs/rules/no-shadow}
  // {@link http://eslint.cn/docs/rules/no-shadow}
  "no-shadow": ["error", { "hoist": "all" }],
  // disallow identifiers from shadowing restricted names
  // 禁止将标识符定义为受限的名字
  // {@link https://eslint.org/docs/rules/no-shadow-restricted-names}
  // {@link http://eslint.cn/docs/rules/no-shadow-restricted-names}
  "no-shadow-restricted-names": "error",
  // disallow the use of undeclared variables unless mentioned in /*global */ comments
  // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
  // {@link https://eslint.org/docs/rules/no-undef}
  // {@link http://eslint.cn/docs/rules/no-undef}
  // [recommended]
  "no-undef": "error",
  // disallow initializing variables to undefined
  // {@link https://eslint.org/docs/rules/no-undef-init}
  // {@link http://eslint.cn/docs/rules/no-undef-init}
  // [fixed]
  "no-undef-init": "error",
  // disallow the use of undefined as an identifier
  // 禁止将 undefined 作为标识符
  // {@link https://eslint.org/docs/rules/no-undefined}
  // {@link http://eslint.cn/docs/rules/no-undefined}
  "no-undefined": "error",
  // disallow unused variables
  // 禁止出现未使用过的变量
  // {@link https://eslint.org/docs/rules/no-unused-vars}
  // {@link http://eslint.cn/docs/rules/no-unused-vars}
  // [recommended]
  "no-unused-vars": "error",
  // disallow the use of variables before they are defined
  // 禁止在变量定义之前使用它们
  // {@link https://eslint.org/docs/rules/no-use-before-define}
  // {@link http://eslint.cn/docs/rules/no-use-before-define}
  "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true  }]
}