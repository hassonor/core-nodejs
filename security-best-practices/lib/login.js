const users = require('./users');

function login(req, res) {
    // Get user credentials
    const {email, password} = req.body;
    // Authenticate the user
    if (authenticate(email, password)) {
        // Mark user session as authenticated
        res.cookie('loggedInUser', email);
        // Get return address
        let returnTo;
        try {
            returnTo = JSON.parse(req.query.returnTo);
        } catch {
        }
        if (!returnTo || typeof returnTo.url !== 'string') {
            res.clearCookie('loggedInUser');
            throw new Error('Invalid returnTo object');
        }

        // Redirect to the return address
        res.redirect(returnTo.url);
    } else {
        // HTTP 401 when authentication fails
        res.sendStatus(401);
    }
}

function authenticate(email, password) {
    // Try each user
    for (let i = 0; i < users.length; ++i) {
        // If email and password match
        if (users[i].email === email && users[i].password === password) {
            // Authentication successful
            return true;
        }
    }
    // If no user matched, authentication failed
    return false;
}

module.exports = login;
