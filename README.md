# Payfast API

## Minimum Requirements

At a minimum, the following must be provided to gain access to the API ecosystem:

- A valid and an API enabled PayFast merchant account
- A passphrase as set on the merchant account settings page
- PayFast merchant ID
- The version of the API you want to interact with
- A valid merchant signature
- A timestamp included in the request
- **Whitelist IP Address** in integration settings

#### Step 1: Install npm module

```bash
npm i --save @payfast/core
```
This will install the current stable version of `@payfast/core` in your `node_modules` directory and save the entry in `package.json`.

#### Step 2: Import @payfast/core

```js
const payfast = require('@payfast/core');
...
```

## Documentation

### Ping

```js
const payfast = require('@payfast/core');

const response = await payfast.ping({
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

"Payfast API"
```

### Validate Sender

```js
const payfast = require('@payfast/core');

const response = await payfast.validate.sender(req.headers.referer); // 'www.payfast.co.za'

console.log(response);

{
  "valid": true
}
```

### Validate Request

```js
const payfast = require('@payfast/core');

const response = await payfast.validate.request({
  "token":              "xxx",
  "name_last":          "",
  "item_name":          "xxx",
  "signature":          "xxx",
  "amount_fee":         "0.00",
  "amount_net":         "0.00",
  "name_first":         "",
  "custom_str1":        "",
  "custom_str2":        "",
  "custom_str3":        "",
  "custom_str4":        "",
  "custom_str5":        "",
  "custom_int1":        "",
  "custom_int2":        "",
  "custom_int3":        "",
  "custom_int4":        "",
  "custom_int5":        "",
  "merchant_id":        "xxx",
  "m_payment_id":       "xxx",
  "billing_date":       "2020-01-01",
  "amount_gross":       "0.00",
  "pf_payment_id":      "xxx",
  "email_address":      "xxx@xxx.co.za",
  "payment_status":     "COMPLETE",
  "item_description":   ""
});

console.log(response);

{
  "valid": true
}
```

### Get All Transaction History

```js
const payfast = require('@payfast/core');

const response = await payfast.transactions.history({
  "to":           "2020-01-01T00:00:00",
  "from":         "2020-05-20T00:00:00",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

[
    {
        "fee":              0.00,
        "net":              0.00,
        "date":             "2020-01-01T00:00:00",
        "type":             "xxx",
        "sign":             "xxx",
        "name":             "xxx",
        "party":            "xxx",
        "gross":            0.00,
        "balance":          0.00,
        "currency":         "ZAR",
        "custom_str1":      "xxx",
        "custom_int1":      "xxx",
        "custom_str2":      "xxx",
        "custom_int2":      "xxx",
        "custom_str3":      "xxx",
        "custom_str4":      "xxx",
        "custom_str5":      "xxx",
        "custom_int3":      "xxx",
        "custom_int4":      "xxx",
        "custom_int5":      "xxx",
        "description":      "xxx",
        "funding_type":     "xxx",
        "m_payment_id":     "xxx",
        "pf_payment_id":    "xxx",
    }
]
```

### Get Daily Transaction History

```js
const payfast = require('@payfast/core');

const response = await payfast.transactions.daily({
  "date":         "2020-05-20",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

[
    {
        "fee":              0.00,
        "net":              0.00,
        "date":             "2020-01-01T00:00:00",
        "type":             "xxx",
        "sign":             "xxx",
        "name":             "xxx",
        "party":            "xxx",
        "gross":            0.00,
        "balance":          0.00,
        "currency":         "ZAR",
        "custom_str1":      "xxx",
        "custom_int1":      "xxx",
        "custom_str2":      "xxx",
        "custom_int2":      "xxx",
        "custom_str3":      "xxx",
        "custom_str4":      "xxx",
        "custom_str5":      "xxx",
        "custom_int3":      "xxx",
        "custom_int4":      "xxx",
        "custom_int5":      "xxx",
        "description":      "xxx",
        "funding_type":     "xxx",
        "m_payment_id":     "xxx",
        "pf_payment_id":    "xxx",
    }
]
```

### Get WeeklyTransaction History

```js
const payfast = require('@payfast/core');

const response = await payfast.transactions.weekly({
  "date":         "2020-05-20",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

[
    {
        "fee":              0.00,
        "net":              0.00,
        "date":             "2020-01-01T00:00:00",
        "type":             "xxx",
        "sign":             "xxx",
        "name":             "xxx",
        "party":            "xxx",
        "gross":            0.00,
        "balance":          0.00,
        "currency":         "ZAR",
        "custom_str1":      "xxx",
        "custom_int1":      "xxx",
        "custom_str2":      "xxx",
        "custom_int2":      "xxx",
        "custom_str3":      "xxx",
        "custom_str4":      "xxx",
        "custom_str5":      "xxx",
        "custom_int3":      "xxx",
        "custom_int4":      "xxx",
        "custom_int5":      "xxx",
        "description":      "xxx",
        "funding_type":     "xxx",
        "m_payment_id":     "xxx",
        "pf_payment_id":    "xxx",
    }
]
```

### Get Monthly Transaction History

```js
const payfast = require('@payfast/core');

const response = await payfast.transactions.monthly({
  "date":         "2020-05-20",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

[
    {
        "fee":              0.00,
        "net":              0.00,
        "date":             "2020-01-01T00:00:00",
        "type":             "xxx",
        "sign":             "xxx",
        "name":             "xxx",
        "party":            "xxx",
        "gross":            0.00,
        "balance":          0.00,
        "currency":         "ZAR",
        "custom_str1":      "xxx",
        "custom_int1":      "xxx",
        "custom_str2":      "xxx",
        "custom_int2":      "xxx",
        "custom_str3":      "xxx",
        "custom_str4":      "xxx",
        "custom_str5":      "xxx",
        "custom_int3":      "xxx",
        "custom_int4":      "xxx",
        "custom_int5":      "xxx",
        "description":      "xxx",
        "funding_type":     "xxx",
        "m_payment_id":     "xxx",
        "pf_payment_id":    "xxx",
    }
]
```

### Fetch Subscription

```js
const payfast = require('@payfast/core');

const response = await payfast.subscriptions.fetch({
  "token":        "xxx",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

{
  "token":            "xxx",
  "amount":           20,
  "cycles":           10,
  "status":           1,
  "run_date":         "2020-01-01",
  "frequency":        3,
  "status_text":      "",
  "status_reason":    "",
  "cycles_complete":  2
}

```

### Pause Subscription

```js
const payfast = require('@payfast/core');

const response = await payfast.subscriptions.pause({
  "token":        "xxx",
  "cycles":       1,
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

{
  "response": true
}
```

### Unpause Subscription

```js
const payfast = require('@payfast/core');

const response = await payfast.subscriptions.unpause({
  "token":        "xxx",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

{
  "response": true
}
```

### Update Subscription

```js
const payfast = require('@payfast/core');

const response = await payfast.subscriptions.update({
  "token":        "xxx",
  "cycles":       12,
  "amount":       30,
  "run_date":     "2020-01-01",
  "frequency":    4,
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

{
  "response": true
}
```

### Cancel Subscription

```js
const payfast = require('@payfast/core');

const response = await payfast.subscriptions.cancel({
  "token":        "xxx",
  "version":      "v1",
  "timestamp":    "2020-01-01T00:00:00",
  "passphrase":   "xxx",
  "merchant-id":  "xxx"
});

console.log(response);

{
  "response": true
}
```

# License
[MIT License](https://github.com/claytoncc/payfast/blob/master/LICENSE)
