// Authentication JavaScript
// Handles login and registration functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'secrets.html';
        return;
    }

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Handle registration form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Mock user database (in a real app, this would be on the server)
const users = JSON.parse(localStorage.getItem('users')) || [];

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!AppUtils.validateEmail(email)) {
        AppUtils.showAlert('Please enter a valid email address.', 'danger');
        return;
    }

    if (!AppUtils.validatePassword(password)) {
        AppUtils.showAlert('Password must be at least 6 characters long.', 'danger');
        return;
    }

    // Check if user exists and password matches
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('currentUser', email);
        AppUtils.showAlert('Login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'secrets.html';
        }, 1500);
    } else {
        AppUtils.showAlert('Invalid email or password.', 'danger');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!AppUtils.validateEmail(email)) {
        AppUtils.showAlert('Please enter a valid email address.', 'danger');
        return;
    }

    if (!AppUtils.validatePassword(password)) {
        AppUtils.showAlert('Password must be at least 6 characters long.', 'danger');
        return;
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        AppUtils.showAlert('User with this email already exists.', 'danger');
        return;
    }

    // Register new user
    const newUser = {
        email: email,
        password: password,
        secrets: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    AppUtils.showAlert('Registration successful! You can now login.', 'success');
    
    // Clear form
    document.getElementById('registerForm').reset();
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Utility functions for auth
const AppUtils = {
    showAlert: function(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="close" onclick="this.parentElement.remove()">
                <span>&times;</span>
            </button>
        `;
        
        const container = document.querySelector('.container');
        container.insertBefore(alertDiv, container.firstChild);
        
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    },

    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    validatePassword: function(password) {
        return password.length >= 6;
    }
};