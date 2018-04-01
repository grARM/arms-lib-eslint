// Stylistic Issues, 90 rules
// These rules relate to style guidelines, and are therefore quite subjective:
module.exports = {
  // enforce linebreaks after opening and before closing array brackets
  // 在打开和关闭数组括号之前强制换行符（array-bracket-newline）
  // {@link https://eslint.org/docs/rules/array-bracket-newline}
  // {@link http://eslint.cn/docs/rules/array-bracket-newline}
  // [fixed]
  "array-bracket-newline": "off",
  // enforce consistent spacing inside array brackets
  // 强制数组方括号中使用一致的空格
  // {@link https://eslint.org/docs/rules/array-bracket-spacing}
  // {@link http://eslint.cn/docs/rules/array-bracket-spacing}
  // [fixed]
  "array-bracket-spacing": ["error", "never"],
  // enforce line breaks after each array element
  // {@link https://eslint.org/docs/rules/array-element-newline}
  // {@link http://eslint.cn/docs/rules/array-element-newline}
  // [fixed]
  "array-element-newline": "off",
  // disallow or enforce spaces inside of blocks after opening block and before closing block
  // 强制在单行代码块中使用一致的空格
  // {@link https://eslint.org/docs/rules/block-spacing}
  // {@link http://eslint.cn/docs/rules/block-spacing}
  // [fixed]
  "block-spacing": ["error", "never"],
  // enforce consistent brace style for blocks
  // 强制在代码块中使用一致的大括号风格
  // {@link https://eslint.org/docs/rules/brace-style}
  // {@link http://eslint.cn/docs/rules/brace-style}
  // [fixed]
  "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
  // enforce camelcase naming convention
  // 强制使用骆驼拼写法命名约定
  // {@link https://eslint.org/docs/rules/camelcase}
  // {@link http://eslint.cn/docs/rules/camelcase}
  // ruiguo: 这里还要讨论一下，有一些框架的风格推荐略有不同（具体再覆盖？）
  "camelcase": "error",
  // enforce or disallow capitalization of the first letter of a comment
  // 强制或不允许注释的第一个字母大写（大写的评论）
  // {@link https://eslint.org/docs/rules/capitalized-comments}
  // {@link http://eslint.cn/docs/rules/capitalized-comments}
  // [fixed]
  "capitalized-comments": "off",
  // require or disallow trailing commas
  // 要求或禁止末尾逗号
  // {@link https://eslint.org/docs/rules/comma-dangle}
  // {@link http://eslint.cn/docs/rules/comma-dangle}
  // [fixed]
  // ruiguo: IE8
  "comma-dangle": ["error", "never"],
  // enforce consistent spacing before and after commas
  // 强制在逗号前后使用一致的空格
  // {@link https://eslint.org/docs/rules/comma-spacing}
  // {@link http://eslint.cn/docs/rules/comma-spacing}
  // [fixed]
  "comma-spacing": ["error", {"before": false, "after": true}],
  // enforce consistent comma style
  // 强制使用一致的逗号风格
  // {@link https://eslint.org/docs/rules/comma-style}
  // {@link http://eslint.cn/docs/rules/comma-style}
  // [fixed]
  "comma-style": "error",
  // enforce consistent spacing inside computed property brackets
  // 强制在计算的属性的方括号中使用一致的空格
  // {@link https://eslint.org/docs/rules/computed-property-spacing}
  // {@link http://eslint.cn/docs/rules/computed-property-spacing}
  // [fixed]
  "computed-property-spacing": "error",
  // enforce consistent naming when capturing the current execution context
  // 当获取当前执行环境的上下文时，强制使用一致的命名
  // {@link https://eslint.org/docs/rules/consistent-this}
  // {@link http://eslint.cn/docs/rules/consistent-this}
  "consistent-this": ["error", "self"],
  // require or disallow newline at the end of files
  // 要求或禁止文件末尾存在空行
  // {@link https://eslint.org/docs/rules/eol-last}
  // {@link http://eslint.cn/docs/rules/eol-last}
  // [fixed]
  "eol-last": "error",
  // require or disallow spacing between function identifiers and their invocations
  // 调用函数与括号之间的空格（默认没有）
  // {@link https://eslint.org/docs/rules/func-call-spacing}
  // {@link http://eslint.cn/docs/rules/func-call-spacing}
  // [fixed]
  "func-call-spacing": "error",
  // require function names to match the name of the variable or property to which they are assigned
  // 要求函数名与分配给它们的变量或属性的名称相匹配
  // {@link https://eslint.org/docs/rules/func-name-matching}
  // {@link http://eslint.cn/docs/rules/func-name-matching}
  "func-name-matching": "off",
  // require or disallow named function expressions
  // 要求或禁止使用命名的 function 表达式
  // {@link https://eslint.org/docs/rules/func-names}
  // {@link http://eslint.cn/docs/rules/func-names}
  "func-names": ["error", "never"],
  // enforce the consistent use of either function declarations or expressions
  // 强制一致地使用 function 声明或表达式
  // {@link https://eslint.org/docs/rules/func-style}
  // {@link http://eslint.cn/docs/rules/func-style}
  "func-style": "off",
  // enforce consistent line breaks inside function parentheses
  // 在函数括号内强制执行一致的换行。
  // {@link https://eslint.org/docs/rules/function-paren-newline}
  // {@link http://eslint.cn/docs/rules/function-paren-newline}
  // [fixed]
  "function-paren-newline": "off",
  // disallow specified identifiers
  // 禁用指定的标识符
  // {@link https://eslint.org/docs/rules/id-blacklist}
  // {@link http://eslint.cn/docs/rules/id-blacklist}
  "id-blacklist": "off",
  // enforce minimum and maximum identifier lengths
  // 强制标识符的最小和最大长度
  // {@link https://eslint.org/docs/rules/id-length}
  // {@link http://eslint.cn/docs/rules/id-length}
  "id-length": "off",
  // require identifiers to match a specified regular expression
  // 要求标识符匹配一个指定的正则表达式
  // {@link https://eslint.org/docs/rules/id-match}
  // {@link http://eslint.cn/docs/rules/id-match}
  "id-match": "off",
  // enforce the location of arrow function bodies
  // 执行箭头函数体的位置(是否换行)
  // {@link https://eslint.org/docs/rules/implicit-arrow-linebreak}
  // {@link http://eslint.cn/docs/rules/implicit-arrow-linebreak}
  // [fixed]
  "implicit-arrow-linebreak": "off",
  // enforce consistent indentation
  // 强制使用一致的缩进
  // {@link https://eslint.org/docs/rules/indent}
  // {@link http://eslint.cn/docs/rules/indent}
  // [fixed]
  "indent": ["error", 2],
  // enforce the consistent use of either double or single quotes in JSX attributes
  // 强制在 JSX 属性中一致地使用双引号或单引号
  // {@link https://eslint.org/docs/rules/jsx-quotes}
  // {@link http://eslint.cn/docs/rules/jsx-quotes}
  // [fixed]
  "jsx-quotes": ["error", "prefer-double"],
  // enforce consistent spacing between keys and values in object literal properties
  // 强制在对象字面量的属性中键和值之间使用一致的间距
  // {@link https://eslint.org/docs/rules/key-spacing}
  // {@link http://eslint.cn/docs/rules/key-spacing}
  // [fixed]
  "key-spacing": "error",
  // enforce consistent spacing before and after keywords
  // 强制在关键字前后使用一致的空格
  // {@link https://eslint.org/docs/rules/keyword-spacing}
  // {@link http://eslint.cn/docs/rules/keyword-spacing}
  // [fixed]
  "keyword-spacing": "error",
  // enforce position of line comments
  // 执行行注释的位置
  // {@link https://eslint.org/docs/rules/line-comment-position}
  // {@link http://eslint.cn/docs/rules/line-comment-position}
  // ruiguo：考虑到代码的执行过程off，如果想强制在上线前规范建议开启默认above
  "line-comment-position": "error",
  // enforce consistent linebreak style
  // 强制使用一致的换行风格
  // {@link https://eslint.org/docs/rules/linebreak-style}
  // {@link http://eslint.cn/docs/rules/linebreak-style}
  // [fixed]
  // ruiguo： git会处理一次，建议关闭，详情见文档
  "linebreak-style": "off",
  // require empty lines around comments
  // 要求在注释周围有空行
  // {@link https://eslint.org/docs/rules/lines-around-comment}
  // {@link http://eslint.cn/docs/rules/lines-around-comment}
  // [fixed]
  "lines-around-comment": "error",
  // require or disallow an empty line between class members
  // 要求或不允许类成员之间的空行（类之间的成员）
  // {@link https://eslint.org/docs/rules/lines-between-class-members}
  // {@link http://eslint.cn/docs/rules/lines-between-class-members}
  // [fixed]
  "lines-between-class-members": "error",
  // enforce a maximum depth that blocks can be nested
  // 强制可嵌套的块的最大深度
  // {@link https://eslint.org/docs/rules/max-depth}
  // {@link http://eslint.cn/docs/rules/max-depth}
  // ruiguo: 默认为 4
  "max-depth": ["warn", 6],
  // enforce a maximum line length
  // 强制一行的最大长度
  // {@link https://eslint.org/docs/rules/max-len}
  // {@link http://eslint.cn/docs/rules/max-len}
  "max-len": "error",
  // enforce a maximum number of lines per file
  // 强制最大行数
  // {@link https://eslint.org/docs/rules/max-lines}
  // {@link http://eslint.cn/docs/rules/max-lines}
  "max-lines": ["error", {
    "max": 1000,
    "skipBlankLines": true,
    "skipComments": true
  }],
  // enforce a maximum depth that callbacks can be nested
  // 强制回调函数最大嵌套深度
  // {@link https://eslint.org/docs/rules/max-nested-callbacks}
  // {@link http://eslint.cn/docs/rules/max-nested-callbacks}
  // 默认10层
  "max-nested-callbacks": ["error", 6],
  // enforce a maximum number of parameters in function definitions
  // 强制函数定义中最多允许的参数数量
  // {@link https://eslint.org/docs/rules/max-params}
  // {@link http://eslint.cn/docs/rules/max-params}
  // 默认3个
  "max-params": ["error", 10],
  // enforce a maximum number of statements allowed in function blocks
  // 强制函数块最多允许的的语句数量
  // {@link https://eslint.org/docs/rules/max-statements}
  // {@link http://eslint.cn/docs/rules/max-statements}
  "max-statements": ["warn", 30],
  // enforce a maximum number of statements allowed per line
  // 强制每一行中所允许的最大语句数量
  // {@link https://eslint.org/docs/rules/max-statements-per-line}
  // {@link http://eslint.cn/docs/rules/max-statements-per-line}
  "max-statements-per-line": ["error", {"max": 1}],
  // enforce a particular style for multiline comments
  // 为多行注释强制执行特定的样式（多行注释式）
  // {@link https://eslint.org/docs/rules/multiline-comment-style}
  // {@link http://eslint.cn/docs/rules/multiline-comment-style}
  // [fixed]
  "multiline-comment-style": "off",
  // enforce newlines between operands of ternary expressions
  // 在三元表达式的操作数之间强制或禁止换行符（多行 - 三元）
  // {@link https://eslint.org/docs/rules/multiline-ternary}
  // {@link http://eslint.cn/docs/rules/multiline-ternary}
  // ruiguo: 三元表达式就是为了简洁处理条件分支，如果逻辑复杂就应该用if-else
  "multiline-ternary": "off",
  // require constructor names to begin with a capital letter
  // 要求构造函数首字母大写
  // {@link https://eslint.org/docs/rules/new-cap}
  // {@link http://eslint.cn/docs/rules/new-cap}
  "new-cap": "error",
  // require parentheses when invoking a constructor with no arguments
  // 要求调用无参构造函数时有圆括号
  // {@link https://eslint.org/docs/rules/new-parens}
  // {@link http://eslint.cn/docs/rules/new-parens}
  // [fixed]
  "new-parens": "error",
  // require a newline after each call in a method chain
  // 要求方法链中每个调用都有一个换行符
  // {@link https://eslint.org/docs/rules/newline-per-chained-call}
  // {@link http://eslint.cn/docs/rules/newline-per-chained-call}
  // [fixed]
  // ruiguo: 默认允许在同一行成链的深度为2。我建议为3
  "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
  // disallow Array constructors
  // 禁用 Array 构造函数
  // {@link https://eslint.org/docs/rules/no-array-constructor}
  // {@link http://eslint.cn/docs/rules/no-array-constructor}
  "no-array-constructor": "error",
  // disallow bitwise operators
  // 禁用按位运算符
  // {@link https://eslint.org/docs/rules/no-bitwise}
  // {@link http://eslint.cn/docs/rules/no-bitwise}
  "no-bitwise": "error",
  // disallow continue statements
  // 禁用 continue 语句
  // {@link https://eslint.org/docs/rules/no-continue}
  // {@link http://eslint.cn/docs/rules/no-continue}
  "no-continue": "off",
  // disallow inline comments after code
  // 禁止在代码后使用内联注释
  // {@link https://eslint.org/docs/rules/no-inline-comments}
  // {@link http://eslint.cn/docs/rules/no-inline-comments}
  // ruiguo: 过分追求非内联注释，反而增加文件长度，不利于阅读和开发速度
  "no-inline-comments": "off",
  // disallow if statements as the only statement in else blocks
  // 禁止 if 作为唯一的语句出现在 else 语句中
  // {@link https://eslint.org/docs/rules/no-lonely-if}
  // {@link http://eslint.cn/docs/rules/no-lonely-if}
  // [fixed]
  "no-lonely-if": "warn",
  // disallow mixed binary operators
  // 禁止混合使用不同的操作符
  // {@link https://eslint.org/docs/rules/no-mixed-operators}
  // {@link http://eslint.cn/docs/rules/no-mixed-operators}
  "no-mixed-operators": "off",
  // disallow mixed spaces and tabs for indentation
  // 禁止空格和 tab 的混合缩进
  // {@link https://eslint.org/docs/rules/no-mixed-spaces-and-tabs}
  // {@link http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs}
  // [recommended]
  "no-mixed-spaces-and-tabs": "error",
  // disallow use of chained assignment expressions
  // {@link https://eslint.org/docs/rules/no-multi-assign}
  // {@link http://eslint.cn/docs/rules/no-multi-assign}
  "no-multi-assign": "error",
  // disallow multiple empty lines
  // 禁止出现多行空行
  // {@link https://eslint.org/docs/rules/no-multiple-empty-lines}
  // {@link http://eslint.cn/docs/rules/no-multiple-empty-lines}
  // [fixed]
  // ruiguo: 默认选项 { "max": 2 }
  "no-multiple-empty-lines": ["error"],
  // disallow negated conditions
  // 禁用否定的表达式
  // {@link https://eslint.org/docs/rules/no-negated-condition}
  // {@link http://eslint.cn/docs/rules/no-negated-condition}
  // ruiguo: 有时候我们需要用否定表达式做强制bool转换
  "no-negated-condition": "off",
  // disallow nested ternary expressions
  // 禁用嵌套的三元表达式
  // {@link https://eslint.org/docs/rules/no-nested-ternary}
  // {@link http://eslint.cn/docs/rules/no-nested-ternary}
  "no-nested-ternary": "off",
  // disallow Object constructors
  // 禁用 Object 的构造函数
  // {@link https://eslint.org/docs/rules/no-new-object}
  // {@link http://eslint.cn/docs/rules/no-new-object}
  "no-new-object": "error",
  // disallow the unary operators ++ and --
  // 禁用一元操作符 ++ 和 --
  // {@link https://eslint.org/docs/rules/no-plusplus}
  // {@link http://eslint.cn/docs/rules/no-plusplus}
  "no-plusplus": "off",
  // disallow specified syntax
  // 禁用特定的语法
  // {@link https://eslint.org/docs/rules/no-restricted-syntax}
  // {@link http://eslint.cn/docs/rules/no-restricted-syntax}
  // ruiguo: 可自定义配置，比如不用with
  "no-restricted-syntax": ["error", "WithStatement"],
  // disallow all tabs
  // 一些风格指南根本不允许使用制表符
  // {@link https://eslint.org/docs/rules/no-tabs}
  // {@link http://eslint.cn/docs/rules/no-tabs}
  "no-tabs": "off",
  // disallow ternary operators
  // 禁用三元操作符
  // {@link https://eslint.org/docs/rules/no-ternary}
  // {@link http://eslint.cn/docs/rules/no-ternary}
  "no-ternary": "off",
  // disallow trailing whitespace at the end of lines
  // 禁用行尾空格
  // {@link https://eslint.org/docs/rules/no-trailing-spaces}
  // {@link http://eslint.cn/docs/rules/no-trailing-spaces}
  // [fixed]
  "no-trailing-spaces": "warn",
  // disallow dangling underscores in identifiers
  // 禁止标识符中有悬空下划线
  // {@link https://eslint.org/docs/rules/no-underscore-dangle}
  // {@link http://eslint.cn/docs/rules/no-underscore-dangle}
  // ruiguo: 考虑到有人习惯将其作为私有属性的命名规范
  "no-underscore-dangle": "off",
  // disallow ternary operators when simpler alternatives exist
  // 禁止可以在有更简单的可替代的表达式时使用三元操作符
  // {@link https://eslint.org/docs/rules/no-unneeded-ternary}
  // {@link http://eslint.cn/docs/rules/no-unneeded-ternary}
  // [fixed]
  "no-unneeded-ternary": "error",
  // disallow whitespace before properties
  // 禁止属性前有空白
  // {@link https://eslint.org/docs/rules/no-whitespace-before-property}
  // {@link http://eslint.cn/docs/rules/no-whitespace-before-property}
  // [fixed]
  "no-whitespace-before-property": "error",
  // enforce the location of single-line statements
  // 强制执行单行语句的位置
  // {@link https://eslint.org/docs/rules/nonblock-statement-body-position}
  // {@link http://eslint.cn/docs/rules/nonblock-statement-body-position}
  // [fixed]
  // ruiguo: 一旦逻辑语句中有单行语句，那么就要建议放在下一行，避免条件过长时的歧义
  "nonblock-statement-body-position": ["error", "below"],
  // enforce consistent line breaks inside braces
  // 强制大括号内换行符的一致性
  // {@link https://eslint.org/docs/rules/object-curly-newline}
  // {@link http://eslint.cn/docs/rules/object-curly-newline}
  // [fixed]
  // 默认选项 { "multiline": true } 如果在属性内部或属性之间有换行符，就要求有换行符
  "object-curly-newline": "error",
  // enforce consistent spacing inside braces
  // 强制在大括号中使用一致的空格
  // {@link https://eslint.org/docs/rules/object-curly-spacing}
  // {@link http://eslint.cn/docs/rules/object-curly-spacing}
  // [fixed]
  "object-curly-spacing": "error",
  // enforce placing object properties on separate lines
  // 强制将对象的属性放在不同的行上
  // {@link https://eslint.org/docs/rules/object-property-newline}
  // {@link http://eslint.cn/docs/rules/object-property-newline}
  // [fixed]
  // ruiguo : 不知是否会影响"object-curly-newline" 暂时关闭
  "object-property-newline": "off",
  // enforce variables to be declared either together or separately in functions
  // 强制函数中的变量要么一起声明要么分开声明
  // {@link https://eslint.org/docs/rules/one-var}
  // {@link http://eslint.cn/docs/rules/one-var}
  // ruiguo: 这里是统一声明，而不是强制置顶
  "one-var": "off",
  // require or disallow newlines around variable declarations
  // (默认) 强制每个变量初始化语句换行
  // {@link https://eslint.org/docs/rules/one-var-declaration-per-line}
  // {@link http://eslint.cn/docs/rules/one-var-declaration-per-line}
  // [fixed]
  // ruiguo: 同行声明会造成有变量不被初始化
  "one-var-declaration-per-line": "error",
  // require or disallow assignment operator shorthand where possible
  // 要求或禁止在可能的情况下使用简化的赋值操作符
  // {@link https://eslint.org/docs/rules/operator-assignment}
  // {@link http://eslint.cn/docs/rules/operator-assignment}
  // [fixed]
  // ruiguo: 这里建议弱提示
  "operator-assignment": "warn",
  // enforce consistent linebreak style for operators
  // 强制操作符使用一致的换行符
  // {@link https://eslint.org/docs/rules/operator-linebreak}
  // {@link http://eslint.cn/docs/rules/operator-linebreak}
  // [fixed]
  "operator-linebreak": ["error", "after"],
  // require or disallow padding within blocks
  // 要求或禁止块内填充
  // {@link https://eslint.org/docs/rules/padded-blocks}
  // {@link http://eslint.cn/docs/rules/padded-blocks}
  // [fixed]
  "padded-blocks": ["error", "never"],
  // require or disallow padding lines between statements
  // {@link https://eslint.org/docs/rules/padding-line-between-statements}
  // {@link http://eslint.cn/docs/rules/padding-line-between-statements}
  // [fixed]
  "padding-line-between-statements": ["error", { "blankLine": "always", "prev": "*", "next": "return" }],
  // require quotes around object literal property names
  // 要求对象字面量属性名称用引号括起来
  // {@link https://eslint.org/docs/rules/quote-props}
  // {@link http://eslint.cn/docs/rules/quote-props}
  // [fixed]
  "quote-props": "off",
  // enforce the consistent use of either backticks, double, or single quotes
  // 强制使用一致的反勾号、双引号或单引号
  // {@link https://eslint.org/docs/rules/quotes}
  // {@link http://eslint.cn/docs/rules/quotes}
  // [fixed]
  "quotes": ["error", "single"],
  // require JSDoc comments
  // 要求使用 JSDoc 注释
  // {@link https://eslint.org/docs/rules/require-jsdoc}
  // {@link http://eslint.cn/docs/rules/require-jsdoc}
  "require-jsdoc": ["error", {
      "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false
      }
  }],
  // require or disallow semicolons instead of ASI
  // 要求或禁止使用分号代替 ASI 
  // {@link https://eslint.org/docs/rules/semi}
  // {@link http://eslint.cn/docs/rules/semi}
  // [fixed]
  // ruiguo: 建议使用，还要讨论
  "semi": ["error", "always"],
  // enforce consistent spacing before and after semicolons
  // 强制分号之前和之后使用一致的空格
  // {@link https://eslint.org/docs/rules/semi-spacing}
  // {@link http://eslint.cn/docs/rules/semi-spacing}
  // [fixed]
  // ruiguo: 遇到过;(async () => { 的书写
  "semi-spacing": ["error", {"before": false, "after": true}],
  // enforce location of semicolons
  // 强制分号的位置
  // {@link https://eslint.org/docs/rules/semi-style}
  // {@link http://eslint.cn/docs/rules/semi-style}
  // [fixed]
  // ruiguo: 同上,有使用场景，暂时关闭
  "semi-style": "off",
  // require object keys to be sorted
  // 属性排序
  // {@link https://eslint.org/docs/rules/sort-keys}
  // {@link http://eslint.cn/docs/rules/sort-keys}
  // ruiguo： 属性书写应按照意义而不是单纯的字母顺序
  "sort-keys": "off",
  // require variables within the same declaration block to be sorted
  // 要求同一个声明块中的变量按顺序排列
  // {@link https://eslint.org/docs/rules/sort-vars}
  // {@link http://eslint.cn/docs/rules/sort-vars}
  // [fixed]
  // ruiguo： 变量书写应按照意义而不是单纯的字母顺序
  "sort-vars": "off",
  // enforce consistent spacing before blocks
  // 强制在块之前使用一致的空格
  // {@link https://eslint.org/docs/rules/space-before-blocks}
  // {@link http://eslint.cn/docs/rules/space-before-blocks}
  // [fixed]
  "space-before-blocks": "error",
  // enforce consistent spacing before function definition opening parenthesis
  // 强制在 function的左括号之前使用一致的空格
  // {@link https://eslint.org/docs/rules/space-before-function-paren}
  // {@link http://eslint.cn/docs/rules/space-before-function-paren}
  // [fixed]
  "space-before-function-paren": "error",
  // enforce consistent spacing inside parentheses
  // 强制在圆括号内使用一致的空格
  // {@link https://eslint.org/docs/rules/space-in-parens}
  // {@link http://eslint.cn/docs/rules/space-in-parens}
  // [fixed]
  "space-in-parens": ["error"],
  // require spacing around infix operators
  // 要求操作符周围有空格
  // {@link https://eslint.org/docs/rules/space-infix-ops}
  // {@link http://eslint.cn/docs/rules/space-infix-ops}
  // [fixed]
  "space-infix-ops": "error",
  // enforce consistent spacing before or after unary operators
  // 强制在一元操作符前后使用一致的空格
  // {@link https://eslint.org/docs/rules/space-unary-ops}
  // {@link http://eslint.cn/docs/rules/space-unary-ops}
  // [fixed]
  "space-unary-ops": ["error", {"words": true, "nonwords": false}],
  // enforce consistent spacing after the // or /* in a comment
  // 强制在注释中 // 或 /* 使用一致的空格
  // {@link https://eslint.org/docs/rules/spaced-comment}
  // {@link http://eslint.cn/docs/rules/spaced-comment}
  // [fixed]
  "spaced-comment": ["error", "always"],
  // enforce spacing around colons of switch statements
  // 强制执行switch语句的冒号间隔
  // {@link https://eslint.org/docs/rules/switch-colon-spacing}
  // {@link http://eslint.cn/docs/rules/switch-colon-spacing}
  // [fixed]
  "switch-colon-spacing": "error",
  // require or disallow spacing between template tags and their literals
  // 需要或不允许模板标签及其文字之间的间距
  // {@link https://eslint.org/docs/rules/template-tag-spacing}
  // {@link http://eslint.cn/docs/rules/template-tag-spacing}
  // [fixed]
  // ruiguo 为了可读性建议开启
  "template-tag-spacing": ["error", "always"],
  // require or disallow Unicode byte order mark (BOM)
  // 要求或禁止 Unicode 字节顺序标记 (BOM)
  // {@link https://eslint.org/docs/rules/unicode-bom}
  // {@link http://eslint.cn/docs/rules/unicode-bom}
  // [fixed]
  "unicode-bom": "error",
  // require parenthesis around regex literals
  // 要求正则表达式被括号括起来
  // {@link https://eslint.org/docs/rules/wrap-regex}
  // {@link http://eslint.cn/docs/rules/wrap-regex}
  // [fixed]
  "wrap-regex": "error",
}