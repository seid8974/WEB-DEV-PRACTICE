  // Submit secret JavaScript
// Handles submitting new secrets

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = '../index.html';
        return;
    }

    // Handle submit form
    const submitForm = document.getElementById('submitForm');
    if (submitForm) {
        submitForm.addEventListener('submit', handleSubmitSecret);
    }
});

function handleSubmitSecret(event) {
    event.preventDefault();
    
    const secretInput = document.getElementById('secretInput');
    const secretText = secretInput.value.trim();
    
    // Validate input
    if (!secretText) {
        showAlert('Please enter a secret before submitting.', 'warning');
        return;
    }
    
    if (secretText.length < 3) {
        showAlert('Your secret must be at least 3 characters long.', 'warning');
        return;
    }
    
    if (secretText.length > 500) {
        showAlert('Your secret is too long. Please keep it under 500 characters.', 'warning');
        return;
    }

    // Get current user and add secret
    const currentUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userIndex = users.findIndex(u => u.email === currentUser);
    
    if (userIndex !== -1) {
        // Initialize secrets array if it doesn't exist
        if (!users[userIndex].secrets) {
            users[userIndex].secrets = [];
        }
        
        // Add the new secret
        users[userIndex].secrets.push(secretText);
        
        // Save back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message
        showAlert('Your secret has been submitted successfully!', 'success');
        
        // Clear the form
        secretInput.value = '';
        
        // Redirect to secrets page after 2 seconds
        setTimeout(() => {
            window.location.href = 'secrets.html';
        }, 2000);
        
    } else {
        showAlert('Error: User not found. Please log in again.', 'danger');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}

function showAlert(message, type = 'info') {
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
}