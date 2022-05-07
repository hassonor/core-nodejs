// Return items where a field has specific value
function filter(items, field, value) {
    const results = [];
    for (let i = 0; i < items.length; ++i) {
        if (items[i][field] === value) {
            results.push(items[i]);
        }
    }
    return results;
}

// Retrieve array of parameters from the query string
function getParams(qs, params) {
    const results = [];
    for (let i = 0; i < params.length; ++i) {
        const value = qs.hasOwnProperty(params[i])
            ? qs[params[i]]
            : null;
        results.push(value);
    }
    return results;
}

// Deep merge two objects
function merge(target, source) {
    for (let prop in source) {
        if (typeof target[prop] === 'object' && typeof source[prop] === 'object') {
            merge(target[prop], source[prop]);
        }
        target[prop] = source[prop];
    }
    return target;
}

module.exports = {
    filter,
    getParams,
    merge
};
