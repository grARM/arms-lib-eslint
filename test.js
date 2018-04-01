var qbLint = require('./index.js');

var testApiGetRules = function () {
	var rules = qbLint.getRules();
	console.log('rules: ', rules, ' -- rules len: ', Object.keys(rules).length);
};


var testApiGetConfig = function () {
	var config = qbLint.getConfig();
	console.log('config: ', config, ' -- rules len: ', Object.keys(config.rules).length);
};

var testApiGetRuleNames = function () {
	console.log('list: ', qbLint.getRuleNames());
}


// testApiGetRules();
// testApiGetConfig();
testApiGetRuleNames();