var $$tool = require('./tool.js');

var config = $$tool.getConfig({
    rulesList: [
        'best',
        'es6',
        'node'
    ]
});

module.exports = config;