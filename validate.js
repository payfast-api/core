const fetch         = require('node-fetch');
const senders       = [
    "www.payfast.co.za",
    "w1w.payfast.co.za",
    "w2w.payfast.co.za",
    "sandbox.payfast.co.za",
    "https://www.payfast.co.za"
];
const FormParams    = require('url').URLSearchParams;

exports.sender = async (referer) => {
    if (senders.includes(referer)) {
        return {
            'valid': true
        };
    } else {
        return {
            'valid': false
        };
    };
};

exports.request = async (payload) => {
    const form = new FormParams();
    Object.keys(payload).sort().map(key => {
        form.append(key, payload[key]);
    });
    const response  = await fetch('https://www.payfast.co.za/eng/query/validate', {
        'headers': {
            'accept':       '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        'body':     form,
        'method':   "POST"
    });

    const result = await response.text();

    if (result == 'VALID') {
        return await {
            'valid': true
        };
    } else {
        return await {
            'valid': false
        };
    };
};