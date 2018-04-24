var qbLint = require('./tool.js');
var qbIndex = require('./index.js');
var qbNode = require('./node.js');

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

var testApiGetqbIndex = function () {
    console.log('qbIndex: ', qbIndex);
}

var testApiGetqbNode = function () {
    console.log('qbNode: ', qbNode);
}

// testApiGetRules();
// testApiGetConfig();
// testApiGetRuleNames();
// testApiGetqbIndex();
testApiGetqbNode();


