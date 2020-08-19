const tools = require('./tools');
const fetch = require('node-fetch');
const FormParams = require('url').URLSearchParams;

exports.fetch = async (params) => {
    var token = params.token;
    delete params.token;

    var headers = {};
    if (typeof (params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof (params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof (params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof (params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };

    const parsed = await tools.signature(headers);
    const response = await fetch('https://api.payfast.co.za/subscriptions/' + token + '/fetch', {
        'method': 'GET',
        'headers': parsed.headers
    });

    const result = await response.json();

    return result.data.response;
};

exports.pause = async (params) => {
    var token = params.token;
    delete params.token;

    var body = {};
    if (typeof (params.cycles) != "undefined") {
        body.cycles = params.cycles;
    };
    var headers = {};
    if (typeof (params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof (params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof (params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof (params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };

    const parsed = await tools.signature(headers, body);
    parsed.body = await tools.urlencode(parsed.body);
    const response = await fetch('https://api.payfast.co.za/subscriptions/' + token + '/pause', {
        'body': parsed.body,
        'method': 'PUT',
        'headers': parsed.headers
    });
    return await response.json();
};

exports.cancel = async (params) => {
    var token = params.token;
    delete params.token;

    var headers = {};
    if (typeof (params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof (params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof (params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof (params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };

    const parsed = await tools.signature(headers);
    const response = await fetch('https://api.payfast.co.za/subscriptions/' + token + '/cancel', {
        'method': 'PUT',
        'headers': parsed.headers
    });
    return await response.json();
};

exports.update = async (params) => {
    var token = params.token;
    delete params.token;

    var body = {};
    if (typeof (params.cycles) != "undefined") {
        body.cycles = params.cycles;
    };
    if (typeof (params.amount) != "undefined") {
        body.amount = params.amount * 100;
    };
    if (typeof (params.run_date) != "undefined") {
        body.run_date = params.run_date;
    };
    if (typeof (params.frequency) != "undefined") {
        body.frequency = params.frequency;
    };
    var headers = {};
    if (typeof (params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof (params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof (params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof (params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };
    const form = new FormParams();
    Object.keys(body).sort().map(key => {
        form.append(key, body[key]);
    });

    const parsed = await tools.signature(headers, body);
    const response = await fetch('https://api.payfast.co.za/subscriptions/' + token + '/update', {
        'body': form,
        'method': 'PATCH',
        'headers': parsed.headers
    });
    return await response.json();
};

exports.unpause = async (params) => {
    var token = params.token;
    delete params.token;

    var headers = {};
    if (typeof (params.version) != "undefined") {
        headers.version = params.version;
    };
    if (typeof (params.timestamp) != "undefined") {
        headers.timestamp = params.timestamp;
    };
    if (typeof (params.passphrase) != "undefined") {
        headers.passphrase = params.passphrase;
    };
    if (typeof (params['merchant-id']) != "undefined") {
        headers['merchant-id'] = params['merchant-id'];
    };

    const parsed = await tools.signature(headers);
    const response = await fetch('https://api.payfast.co.za/subscriptions/' + token + '/unpause', {
        'method': 'GET',
        'headers': parsed.headers
    });
    return await response.json();
};