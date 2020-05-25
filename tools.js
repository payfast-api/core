var md5 = require('md5');

exports.urlencode = async (params) => {
    let result = [];

    Object.keys(params).sort().map(key => {
        params[key] = encodeURIComponent(params[key]);
        params[key] = params[key].replace(/\%20/g, '+');
        result.push(key + "=" + params[key]);
    });

    return await result.join('&');
};

exports.signature = async (headers, body) => {
    var merge = {};

    if (typeof(body) != "object") {
        body = {};
    };
    Object.keys(body).map(key => {
        merge[key] = body[key];
    });

    if (typeof(headers) != "object") {
        headers = {};
    };
    Object.keys(headers).map(key => {
        merge[key] = headers[key];
    });

    var signature = [];

    Object.keys(merge).sort().map(key => {
        merge[key] = encodeURIComponent(merge[key]);
        merge[key] = merge[key].replace(/\%20/g, '+');
        signature.push(key + "=" + merge[key]);
    });

    headers.signature = md5(signature.join('&'));

    return {
        'body':     body,
        'headers':  headers
    };
};

exports.csvtojson = async (csv) => {
    csv         = csv.split('"').join('');
    let data    = [];
    let lines   = await csv.split('"').join('').split('\n');
    let headers = lines[0].toLowerCase().split(',').map(key => key.trim());

    lines.splice(0, 1);

    lines.map(line => {
        var tmp = {};
        line = line.split(',').map(key => key.trim());
        for (let i = 0; i < headers.length; i++) {
            tmp[headers[i]] = line[i];
        };
        data.push(tmp);
    });

    return await data;
};