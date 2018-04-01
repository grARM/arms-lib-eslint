// ECMAScript 6, 31 rules
// These rules relate to ES6, also known as ES2015:
module.exports = {
  // require braces around arrow function bodies
  // 要求箭头函数体使用大括号
  // {@link https://eslint.org/docs/rules/arrow-body-style}
  // {@link http://eslint.cn/docs/rules/arrow-body-style}
  // [fixed]
  "arrow-body-style": ["error", "always"],
  // require parentheses around arrow function arguments
  // 要求箭头函数的参数使用圆括号
  // {@link https://eslint.org/docs/rules/arrow-parens}
  // {@link http://eslint.cn/docs/rules/arrow-parens}
  // [fixed]
  "arrow-parens": ["error", "always"],
  // enforce consistent spacing before and after the arrow in arrow functions
  // 强制箭头函数的箭头前后使用一致的空格
  // {@link https://eslint.org/docs/rules/arrow-spacing}
  // {@link http://eslint.cn/docs/rules/arrow-spacing}
  // [fixed]
  "arrow-spacing": ["error", { "before": true, "after": true }],
  // require super() calls in constructors
  // 要求在构造函数中有 super() 的调用
  // {@link https://eslint.org/docs/rules/constructor-super}
  // {@link http://eslint.cn/docs/rules/constructor-super}
  // [recommended]
  "constructor-super": "error",
  // enforce consistent spacing around * operators in generator functions
  // 强制 generator 函数中 * 号周围使用一致的空格
  // {@link https://eslint.org/docs/rules/generator-star-spacing}
  // {@link http://eslint.cn/docs/rules/generator-star-spacing}
  // [fixed]
  "generator-star-spacing": ["error", {"before": true, "after": false}],
  // disallow reassigning class members
  // 禁止修改类声明的变量
  // {@link https://eslint.org/docs/rules/no-class-assign}
  // {@link http://eslint.cn/docs/rules/no-class-assign}
  // [recommended]
  "no-class-assign": "error",
  // disallow arrow functions where they could be confused with comparisons
  // 不允许将箭头函数与比较混淆在一起
  // {@link https://eslint.org/docs/rules/no-confusing-arrow}
  // {@link http://eslint.cn/docs/rules/no-confusing-arrow}
  // [fixed]
  // ruiguo: 这一条的配置考虑到代码的可读性和可维护性，如果配置为圆括号（true）仍有混淆的可能
  "no-confusing-arrow": ["error", {"allowParens": false}],
  // disallow reassigning const variables
  // 禁止修改 const 声明的变量
  // {@link https://eslint.org/docs/rules/no-const-assign}
  // {@link http://eslint.cn/docs/rules/no-const-assign}
  // [recommended]
  "no-const-assign": "error",
  // disallow duplicate class members
  // 禁止类成员中出现重复的名称
  // {@link https://eslint.org/docs/rules/no-dupe-class-members}
  // {@link http://eslint.cn/docs/rules/no-dupe-class-members}
  // [recommended]
  "no-dupe-class-members": "error",
  // disallow duplicate module imports
  // 不允许重复模块导入
  // {@link https://eslint.org/docs/rules/no-duplicate-imports}
  // {@link http://eslint.cn/docs/rules/no-duplicate-imports}
  // ruiguo： 一个模块，仅检查进口，不检查出口。建议仅警告提示
  "no-duplicate-imports": "error",
  // disallow new operators with the Symbol object
  // 不允许使用符号对象的新运算符。符号不是用于新运算符，而是作为函数调用。
  // {@link https://eslint.org/docs/rules/no-new-symbol}
  // {@link http://eslint.cn/docs/rules/no-new-symbol}
  // [recommended]
  // ruiguo： 该规则旨在防止符号与 “new”操作运算符 发生意外调用。
  "no-new-symbol": "error",
  // disallow specified modules when loaded by import
  // 禁止检查特定的进口（豁免特定的导入）
  // {@link https://eslint.org/docs/rules/no-restricted-imports}
  // {@link http://eslint.cn/docs/rules/no-restricted-imports}
  // ruiguo： 某些进口在特定环境下可能没有意义或者某些三方模块不能通过eslint，因此要豁免
  "no-restricted-imports": ["error", { "paths": [], "patterns": [] }],
  // disallow this/super before calling super() in constructors
  // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
  // {@link https://eslint.org/docs/rules/no-this-before-super}
  // {@link http://eslint.cn/docs/rules/no-this-before-super}
  // [recommended]
  "no-this-before-super": "error",
  // disallow unnecessary computed property keys in object literals
  // 禁止在对象文字中使用不必要的计算属性键
  // {@link https://eslint.org/docs/rules/no-useless-computed-key}
  // {@link http://eslint.cn/docs/rules/no-useless-computed-key}
  // [fixed]
  // ruiguo： 建议不打断编译，仅提醒
  "no-useless-computed-key": "error",
  // disallow unnecessary constructors
  // 禁用不必要的构造函数
  // {@link https://eslint.org/docs/rules/no-useless-constructor}
  // {@link http://eslint.cn/docs/rules/no-useless-constructor}
  "no-useless-constructor": "error",
  // disallow renaming import, export, and destructured assignments to the same name
  // 禁止将导入，导出和解构的赋值重命名为相同的名称（无用 - 重命名）
  // {@link https://eslint.org/docs/rules/no-useless-rename}
  // {@link http://eslint.cn/docs/rules/no-useless-rename}
  // [fixed]
  // ruiguo ： 默认不忽略（false）所有的重名导入行为，因为是无意义的行为，但建议不打断编译，仅警告
  "no-useless-rename": ["warn", {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": true
  }],
  // require let or const instead of var
  // 要求使用 let 或 const 而不是 var
  // {@link https://eslint.org/docs/rules/no-var}
  // {@link http://eslint.cn/docs/rules/no-var}
  // [fixed]
  // ruiguo： 除了非 ES6 环境外，那些现有 Javascript 项目开始在他们的代码库中引入 ES6 的，如果从 var 迁移到 let 代价高的话，不建议此规则
  // ruiguo： 考虑到一些情况，仍需要var,我暂配置为关闭
  "no-var": "error",
  // require or disallow method and property shorthand syntax for object literals
  // 要求或禁止对象字面量中方法和属性使用简写语法
  // {@link https://eslint.org/docs/rules/object-shorthand}
  // {@link http://eslint.cn/docs/rules/object-shorthand}
  // [fixed]
  // ruiguo:  (默认) 只要有可能，简写就应该被使用。但处理为警告
  "object-shorthand": ["error", "always", { 
      "avoidQuotes": false, // ruiguo： 如果true。表示只要对象键是字符串文字（默认值：false），long-form语法就是优选的。(默认: false)。
      "ignoreConstructors": false, // 如果true。可以用来防止规则报告构造函数的错误。 (默认情况下，该规则把构造函数当成普通的函数。)
      "avoidExplicitReturnArrows": false //  如果true。表示指示方法优于函数属性的显式返回箭头函数。
  }],
  // require using arrow functions for callbacks
  // 要求使用箭头函数作为回调
  // {@link https://eslint.org/docs/rules/prefer-arrow-callback}
  // {@link http://eslint.cn/docs/rules/prefer-arrow-callback}
  // [fixed]
  // ruiguo： 有的时候我们不需要使用当前this，es6的箭头函数本身也不支持->和=>两种 
  // ruiguo: ["warn", { "allowNamedFunctions": true }]虽然可以关闭，我建议关闭
  "prefer-arrow-callback": "off",
  // require const declarations for variables that are never reassigned after declared
  // 要求使用 const 声明那些声明后不再被修改的变量
  // {@link https://eslint.org/docs/rules/prefer-const}
  // {@link http://eslint.cn/docs/rules/prefer-const}
  // [fixed]
  // ruiguo：考虑到在开发的过程当中，有可能还没写到修改变量 的逻辑，线报错会不友好，建议关闭
  "prefer-const": "error",
  // require destructuring from arrays and/or objects
  // 倾向从数组和对象解构
  // {@link https://eslint.org/docs/rules/prefer-destructuring}
  // {@link http://eslint.cn/docs/rules/prefer-destructuring}
  // ruiguo: 在进行数据处理的时候难免会用到数据下标或【‘key’】的方式访问变量
  "prefer-destructuring": "error",
  // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
  // 禁止使用parseInt（）和Number.parseInt（）来支持二进制，八进制和十六进制文字
  // {@link https://eslint.org/docs/rules/prefer-numeric-literals}
  // {@link http://eslint.cn/docs/rules/prefer-numeric-literals}
  // [fixed]
  // ruiguo: 考虑到数据来源格式不确定，我们仍需要强转进制格式，建议关闭
  "prefer-numeric-literals": "off",
  // require rest parameters instead of arguments
  // 建议使用rest 参数 而不是 arguments
  // {@link https://eslint.org/docs/rules/prefer-rest-params}
  // {@link http://eslint.cn/docs/rules/prefer-rest-params}
  // 在es5中可能需要arguments来处理不定长参数，es6中可以用 rest参数 来处理，因此建议使用
  "prefer-rest-params": "error",
  // require spread operators instead of .apply()
  // 要求使用扩展运算符而非 .apply()
  // {@link https://eslint.org/docs/rules/prefer-spread}
  // {@link http://eslint.cn/docs/rules/prefer-spread}
  // [fixed]
  // ruiguo: apply不仅仅可以展开参数，还可以指定this，
  // ruiguo: 看源码发现，这个规则，会动态检查this的使用，因此apply不会被完全屏蔽
  "prefer-spread": "error", // "off",
  // require template literals instead of string concatenation
  // 要求使用模板字面量而非字符串连接
  // {@link https://eslint.org/docs/rules/prefer-template}
  // {@link http://eslint.cn/docs/rules/prefer-template}
  // [fixed]
  // ruiguo: 在一些遍历操作中，可能需要动态拼接模板
  "prefer-template": "error",
  // require generator functions to contain yield
  // 要求 generator 函数内有 yield
  // {@link https://eslint.org/docs/rules/require-yield}
  // {@link http://eslint.cn/docs/rules/require-yield}
  // [recommended]
  "require-yield": "error",
  // enforce spacing between rest and spread operators and their expressions
  // 在rest参数 和 扩展操作符 及其表达式之间加强间隔
  // {@link https://eslint.org/docs/rules/rest-spread-spacing}
  // {@link http://eslint.cn/docs/rules/rest-spread-spacing}
  // [fixed]
  "rest-spread-spacing": ["error", "always"],
  // enforce sorted import declarations within modules
  // 强制模块内的 import 排序（风格）
  // {@link https://eslint.org/docs/rules/sort-imports}
  // {@link http://eslint.cn/docs/rules/sort-imports}
  // [fixed]
  // ruiguo: 强制置顶声明可以，但是排序可以关闭
  "sort-imports": "off",
  // require symbol descriptions
  // {@link https://eslint.org/docs/rules/symbol-description}
  // {@link http://eslint.cn/docs/rules/symbol-description}
  "symbol-description": "error",
  // require or disallow spacing around embedded expressions of template strings
  // 要求或禁止模板字符串中的嵌入表达式周围空格的使用（风格）
  // {@link https://eslint.org/docs/rules/template-curly-spacing}
  // {@link http://eslint.cn/docs/rules/template-curly-spacing}
  // [fixed]
  // ruiguo: 花括号中可能出现表达式，建议关闭
  "template-curly-spacing": ["error", "never"],
  // require or disallow spacing around the * in yield* expressions
  // 强制在 yield* 表达式中 * 周围使用空格
  // {@link https://eslint.org/docs/rules/yield-star-spacing}
  // {@link http://eslint.cn/docs/rules/yield-star-spacing}
  // [fixed]
  // ruiguo: 对这个属性了解不多，可以大家一起看看
  "yield-star-spacing": ["error", {"before": true, "after": false}],
}