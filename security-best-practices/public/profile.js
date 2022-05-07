function displayProfile(json) {
    const [user] = json;

    // Check if user was found
    if (user) {
        // Display user information on the form
        document.getElementById('email').textContent = user.email;
        document.getElementById('address').textContent = user.address;
        document.getElementById('saveProfile').onclick = saveProfile;
    } else {
        // Display warning
        document.getElementById('email').value = 'Not Found';
    }
}

function saveProfile() {
    // Get user data form the form
    const user = {
        email: document.getElementById('email').textContent,
        address: document.getElementById('address').value
    };
    // Save user profile information
    const promise = fetch('/profile', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    // Bind user information to the form
    promise
        .then(res => res.json())
        .then(json => displayProfile(json));
}

// Check if the user is logged in (based on email cookie)
if (cookie.startsWith('loggedInUser=')) {
    // Hide the warning banner and show the form
    document.getElementById('notLoggedIn').className = 'invisible';
    document.getElementById('profile').className = 'visible';
    // Get user email from cookie
    const [nameAndValue] = cookie.split(';');
    const email = nameAndValue.slice('loggedInUser='.length);
    // Get user profile information
    const e = encodeURIComponent;
    const url = `/profile?field=${e('email')}&value=${e(email)}`;
    const promise = fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    });
    // Bind user information to the form
    promise
        .then(res => res.json())
        .then(json => displayProfile(json));
}
