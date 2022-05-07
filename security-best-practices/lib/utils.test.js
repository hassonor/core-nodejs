const {merge} = require('./utils');
const assert = require('assert');

describe('merge', function () {
    it('prevents prottype pollution', function () {
        const malicious = JSON.parse('{"__proto__":{"injected":0}}');
        merge({}, malicious);

        const o = {};
        assert.strictEqual(o.injected, undefined);
    })
})