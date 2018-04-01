// Best Practices, 70 rules
// These rules relate to better ways of doing things to help you avoid problems:
module.exports = {
  // enforce getter and setter pairs in objects
  // 强制 getter 和 setter 在对象中成对出现
  // {@link https://eslint.org/docs/rules/accessor-pairs}
  // {@link http://eslint.cn/docs/rules/accessor-pairs}
  "accessor-pairs": "error",
  // enforce return statements in callbacks of array methods
  // 强制数组方法的回调函数中有 return 语句
  // {@link https://eslint.org/docs/rules/array-callback-return}
  // {@link http://eslint.cn/docs/rules/array-callback-return}
  "array-callback-return": "error",
  // enforce the use of variables within the scope they are defined
  // 强制把变量的使用限制在其定义的作用域范围内
  // {@link https://eslint.org/docs/rules/block-scoped-var}
  // {@link http://eslint.cn/docs/rules/block-scoped-var}
  "block-scoped-var": "error",
  // enforce that class methods utilize this
  // 强制类方法使用this
  // {@link https://eslint.org/docs/rules/class-methods-use-this}
  // {@link http://eslint.cn/docs/rules/class-methods-use-this}
  "class-methods-use-this": "error",
  // enforce a maximum cyclomatic complexity allowed in a program
  // 指定程序中允许的最大环路复杂度
  // {@link https://eslint.org/docs/rules/complexity}
  // {@link http://eslint.cn/docs/rules/complexity}
  "complexity": "error",
  // require return statements to either always or never specify values
  // 要求 return 语句要么总是指定返回的值，要么不指定
  // {@link https://eslint.org/docs/rules/consistent-return}
  // {@link http://eslint.cn/docs/rules/consistent-return}
  "consistent-return": "error",
  // enforce consistent brace style for all control statements
  // 强制所有控制语句使用一致的括号风格
  // {@link https://eslint.org/docs/rules/curly}
  // {@link http://eslint.cn/docs/rules/curly}
  // [fixed]
  "curly": "error",
  // require default cases in switch statements
  // 要求 switch 语句中有 default 分支
  // {@link https://eslint.org/docs/rules/default-case}
  // {@link http://eslint.cn/docs/rules/default-case}
  "default-case": "error",
  // enforce consistent newlines before and after dots
  // 强制在点号之前和之后一致的换行
  // {@link https://eslint.org/docs/rules/dot-location}
  // {@link http://eslint.cn/docs/rules/dot-location}
  // [fixed]
  "dot-location": "off",
  // enforce dot notation whenever possible
  // 强制尽可能地使用点号
  // {@link https://eslint.org/docs/rules/dot-notation}
  // {@link http://eslint.cn/docs/rules/dot-notation}
  // [fixed]
  "dot-notation": "error",
  // require the use of === and !==
  // 要求使用 === 和 !==
  // {@link https://eslint.org/docs/rules/eqeqeq}
  // {@link http://eslint.cn/docs/rules/eqeqeq}
  // [fixed]
  "eqeqeq": "error",
  // require for-in loops to include an if statement
  // 要求 for-in 循环中有一个 if 语句
  // {@link https://eslint.org/docs/rules/guard-for-in}
  // {@link http://eslint.cn/docs/rules/guard-for-in}
  "guard-for-in": "error",
  // disallow the use of alert, confirm, and prompt
  // 禁用 alert、confirm 和 prompt
  // {@link https://eslint.org/docs/rules/no-alert}
  // {@link http://eslint.cn/docs/rules/no-alert}
  // haininghang: 建议警告，内部系统可能会用到
  "no-alert": "warn",
  // disallow the use of arguments.caller or arguments.callee
  // 禁用 arguments.caller 或 arguments.callee
  // {@link https://eslint.org/docs/rules/no-caller}
  // {@link http://eslint.cn/docs/rules/no-caller}
  "no-caller": "warn",
  // disallow lexical declarations in case clauses
  // 不允许在 case 子句中使用词法声明
  // {@link https://eslint.org/docs/rules/no-case-declarations}
  // {@link http://eslint.cn/docs/rules/no-case-declarations}
  // [recommended]
  "no-case-declarations": "error",
  // disallow division operators explicitly at the beginning of regular expressions
  // 禁止除法操作符显式的出现在正则表达式开始的位置
  // {@link https://eslint.org/docs/rules/no-div-regex}
  // {@link http://eslint.cn/docs/rules/no-div-regex}
  "no-div-regex": "error",
  // disallow else blocks after return statements in if statements
  // 禁止 if 语句中 return 语句之后有 else 块
  // {@link https://eslint.org/docs/rules/no-else-return}
  // {@link http://eslint.cn/docs/rules/no-else-return}
  // [fixed]
  "no-else-return": "error",
  // disallow empty functions
  // 禁止出现空函数
  // {@link https://eslint.org/docs/rules/no-empty-function}
  // {@link http://eslint.cn/docs/rules/no-empty-function}
  "no-empty-function": "error",
  // disallow empty destructuring patterns
  // 禁止使用空解构模式
  // {@link https://eslint.org/docs/rules/no-empty-pattern}
  // {@link http://eslint.cn/docs/rules/no-empty-pattern}
  // [recommended]
  "no-empty-pattern": "error",
  // disallow null comparisons without type-checking operators
  // 禁止在没有类型检查操作符的情况下与 null 进行比较
  // {@link https://eslint.org/docs/rules/no-eq-null}
  // {@link http://eslint.cn/docs/rules/no-eq-null}
  "no-eq-null": "error",
  // disallow the use of eval()
  // 禁用 eval()
  // {@link https://eslint.org/docs/rules/no-eval}
  // {@link http://eslint.cn/docs/rules/no-eval}
  "no-eval": "error",
  // disallow extending native types
  // 禁止扩展原生类型
  // {@link https://eslint.org/docs/rules/no-extend-native}
  // {@link http://eslint.cn/docs/rules/no-extend-native}
  "no-extend-native": "error",
  // disallow unnecessary calls to .bind()
  // 禁止不必要的 .bind() 调用
  // {@link https://eslint.org/docs/rules/no-extra-bind}
  // {@link http://eslint.cn/docs/rules/no-extra-bind}
  // [fixed]
  "no-extra-bind": "error",
  // disallow unnecessary labels
  // 禁用不必要的标签
  // {@link https://eslint.org/docs/rules/no-extra-label}
  // {@link http://eslint.cn/docs/rules/no-extra-label}
  // [fixed]
  "no-extra-label": "error",
  // disallow fallthrough of case statements
  // 禁止 case 语句落空
  // {@link https://eslint.org/docs/rules/no-fallthrough}
  // {@link http://eslint.cn/docs/rules/no-fallthrough}
  // [recommended]
  "no-fallthrough": "error",
  // disallow leading or trailing decimal points in numeric literals
  // 禁止数字字面量中使用前导和末尾小数点
  // {@link https://eslint.org/docs/rules/no-floating-decimal}
  // {@link http://eslint.cn/docs/rules/no-floating-decimal}
  // [fixed]
  "no-floating-decimal": "error",
  // disallow assignments to native objects or read-only global variables
  // {@link https://eslint.org/docs/rules/no-global-assign}
  // {@link http://eslint.cn/docs/rules/no-global-assign}
  // [recommended]
  "no-global-assign": "error",
  // disallow shorthand type conversions
  // 禁止使用短符号进行类型转换
  // {@link https://eslint.org/docs/rules/no-implicit-coercion}
  // {@link http://eslint.cn/docs/rules/no-implicit-coercion}
  // [fixed]
  // haininghang: 会上争议较大，先off
  "no-implicit-coercion": "off",
  // disallow variable and function declarations in the global scope
  // 禁止在全局范围内使用变量声明和 function 声明
  // {@link https://eslint.org/docs/rules/no-implicit-globals}
  // {@link http://eslint.cn/docs/rules/no-implicit-globals}
  "no-implicit-globals": "error",
  // disallow the use of eval()-like methods
  // 禁止使用类似 eval() 的方法
  // {@link https://eslint.org/docs/rules/no-implied-eval}
  // {@link http://eslint.cn/docs/rules/no-implied-eval}
  "no-implied-eval": "error",
  // disallow this keywords outside of classes or class-like objects
  // 禁止 this 关键字出现在类和类对象之外
  // {@link https://eslint.org/docs/rules/no-invalid-this}
  // {@link http://eslint.cn/docs/rules/no-invalid-this}
  "no-invalid-this": "warn",
  // disallow the use of the __iterator__ property
  // 禁用 __iterator__ 属性
  // {@link https://eslint.org/docs/rules/no-iterator}
  // {@link http://eslint.cn/docs/rules/no-iterator}
  "no-iterator": "error",
  // disallow labeled statements
  // 禁用标签语句
  // {@link https://eslint.org/docs/rules/no-labels}
  // {@link http://eslint.cn/docs/rules/no-labels}
  "no-labels": "warn",
  // disallow unnecessary nested blocks
  // 禁用不必要的嵌套块
  // {@link https://eslint.org/docs/rules/no-lone-blocks}
  // {@link http://eslint.cn/docs/rules/no-lone-blocks}
  "no-lone-blocks": "error",
  // disallow function declarations and expressions inside loop statements
  // 禁止在循环中出现 function 声明和表达式
  // {@link https://eslint.org/docs/rules/no-loop-func}
  // {@link http://eslint.cn/docs/rules/no-loop-func}
  "no-loop-func": "error",
  // disallow magic numbers
  // 禁用魔术数字
  // {@link https://eslint.org/docs/rules/no-magic-numbers}
  // {@link http://eslint.cn/docs/rules/no-magic-numbers}
  "no-magic-numbers": "off",
  // disallow multiple spaces
  // 禁止使用多个空格
  // {@link https://eslint.org/docs/rules/no-multi-spaces}
  // {@link http://eslint.cn/docs/rules/no-multi-spaces}
  // [fixed]
  "no-multi-spaces": "error",
  // disallow multiline strings
  // 禁止使用多行字符串
  // {@link https://eslint.org/docs/rules/no-multi-str}
  // {@link http://eslint.cn/docs/rules/no-multi-str}
  "no-multi-str": "error",
  // disallow new operators outside of assignments or comparisons
  // {@link https://eslint.org/docs/rules/no-new}
  // {@link http://eslint.cn/docs/rules/no-new}
  "no-new": "error",
  // disallow new operators with the Function object
  // 禁止对 Function 对象使用 new 操作符
  // {@link https://eslint.org/docs/rules/no-new-func}
  // {@link http://eslint.cn/docs/rules/no-new-func}
  "no-new-func": "error",
  // disallow new operators with the String, Number, and Boolean objects
  // 禁止对 String，Number 和 Boolean 使用 new 操作符
  // {@link https://eslint.org/docs/rules/no-new-wrappers}
  // {@link http://eslint.cn/docs/rules/no-new-wrappers}
  "no-new-wrappers": "error",
  // disallow octal literals
  // 禁用八进制字面量
  // {@link https://eslint.org/docs/rules/no-octal}
  // {@link http://eslint.cn/docs/rules/no-octal}
  // [recommended]
  "no-octal": "error",
  // disallow octal escape sequences in string literals
  // 禁止在字符串中使用八进制转义序列
  // {@link https://eslint.org/docs/rules/no-octal-escape}
  // {@link http://eslint.cn/docs/rules/no-octal-escape}
  "no-octal-escape": "error",
  // disallow reassigning function parameters
  // 禁止对 function 的参数进行重新赋值
  // {@link https://eslint.org/docs/rules/no-param-reassign}
  // {@link http://eslint.cn/docs/rules/no-param-reassign}
  "no-param-reassign": "off",
  // disallow the use of the __proto__ property
  // 禁用 __proto__ 属性
  // {@link https://eslint.org/docs/rules/no-proto}
  // {@link http://eslint.cn/docs/rules/no-proto}
  "no-proto": "error",
  // disallow variable redeclaration
  // 禁止多次声明同一变量
  // {@link https://eslint.org/docs/rules/no-redeclare}
  // {@link http://eslint.cn/docs/rules/no-redeclare}
  // [recommended]
  "no-redeclare": "error",
  // disallow certain properties on certain objects
  // {@link https://eslint.org/docs/rules/no-restricted-properties}
  // {@link http://eslint.cn/docs/rules/no-restricted-properties}
  "no-restricted-properties": "off",
  // disallow assignment operators in return statements
  // 禁止在 return 语句中使用赋值语句
  // {@link https://eslint.org/docs/rules/no-return-assign}
  // {@link http://eslint.cn/docs/rules/no-return-assign}
  "no-return-assign": ["error", "always"],
  // disallow unnecessary return await
  // {@link https://eslint.org/docs/rules/no-return-await}
  // {@link http://eslint.cn/docs/rules/no-return-await}
  "no-return-await": "error",
  // disallow javascript: urls
  // 禁止使用 javascript: url
  // {@link https://eslint.org/docs/rules/no-script-url}
  // {@link http://eslint.cn/docs/rules/no-script-url}
  "no-script-url": "error",
  // disallow assignments where both sides are exactly the same
  // 禁止自我赋值
  // {@link https://eslint.org/docs/rules/no-self-assign}
  // {@link http://eslint.cn/docs/rules/no-self-assign}
  // [recommended]
  "no-self-assign": "error",
  // disallow comparisons where both sides are exactly the same
  // 禁止自身比较
  // {@link https://eslint.org/docs/rules/no-self-compare}
  // {@link http://eslint.cn/docs/rules/no-self-compare}
  "no-self-compare": "error",
  // disallow comma operators
  // 禁用逗号操作符
  // {@link https://eslint.org/docs/rules/no-sequences}
  // {@link http://eslint.cn/docs/rules/no-sequences}
  "no-sequences": "error",
  // disallow throwing literals as exceptions
  // 禁止抛出异常字面量
  // {@link https://eslint.org/docs/rules/no-throw-literal}
  // {@link http://eslint.cn/docs/rules/no-throw-literal}
  "no-throw-literal": "error",
  // disallow unmodified loop conditions
  // 禁用一成不变的循环条件
  // {@link https://eslint.org/docs/rules/no-unmodified-loop-condition}
  // {@link http://eslint.cn/docs/rules/no-unmodified-loop-condition}
  "no-unmodified-loop-condition": "error",
  // disallow unused expressions
  // 禁止出现未使用过的表达式
  // {@link https://eslint.org/docs/rules/no-unused-expressions}
  // {@link http://eslint.cn/docs/rules/no-unused-expressions}
  "no-unused-expressions": "error",
  // disallow unused labels
  // 禁用出现未使用过的标
  // {@link https://eslint.org/docs/rules/no-unused-labels}
  // {@link http://eslint.cn/docs/rules/no-unused-labels}
  // [recommended, fixed]
  "no-unused-labels": "error",
  // disallow unnecessary calls to .call() and .apply()
  // 禁止不必要的 .call() 和 .apply()
  // {@link https://eslint.org/docs/rules/no-useless-call}
  // {@link http://eslint.cn/docs/rules/no-useless-call}
  "no-useless-call": "error",
  // disallow unnecessary concatenation of literals or template literals
  // 禁止不必要的字符串字面量或模板字面量的连接
  // {@link https://eslint.org/docs/rules/no-useless-concat}
  // {@link http://eslint.cn/docs/rules/no-useless-concat}
  "no-useless-concat": "error",
  // disallow unnecessary escape characters
  // 禁用不必要的转义字符
  // {@link https://eslint.org/docs/rules/no-useless-escape}
  // {@link http://eslint.cn/docs/rules/no-useless-escape}
  // [recommended]
  "no-useless-escape": "error",
  // disallow redundant return statements
  // {@link https://eslint.org/docs/rules/no-useless-return}
  // {@link http://eslint.cn/docs/rules/no-useless-return}
  // [fixed]
  "no-useless-return": "error",
  // disallow void operators
  // 禁用 void 操作符
  // {@link https://eslint.org/docs/rules/no-void}
  // {@link http://eslint.cn/docs/rules/no-void}
  "no-void": "error",
  // disallow specified warning terms in comments
  // 禁止在注释中使用特定的警告术语
  // {@link https://eslint.org/docs/rules/no-warning-comments}
  // {@link http://eslint.cn/docs/rules/no-warning-comments}
  "no-warning-comments": "off",
  // disallow with statements
  // 禁用 with 语句
  // {@link https://eslint.org/docs/rules/no-with}
  // {@link http://eslint.cn/docs/rules/no-with}
  "no-with": "error",
  // require using Error objects as Promise rejection reasons
  // {@link https://eslint.org/docs/rules/prefer-promise-reject-errors}
  // {@link http://eslint.cn/docs/rules/prefer-promise-reject-errors}
  "prefer-promise-reject-errors": "error",
  // enforce the consistent use of the radix argument when using parseInt()
  // 强制在parseInt()使用基数参数
  // {@link https://eslint.org/docs/rules/radix}
  // {@link http://eslint.cn/docs/rules/radix}
  "radix": "error",
  // disallow async functions which have no await expression
  // {@link https://eslint.org/docs/rules/require-await}
  // {@link http://eslint.cn/docs/rules/require-await}
  "require-await": "error",
  // require var declarations be placed at the top of their containing scope
  // 要求所有的 var 声明出现在它们所在的作用域顶部
  // {@link https://eslint.org/docs/rules/vars-on-top}
  // {@link http://eslint.cn/docs/rules/vars-on-top}
  "vars-on-top": "warn",
  // require parentheses around immediate function invocations
  // 要求 IIFE 使用括号括起来
  // {@link https://eslint.org/docs/rules/wrap-iife}
  // {@link http://eslint.cn/docs/rules/wrap-iife}
  // [fixed]
  "wrap-iife": ["error", "inside"],
  // require or disallow “Yoda” conditions
  // 要求或禁止 “Yoda” 条件
  // {@link https://eslint.org/docs/rules/yoda}
  // {@link http://eslint.cn/docs/rules/yoda}
  // [fixed]
  "yoda": "off"
}