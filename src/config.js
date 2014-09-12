var Config = function() {
    var env = process.env.hero_env || 'staging'; // TODO: this should be 'production' once we move to prod
    var fs = require('fs');
    var rawJson = fs.readFileSync(__dirname + '/../config/hero-db-config-'+ env +'.json');
    var config = JSON.parse(rawJson);
    return config;
};

module.exports = Config;