// Node.js and CommonJS, 11 rules
// These rules relate to code running in Node.js, or in browsers with CommonJS:
module.exports = {
  // require return statements after callbacks
  // 强制返回callback函数
  // {@link https://eslint.org/docs/rules/callback-return}
  // {@link http://eslint.cn/docs/rules/callback-return}
  "callback-return": "error",
  // require require() calls to be placed at top-level module scope
  // 要求 require() 出现在顶层模块作用域中
  // {@link https://eslint.org/docs/rules/global-require}
  // {@link http://eslint.cn/docs/rules/global-require}
  "global-require": "error",
  // require error handling in callbacks
  // 要求回调函数中有容错处理
  // {@link https://eslint.org/docs/rules/handle-callback-err}
  // {@link http://eslint.cn/docs/rules/handle-callback-err}
  "handle-callback-err": "error",
  // disallow use of the Buffer() constructor
  // 不允许使用buffer()构造函数(非缓冲区构造函数)
  // {@link https://eslint.org/docs/rules/no-buffer-constructor}
  // {@link http://eslint.cn/docs/rules/no-buffer-constructor}
  "no-buffer-constructor": "error",
  // disallow require calls to be mixed with regular variable declarations
  // 禁止混合常规变量声明和 require 调用
  // {@link https://eslint.org/docs/rules/no-mixed-requires}
  // {@link http://eslint.cn/docs/rules/no-mixed-requires}
  "no-mixed-requires": ["error"],
  // disallow new operators with calls to require
  // 禁止调用 require 时使用 new 操作符
  // {@link https://eslint.org/docs/rules/no-new-require}
  // {@link http://eslint.cn/docs/rules/no-new-require}
  "no-new-require": "error",
  // disallow string concatenation with __dirname and __filename
  // 禁止对 __dirname 和 __filename 进行字符串连接
  // {@link https://eslint.org/docs/rules/no-path-concat}
  // {@link http://eslint.cn/docs/rules/no-path-concat}
  "no-path-concat": "error",
  // disallow the use of process.env
  // 禁用 process.env
  // {@link https://eslint.org/docs/rules/no-process-env}
  // {@link http://eslint.cn/docs/rules/no-process-env}
  "no-process-env": "off",
  // disallow the use of process.exit()
  // 禁用 process.exit()
  // {@link https://eslint.org/docs/rules/no-process-exit}
  // {@link http://eslint.cn/docs/rules/no-process-exit}
  // ruiguo: 这里想听听大家的意见
  "no-process-exit": "error",
  // disallow specified modules when loaded by require
  // 禁用通过 require 加载的指定模块
  // {@link https://eslint.org/docs/rules/no-restricted-modules}
  // {@link http://eslint.cn/docs/rules/no-restricted-modules}
  "no-restricted-modules": "off",
  // disallow synchronous methods
  // 禁用同步方法
  // {@link https://eslint.org/docs/rules/no-sync}
  // {@link http://eslint.cn/docs/rules/no-sync}
  // ruiguo: 虽然可以用async来方便调用，但老代码中可能有大量使用暂关闭
  "no-sync": "warn",
}