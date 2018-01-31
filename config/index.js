var development = require('./development');
var production = require('./production');


var env = process.env.NODE_ENV || 'development';

var configs = {
    development,
    production
};


var defaultConfig = {
    env
};

const config = Object.assign({}, defaultConfig, configs[env])

module.exports = config;
