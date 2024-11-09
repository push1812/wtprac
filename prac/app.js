document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the traditional way
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Store the data in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Perform AJAX POST request (this is a simulation; you'll need a server-side API to receive this data)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('User registered successfully!');
        }
    };

    // Send user data as JSON to the server
    xhr.send(JSON.stringify(userData));

    // Clear the form fields after submission
    document.getElementById('2prac').reset();
});
