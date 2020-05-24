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
    const parsed = await tools.signature({}, {
        'm_payment_id':     payload.m_payment_id,
        'pf_payment_id':    payload.pf_payment_id
    });

    const response  = await fetch('https://www.payfast.co.za/eng/query/validate', {
        'headers': {
            'accept':       '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        'form':     parsed.body,
        'method':   "POST"
    });

    const result = await response.json();

    if (result == 'VALID') {
        return {
            'valid': true
        };
    } else {
        return {
            'valid': false
        };
    };
};