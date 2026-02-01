// Secrets page JavaScript
// Handles displaying and managing secrets

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = '../index.html';
        return;
    }

    // Load and display secrets
    loadSecrets();

    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});

function loadSecrets() {
    const secretsContainer = document.getElementById('secretsContainer');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Get all secrets from all users (anonymous sharing)
    let allSecrets = [];
    
    users.forEach(user => {
        if (user.secrets && user.secrets.length > 0) {
            allSecrets = allSecrets.concat(user.secrets);
        }
    });

    // Add some default secrets if none exist
    if (allSecrets.length === 0) {
        allSecrets = [
            "Jack Bauer is my hero.",
            "I secretly love pineapple on pizza.",
            "I still sleep with a teddy bear."
        ];
    }

    // Clear container and display secrets
    secretsContainer.innerHTML = '';
    
    if (allSecrets.length > 0) {
        allSecrets.forEach((secret) => {
            const secretElement = document.createElement('p');
            secretElement.className = 'secret-text secret-item';
            secretElement.textContent = secret;
            secretsContainer.appendChild(secretElement);
        });
    } else {
        const noSecretsMsg = document.createElement('p');
        noSecretsMsg.className = 'lead';
        noSecretsMsg.textContent = 'No secrets have been shared yet. Be the first to submit one!';
        secretsContainer.appendChild(noSecretsMsg);
    }
}

function handleLogout(event) {
    event.preventDefault();
    
    // Clear user session
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUser');
    
    // Show logout message
    showAlert('You have been logged out successfully.', 'info');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
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