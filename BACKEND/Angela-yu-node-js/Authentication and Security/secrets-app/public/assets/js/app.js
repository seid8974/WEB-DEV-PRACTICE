// Main application JavaScript
// This file handles general app functionality

// Check if user is already logged in when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check localStorage for user session
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (isLoggedIn === 'true') {
        // If user is logged in, redirect to secrets page
        window.location.href = 'pages/secrets.html';
    }
});

// Utility functions
const AppUtils = {
    // Show alert messages
    showAlert: function(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
            </button>
        `;
        
        // Insert at the top of the container
        const container = document.querySelector('.container') || document.body;
        container.insertBefore(alertDiv, container.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    },

    // Simple email validation
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Simple password validation
    validatePassword: function(password) {
        return password.length >= 6;
    }
};