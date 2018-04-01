var bestRules = require('./eslint_rules/best.practices.js');
var es6Rules = require('./eslint_rules/ecmascript6.js');
var nodeRules = require('./eslint_rules/nodejs.and.commonjs.js');
var possibleRules = require('./eslint_rules/possible.errors.js');
var strictRules = require('./eslint_rules/strict.mode.js');
var stylisticRules = require('./eslint_rules/stylistic.issues.js');
var varRules = require('./eslint_rules/variables.js');

// 模块名对应的规则
var rulesMap = {
	'best': bestRules,
	'es6': es6Rules,
	'node': nodeRules,
	'possible': possibleRules,
	'strict': strictRules,
	'stylistic': stylisticRules,
	'var': varRules
};

/**
 * 获取模块规则
 * @param {array} rulesList - 模块名列表不传即所有.
 * @returns {object} rtRules - 规则对象.
 */
var getRules = function (rulesList) {
	var rtRules = {};
	var rulesNameList = rulesList
	if (!Array.isArray(rulesList) || rulesList.length === 0) {
		rulesNameList = Object.keys(rulesMap);
	}
	rulesNameList.forEach(function (ruleName) {
		if (!!rulesMap[ruleName]) {
			Object.assign(rtRules, rulesMap[ruleName]);
		}
	});

	return rtRules;
}

/**
 * 获取eslint配置
 * @param {object} option - 配置清单对象.
 * @param {array} option.rulesList - 功能模块名列表，不填即全部.
 * @returns {object} rtConfig - 规则对象.
 */
var getConfig = function (option = {}) {
	// 默认
	var rtConfig = {
		"env": {
		    "browser": true
		},
		"parserOptions": {
		    "parser": "babel-eslint",
		    "ecmaVersion": 6,
		    "sourceType": "module"
		},
		"extends": [
		    "eslint:recommended"
		],
		// required to lint *.vue files
		plugins: [],
		// add your custom rules here
		rules: {}
	};

	Object.assign(rtConfig, option || {});
	rtConfig.rules = getRules(option.rulesList)
	if (option.rulesList) {
		delete rtConfig.rulesList;
	}

	return rtConfig;
}

/**
 * 获取模块名
 * @returns {object} rtConfig - 规则对象.
 */
var getRuleNames = function () {
	var ruleNames =  Object.keys(rulesMap);
	return ruleNames;
}




module.exports = {
	getRules,
	getConfig,
	getRuleNames
}