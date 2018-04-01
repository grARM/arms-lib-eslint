// Possible Errors, 34 rules
// These rules relate to possible syntax or logic errors in JavaScript code:
module.exports = {
  // enforce “for” loop update clause moving the counter in the right direction.
  // {@link https://eslint.org/docs/rules/for-direction}
  // {@link http://eslint.cn/docs/rules/for-direction}
  "for-direction": ["error"],
  // enforce return statements in getters
  // {@link https://eslint.org/docs/rules/getter-return}
  // {@link http://eslint.cn/docs/rules/getter-return}
  "getter-return": ["error", { allowImplicit: true }],
  // disallow await inside of loops
  // {@link https://eslint.org/docs/rules/no-await-in-loop}
  // {@link http://eslint.cn/docs/rules/no-await-in-loop}
  // daringuo: 循环await的情况需使用Promise.all代替
  "no-await-in-loop": ["error"],
  // disallow comparing against -0
  // {@link https://eslint.org/docs/rules/no-compare-neg-zero}
  // {@link http://eslint.cn/docs/rules/no-compare-neg-zero}
  // [recommended]
  "no-compare-neg-zero": ["error"],
  // disallow assignment operators in conditional expressions
  // 禁止条件表达式中出现赋值操作符
  // {@link https://eslint.org/docs/rules/no-cond-assign}
  // {@link http://eslint.cn/docs/rules/no-cond-assign}
  // [recommended]
  // daringuo: 任何情况下，条件表达式不应出现赋值操作
  "no-cond-assign": ["error", "always"],
  // disallow the use of console
  // 禁用 console
  // {@link https://eslint.org/docs/rules/no-console}
  // {@link http://eslint.cn/docs/rules/no-console}
  // [recommended]
  "no-console": "error",
  // disallow constant expressions in conditions
  // 禁止在条件中使用常量表达式
  // {@link https://eslint.org/docs/rules/no-constant-condition}
  // {@link http://eslint.cn/docs/rules/no-constant-condition}
  // [recommended]
  // daringuo: 考虑到会有while (true)的情况存在，可允许在循环中使用
  "no-constant-condition": ["error", { "checkLoops": true }],
  // disallow control characters in regular expressions
  // 禁止在正则表达式中使用控制字符
  // {@link https://eslint.org/docs/rules/no-control-regex}
  // {@link http://eslint.cn/docs/rules/no-control-regex}
  // [recommended]
  // daringuo: 正则表达式不受限制
  "no-control-regex": "off",
  // disallow the use of debugger
  // 禁用 debugger
  // {@link https://eslint.org/docs/rules/no-debugger}
  // {@link http://eslint.cn/docs/rules/no-debugger}
  // [recommended, fixed]
  "no-debugger": "error",
  // disallow duplicate arguments in function definitions
  // 禁止 function 定义中出现重名参数
  // {@link https://eslint.org/docs/rules/no-dupe-args}
  // {@link http://eslint.cn/docs/rules/no-dupe-args}
  // [recommended]
  "no-dupe-args": "error",
  // disallow duplicate keys in object literals
  // 禁止对象字面量中出现重复的 key
  // {@link https://eslint.org/docs/rules/no-dupe-keys}
  // {@link http://eslint.cn/docs/rules/no-dupe-keys}
  // [recommended]
  "no-dupe-keys": "error",
  // disallow duplicate case labels
  // 禁止出现重复的 case 标签
  // {@link https://eslint.org/docs/rules/no-duplicate-case}
  // {@link http://eslint.cn/docs/rules/no-duplicate-case}
  // [recommended]
  "no-duplicate-case": "error",
  // disallow empty block statements
  // 禁止出现空语句块
  // {@link https://eslint.org/docs/rules/no-empty}
  // {@link http://eslint.cn/docs/rules/no-empty}
  // [recommended]
  "no-empty": ["error", { "allowEmptyCatch": true }],
  // disallow empty character classes in regular expressions
  // 禁止在正则表达式中使用空字符集
  // {@link https://eslint.org/docs/rules/no-empty-character-class}
  // {@link http://eslint.cn/docs/rules/no-empty-character-class}
  // [recommended]
  "no-empty-character-class": "error",
  // disallow reassigning exceptions in catch clauses
  // 禁止对 catch 子句的参数重新赋值
  // {@link https://eslint.org/docs/rules/no-ex-assign}
  // {@link http://eslint.cn/docs/rules/no-ex-assign}
  // [recommended]
  "no-ex-assign": "error",
  // disallow unnecessary boolean casts
  // 禁止不必要的布尔转换
  // {@link https://eslint.org/docs/rules/no-extra-boolean-cast}
  // {@link http://eslint.cn/docs/rules/no-extra-boolean-cast}
  // [recommended, fixed]
  "no-extra-boolean-cast": "error",
  // disallow unnecessary parentheses
  // 禁止不必要的括号
  // {@link https://eslint.org/docs/rules/no-extra-parens}
  // {@link http://eslint.cn/docs/rules/no-extra-parens}
  // [fixed]
  "no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line" }],
  // disallow unnecessary semicolons
  // 禁止不必要的分号
  // {@link https://eslint.org/docs/rules/no-extra-semi}
  // {@link http://eslint.cn/docs/rules/no-extra-semi}
  // [recommended, fixed]
  "no-extra-semi": "error",
  // disallow reassigning function declarations
  // 禁止对 function 声明重新赋值
  // {@link https://eslint.org/docs/rules/no-func-assign}
  // {@link http://eslint.cn/docs/rules/no-func-assign}
  // [recommended]
  "no-func-assign": "error",
  // disallow variable or function declarations in nested blocks
  // 禁止在嵌套的块中出现变量声明或 function 声明
  // {@link https://eslint.org/docs/rules/no-inner-declarations}
  // {@link http://eslint.cn/docs/rules/no-inner-declarations}
  // [recommended]
  "no-inner-declarations": "error",
  // disallow invalid regular expression strings in RegExp constructors
  // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
  // {@link https://eslint.org/docs/rules/no-invalid-regexp}
  // {@link http://eslint.cn/docs/rules/no-invalid-regexp}
  // [recommended]
  "no-invalid-regexp": "error",
  // disallow irregular whitespace outside of strings and comments
  // 禁止在字符串和注释之外不规则的空白
  // {@link https://eslint.org/docs/rules/no-irregular-whitespace}
  // {@link http://eslint.cn/docs/rules/no-irregular-whitespace}
  // [recommended]
  "no-irregular-whitespace": ["error", { "skipTemplates": true }],
  // disallow calling global object properties as functions
  // 禁止把全局对象作为函数调用
  // {@link https://eslint.org/docs/rules/no-obj-calls}
  // {@link http://eslint.cn/docs/rules/no-obj-calls}
  // [recommended]
  "no-obj-calls": "error",
  // disallow calling some Object.prototype methods directly on objects
  // 禁止直接调用 Object.prototypes 的内置属性
  // {@link https://eslint.org/docs/rules/no-prototype-builtins}
  // {@link http://eslint.cn/docs/rules/no-prototype-builtins}
  // daringuo: 考虑到基本不会有覆盖Object.prototype的情况，这个规则可以关闭
  "no-prototype-builtins": "off",
  // disallow multiple spaces in regular expressions
  // 禁止正则表达式字面量中出现多个空格
  // {@link https://eslint.org/docs/rules/no-regex-spaces}
  // {@link http://eslint.cn/docs/rules/no-regex-spaces}
  // [recommended, fixed]
  "no-regex-spaces": "error",
  // disallow sparse arrays
  // 禁用稀疏数组
  // {@link https://eslint.org/docs/rules/no-sparse-arrays}
  // {@link http://eslint.cn/docs/rules/no-sparse-arrays}
  // [recommended]
  // daringuo: 使用稀疏数组的场景特别少
  "no-sparse-arrays": "error",
  // disallow template literal placeholder syntax in regular strings
  // {@link https://eslint.org/docs/rules/no-template-curly-in-string}
  // {@link http://eslint.cn/docs/rules/no-template-curly-in-string}
  // daringuo: 考虑到可能会有页面需要使用模板库，这个规则先禁用
  "no-template-curly-in-string": "off",
  // disallow confusing multiline expressions
  // 禁止出现令人困惑的多行表达式
  // {@link https://eslint.org/docs/rules/no-unexpected-multiline}
  // {@link http://eslint.cn/docs/rules/no-unexpected-multiline}
  // [recommended]
  "no-unexpected-multiline": "error",
  // disallow unreachable code after return, throw, continue, and break statements
  // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
  // {@link https://eslint.org/docs/rules/no-unreachable}
  // {@link http://eslint.cn/docs/rules/no-unreachable}
  // [recommended]
  "no-unreachable": "error",
  // disallow control flow statements in finally blocks
  // 禁止在 finally 语句块中出现控制流语句
  // {@link https://eslint.org/docs/rules/no-unsafe-finally}
  // {@link http://eslint.cn/docs/rules/no-unsafe-finally}
  // [recommended]
  "no-unsafe-finally": "error",
  // disallow negating the left operand of relational operators
  // {@link https://eslint.org/docs/rules/no-unsafe-negation}
  // {@link http://eslint.cn/docs/rules/no-unsafe-negation}
  // [recommended, fixed]
  "no-unsafe-negation": "error",
  // require calls to isNaN() when checking for NaN
  // 要求使用 isNaN() 检查 NaN
  // {@link https://eslint.org/docs/rules/use-isnan}
  // {@link http://eslint.cn/docs/rules/use-isnan}
  // [recommended]
  "use-isnan": "error",
  // enforce valid JSDoc comments
  // 强制使用有效的 JSDoc 注释
  // {@link https://eslint.org/docs/rules/valid-jsdoc}
  // {@link http://eslint.cn/docs/rules/valid-jsdoc}
  // [fixed]
  // daringuo: 这个规则需要再讨论，推荐使用开源社区统一规范
  "valid-jsdoc": ["warn", { "prefer": { "arg": "param", "argument": "param", "class": "constructor", "return": "returns", "virtual": "abstract" } }],
  // enforce comparing typeof expressions against valid strings
  // 强制 typeof 表达式与有效的字符串进行比较
  // {@link https://eslint.org/docs/rules/valid-typeof}
  // {@link http://eslint.cn/docs/rules/valid-typeof}
  // [recommended]
  "valid-typeof": "error",
}