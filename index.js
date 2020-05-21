const fetch             = require('node-fetch');
exports.tools           = require('./tools');
exports.validate        = require('./validate');
exports.transactions    = require('./transactions');
exports.subscriptions   = require('./subscriptions');

exports.ping = async (params) => {
    var headers = {};
    if (typeof(params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof(params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof(params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof(params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };
    const parsed    = await this.tools.signature(headers, {});
    const response  = await fetch('https://api.payfast.co.za/ping', {
        'method':   'GET',
        'headers':  parsed.headers
    });
    return await response.json();
};