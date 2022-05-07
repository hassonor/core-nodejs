function logout(req, res) {
    // Destroy the session
    res.clearCookie('loggedInUser');
    // Redirect back to the home page
    res.redirect('/index.html');
}

module.exports = logout;
