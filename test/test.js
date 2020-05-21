var Q               = require('q');
var chai            = require('chai');
var moment          = require('moment');
var expect          = require('chai').expect;
var should     	    = require('chai').should();
var library         = require('../index');
var chaiSubset      = require('chai-subset');
chai.use(chaiSubset);

var config = require('./config.json');

describe('Payfast API', function() {
    it('Ping', function(done) {
        this.timeout(5000);

        api.ping()
        .then(result => {
            try {
                result.should.equal('PayFast API');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });
});

describe('Validate', function() {
    it('Validate Sender', function(done) {
        this.timeout(5000);

        api.validate.sender()
        .then(result => {
            try {
                result.should.have.property('valid');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Validate Request', function(done) {
        this.timeout(5000);

        api.validate.request()
        .then(result => {
            try {
                result.should.have.property('valid');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });
});

describe('Transactions', function() {
    it('Get All Transaction History', function(done) {
        this.timeout(5000);

        api.transactions.history()
        .then(result => {
            try {
                result[0].should.have.property('fee');
                result[0].should.have.property('net');
                result[0].should.have.property('date');
                result[0].should.have.property('type');
                result[0].should.have.property('sign');
                result[0].should.have.property('name');
                result[0].should.have.property('party');
                result[0].should.have.property('gross');
                result[0].should.have.property('balance');
                result[0].should.have.property('currency');
                result[0].should.have.property('custom_str1');
                result[0].should.have.property('custom_int1');
                result[0].should.have.property('custom_str2');
                result[0].should.have.property('custom_int2');
                result[0].should.have.property('custom_str3');
                result[0].should.have.property('custom_str4');
                result[0].should.have.property('custom_str5');
                result[0].should.have.property('custom_int3');
                result[0].should.have.property('custom_int4');
                result[0].should.have.property('custom_int5');
                result[0].should.have.property('description');
                result[0].should.have.property('funding_type');
                result[0].should.have.property('m_payment_id');
                result[0].should.have.property('pf_payment_id');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Get Daily Transaction History', function(done) {
        this.timeout(5000);

        api.transactions.daily()
        .then(result => {
            try {
                result[0].should.have.property('fee');
                result[0].should.have.property('net');
                result[0].should.have.property('date');
                result[0].should.have.property('type');
                result[0].should.have.property('sign');
                result[0].should.have.property('name');
                result[0].should.have.property('party');
                result[0].should.have.property('gross');
                result[0].should.have.property('balance');
                result[0].should.have.property('currency');
                result[0].should.have.property('custom_str1');
                result[0].should.have.property('custom_int1');
                result[0].should.have.property('custom_str2');
                result[0].should.have.property('custom_int2');
                result[0].should.have.property('custom_str3');
                result[0].should.have.property('custom_str4');
                result[0].should.have.property('custom_str5');
                result[0].should.have.property('custom_int3');
                result[0].should.have.property('custom_int4');
                result[0].should.have.property('custom_int5');
                result[0].should.have.property('description');
                result[0].should.have.property('funding_type');
                result[0].should.have.property('m_payment_id');
                result[0].should.have.property('pf_payment_id');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Get Weekly Transaction History', function(done) {
        this.timeout(5000);

        api.transactions.weekly()
        .then(result => {
            try {
                result[0].should.have.property('fee');
                result[0].should.have.property('net');
                result[0].should.have.property('date');
                result[0].should.have.property('type');
                result[0].should.have.property('sign');
                result[0].should.have.property('name');
                result[0].should.have.property('party');
                result[0].should.have.property('gross');
                result[0].should.have.property('balance');
                result[0].should.have.property('currency');
                result[0].should.have.property('custom_str1');
                result[0].should.have.property('custom_int1');
                result[0].should.have.property('custom_str2');
                result[0].should.have.property('custom_int2');
                result[0].should.have.property('custom_str3');
                result[0].should.have.property('custom_str4');
                result[0].should.have.property('custom_str5');
                result[0].should.have.property('custom_int3');
                result[0].should.have.property('custom_int4');
                result[0].should.have.property('custom_int5');
                result[0].should.have.property('description');
                result[0].should.have.property('funding_type');
                result[0].should.have.property('m_payment_id');
                result[0].should.have.property('pf_payment_id');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Get Monthly Transaction History', function(done) {
        this.timeout(5000);

        api.transactions.monthly()
        .then(result => {
            try {
                result[0].should.have.property('fee');
                result[0].should.have.property('net');
                result[0].should.have.property('date');
                result[0].should.have.property('type');
                result[0].should.have.property('sign');
                result[0].should.have.property('name');
                result[0].should.have.property('party');
                result[0].should.have.property('gross');
                result[0].should.have.property('balance');
                result[0].should.have.property('currency');
                result[0].should.have.property('custom_str1');
                result[0].should.have.property('custom_int1');
                result[0].should.have.property('custom_str2');
                result[0].should.have.property('custom_int2');
                result[0].should.have.property('custom_str3');
                result[0].should.have.property('custom_str4');
                result[0].should.have.property('custom_str5');
                result[0].should.have.property('custom_int3');
                result[0].should.have.property('custom_int4');
                result[0].should.have.property('custom_int5');
                result[0].should.have.property('description');
                result[0].should.have.property('funding_type');
                result[0].should.have.property('m_payment_id');
                result[0].should.have.property('pf_payment_id');
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });
});

describe('Subscriptions', function() {
    it('Fetch Subscription', function(done) {
        this.timeout(5000);

        api.subscriptions.fetch()
        .then(result => {
            try {
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Pause Subscription', function(done) {
        this.timeout(5000);

        api.subscriptions.pause()
        .then(result => {
            try {
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Unpause Subscription', function(done) {
        this.timeout(5000);

        api.subscriptions.unpause()
        .then(result => {
            try {
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Update Subscription', function(done) {
        this.timeout(5000);

        api.subscriptions.update()
        .then(result => {
            try {
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });

    it('Cancel Subscription', function(done) {
        this.timeout(5000);

        api.subscriptions.cancel()
        .then(result => {
            try {
                done();
            } catch(e) {
                done(e);
            };
        }, err => {
            try {
                done(err);
            } catch(e) {
                done(e);
            };
        });
    });
});

var api = {
    ping: async () => {
        var deferred = Q.defer();

        const response = await library.ping({
            'version':      config.version,
            'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
            'passphrase':   config.passphrase,
            'merchant-id':  config.merchantId
        });

        deferred.resolve(response);

        return deferred.promise;
    },
    validate: {
        sender: async () => {
            var deferred = Q.defer();

            const response = await library.validate.sender('www.payfast.co.za');

            deferred.resolve(response);

            return deferred.promise;
        },
        request: async () => {
            var deferred = Q.defer();

            const response = await library.validate.url({
                'm_payment_id':  'xxx',
                'pf_payment_id': 'xxx'
            });

            deferred.resolve(response);

            return deferred.promise;
        }
    },
    transactions: {
        daily: async () => {
            var deferred = Q.defer();

            const response = await library.transactions.daily({
                'date':         moment('2020-05-18').format('YYYY-MM-DD'),
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        weekly: async () => {
            var deferred = Q.defer();

            const response = await library.transactions.weekly({
                'date':         moment('2020-05-18').format('YYYY-MM-DD'),
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        monthly: async () => {
            var deferred = Q.defer();

            const response = await library.transactions.monthly({
                'date':         moment('2020-05-18').format('YYYY-MM'),
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        history: async () => {
            var deferred = Q.defer();

            const response = await library.transactions.history({
                'to':           moment().format('YYYY-MM-DD'),
                'from':         moment('2019-01-01').format('YYYY-MM-DD'),
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        }
    },
    subscriptions: {
        fetch: async () => {
            var deferred = Q.defer();

            const response = await library.subscriptions.fetch({
                'token':        config.token,
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        pause: async () => {
            var deferred = Q.defer();

            const response = await library.subscriptions.pause({
                'token':        config.token,
                'cycles':       1,
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        cancel: async () => {
            var deferred = Q.defer();

            const response = await library.subscriptions.cancel({
                'token':        config.token,
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        update: async () => {
            var deferred = Q.defer();

            var run_date = new Date();
                run_date = new Date(run_date.setDate(run_date.getDate() + 5));

            const response = await library.subscriptions.update({
                'token':        config.token,
                'cycles':       2,
                'amount':       15,
                'version':      config.version,
                'run_date':     moment(run_date).format('YYYY-MM-DD'),
                'frequency':    4,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        },
        unpause: async () => {
            var deferred = Q.defer();

            const response = await library.subscriptions.unpause({
                'token':        config.token,
                'version':      config.version,
                'timestamp':    moment().format('YYYY-MM-DDTHH:mm:ss'),
                'passphrase':   config.passphrase,
                'merchant-id':  config.merchantId
            });

            deferred.resolve(response);

            return deferred.promise;
        }
    }
};