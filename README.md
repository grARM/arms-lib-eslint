# JavaScript 代码规范

# doc
## 功能模块名：

* best (best practices ) 最佳实践
* es6 (es6) ES6
* node (nodejs and commonjs)nodeJS 和 commonJS
* possible (possible errors)可能犯的错误
* strict (strict mode)严格模式
* stylistic (stylistic issues) 风格相关
* var (variables)变量定义


## API

### 获取某个模块的规则
* var rules = getRules(rulesList)
* 参数：rulesList【array】功能模块名的列表（见上方），不传就是获取全部规则
* 返回：rules 一个包含对应规则的map

### 获取eslint配置
* var config = getConfig(option)
* 参数：option【object】eslint配置对象，有默认配置，但是模块列表一定要填
* 参数： option.rulesList 即上面的功能模块名的列表，不传就是获取全部规则
* 参数： 其他参数和eslint官网一致
* 返回：config 【object】返回的eslint配置


### 获取模块名
* var ruleNames = getRuleNames()
* 返回：array

