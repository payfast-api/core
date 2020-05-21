const tools     = require('./tools');
const fetch     = require('node-fetch');
const moment    = require('moment');

exports.daily = async (params) => {
    var body    = {};
    if (typeof(params.date) != "undefined") {
        body.date = params.date;
    };
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

    const parsed    = await tools.signature(headers, body);
    parsed.body     = await tools.urlencode(parsed.body);
    const response  = await fetch('https://api.payfast.co.za/transactions/history/daily?' + parsed.body, {
        'method':   'GET',
        'headers':  parsed.headers
    });
    const csv   = await response.text();
    const json  = await tools.csvtojson(csv);
    return json.filter(o => (typeof(o.date) != "undefined" && o.date != "" && o.date != null)).map(o => {
        return {
            "fee":              parseFloat(o.fee),
            "net":              parseFloat(o.net),
            "date":             moment(o.date).format('YYYY/MM/DDTHH:mm:ss'),
            "type":             o.type,
            "sign":             o.sign,
            "name":             o.name,
            "party":            o.party,
            "gross":            parseFloat(o.gross),
            "balance":          parseFloat(o.balance),
            "currency":         o.currency,
            "custom_str1":      o['custom str1'],
            "custom_int1":      o['custom int1'],
            "custom_str2":      o['custom str2'],
            "custom_int2":      o['custom int2'],
            "custom_str3":      o['custom str3'],
            "custom_str4":      o['custom str4'],
            "custom_str5":      o['custom str5'],
            "custom_int3":      o['custom int3'],
            "custom_int4":      o['custom int4'],
            "custom_int5":      o['custom int5'],
            "description":      o.description,
            "funding_type":     o['funding type'],
            "m_payment_id":     o['m payment id'],
            "pf_payment_id":    o['pf payment id']
        };
    });
};

exports.weekly = async (params) => {
    var body    = {};
    if (typeof(params.date) != "undefined") {
        body.date = params.date;
    };
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

    const parsed    = await tools.signature(headers, body);
    parsed.body     = await tools.urlencode(parsed.body);
    const response  = await fetch('https://api.payfast.co.za/transactions/history/weekly?' + parsed.body, {
        'method':   'GET',
        'headers':  parsed.headers
    });
    const csv   = await response.text();
    const json  = await tools.csvtojson(csv);
    return json.filter(o => (typeof(o.date) != "undefined" && o.date != "" && o.date != null)).map(o => {
        return {
            "fee":              parseFloat(o.fee),
            "net":              parseFloat(o.net),
            "date":             moment(o.date).format('YYYY/MM/DDTHH:mm:ss'),
            "type":             o.type,
            "sign":             o.sign,
            "name":             o.name,
            "party":            o.party,
            "gross":            parseFloat(o.gross),
            "balance":          parseFloat(o.balance),
            "currency":         o.currency,
            "custom_str1":      o['custom str1'],
            "custom_int1":      o['custom int1'],
            "custom_str2":      o['custom str2'],
            "custom_int2":      o['custom int2'],
            "custom_str3":      o['custom str3'],
            "custom_str4":      o['custom str4'],
            "custom_str5":      o['custom str5'],
            "custom_int3":      o['custom int3'],
            "custom_int4":      o['custom int4'],
            "custom_int5":      o['custom int5'],
            "description":      o.description,
            "funding_type":     o['funding type'],
            "m_payment_id":     o['m payment id'],
            "pf_payment_id":    o['pf payment id']
        };
    });
};

exports.monthly = async (params) => {
    var body    = {};
    if (typeof(params.date) != "undefined") {
        body.date = params.date;
    };
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

    const parsed    = await tools.signature(headers, body);
    parsed.body     = await tools.urlencode(parsed.body);
    const response  = await fetch('https://api.payfast.co.za/transactions/history/monthly?' + parsed.body, {
        'method':   'GET',
        'headers':  parsed.headers
    });
    const csv   = await response.text();
    const json  = await tools.csvtojson(csv);
    return json.filter(o => (typeof(o.date) != "undefined" && o.date != "" && o.date != null)).map(o => {
        return {
            "fee":              parseFloat(o.fee),
            "net":              parseFloat(o.net),
            "date":             moment(o.date).format('YYYY/MM/DDTHH:mm:ss'),
            "type":             o.type,
            "sign":             o.sign,
            "name":             o.name,
            "party":            o.party,
            "gross":            parseFloat(o.gross),
            "balance":          parseFloat(o.balance),
            "currency":         o.currency,
            "custom_str1":      o['custom str1'],
            "custom_int1":      o['custom int1'],
            "custom_str2":      o['custom str2'],
            "custom_int2":      o['custom int2'],
            "custom_str3":      o['custom str3'],
            "custom_str4":      o['custom str4'],
            "custom_str5":      o['custom str5'],
            "custom_int3":      o['custom int3'],
            "custom_int4":      o['custom int4'],
            "custom_int5":      o['custom int5'],
            "description":      o.description,
            "funding_type":     o['funding type'],
            "m_payment_id":     o['m payment id'],
            "pf_payment_id":    o['pf payment id']
        };
    });
};

exports.history = async (params) => {
    var body    = {};
    if (typeof(params.to) != "undefined") {
        body.to = params.to;
    };
    if (typeof(params.from) != "undefined") {
        body.from = params.from;
    };
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

    const parsed    = await tools.signature(headers, body);
    parsed.body     = await tools.urlencode(parsed.body);
    const response  = await fetch('https://api.payfast.co.za/transactions/history?' + parsed.body, {
        'method':   'GET',
        'headers':  parsed.headers
    });
    const csv   = await response.text();
    const json  = await tools.csvtojson(csv);
    return json.filter(o => (typeof(o.date) != "undefined" && o.date != "" && o.date != null)).map(o => {
        return {
            "fee":              parseFloat(o.fee),
            "net":              parseFloat(o.net),
            "date":             moment(o.date).format('YYYY/MM/DDTHH:mm:ss'),
            "type":             o.type,
            "sign":             o.sign,
            "name":             o.name,
            "party":            o.party,
            "gross":            parseFloat(o.gross),
            "balance":          parseFloat(o.balance),
            "currency":         o.currency,
            "custom_str1":      o['custom str1'],
            "custom_int1":      o['custom int1'],
            "custom_str2":      o['custom str2'],
            "custom_int2":      o['custom int2'],
            "custom_str3":      o['custom str3'],
            "custom_str4":      o['custom str4'],
            "custom_str5":      o['custom str5'],
            "custom_int3":      o['custom int3'],
            "custom_int4":      o['custom int4'],
            "custom_int5":      o['custom int5'],
            "description":      o.description,
            "funding_type":     o['funding type'],
            "m_payment_id":     o['m payment id'],
            "pf_payment_id":    o['pf payment id']
        };
    });
};