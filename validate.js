const tools     = require('./tools');
const fetch     = require('node-fetch');
const senders   = [
    "www.payfast.co.za",
    "w1w.payfast.co.za",
    "w2w.payfast.co.za",
    "sandbox.payfast.co.za",
    "https://www.payfast.co.za"
];

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
    const response  = await fetch('https://www.payfast.co.za/eng/query/validate', {
        'headers': {
            'accept':       '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        'form':     payload,
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