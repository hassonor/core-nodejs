// Parse the query string
const queryString = new URLSearchParams(window.location.search);
// Retrieve the return address
const returnTo = queryString.get('returnTo');
// Append it to the login form action URL
const loginFormAction = '/login?returnTo=' + encodeURIComponent(returnTo);
// Update the login form action
document.getElementById('login').action = loginFormAction;
