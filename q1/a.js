// Grabbing elements from the DOM
var usernameMessage = document.getElementById('usernameMessage');
var passwordMessage = document.getElementById('passwordMessage');
var message = document.getElementById('message');
var loginBtn = document.getElementById('login-btn');
var loginForm = document.getElementById('loginForm');

// Change the color of the login button
loginBtn.style.backgroundColor = '#3b82f6';

// Add event listener to the form submit event
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Getting the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Resetting previous messages
    usernameMessage.style.display = 'none';
    passwordMessage.style.display = 'none';
    message.textContent = '';

    // Input validation
    var isValid = true;

    // Check if username is empty or incorrect
    if (username === "") {
        usernameMessage.textContent = "Username is Incorrect";
        usernameMessage.style.display = 'block';
        isValid = false;
    }

    // Check if password is empty or incorrect
    if (password === "") {
        passwordMessage.textContent = "Password is Incorrect";
        passwordMessage.style.display = 'block';
        isValid = false;
    }

    // If both fields are filled
    if (isValid) {
        // Check if the credentials match
        if (username === "admin" && password === "Dolphin") {
            message.textContent = "Login successful!";
            message.style.color = 'green';
        } else {
            // If credentials don't match, show error
            message.textContent = "Invalid credentials!";
            message.style.color = 'red';
        }
    }
});
