// Start with DOMContentLoaded Event:
document.addEventListener('DOMContentLoaded', () => {
    // Form Selection:
    const form = document.getElementById('registration-form');
    // Feedback Division Selection:
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener:
    form.addEventListener('submit', (event) => {
        // Event Prevention:
        event.preventDefault();

        // Input Retrieval and Trimming:
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Retrieve values and apply .trim()
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Initialize Validation Variables:
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // Username Validation:
        // Check if username.length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation:
        // Check if email includes both '@' and '.' characters.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain "@" and ".").');
        }

        // Password Validation:
        // Ensure password.length is at least 8.
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // --- Displaying Feedback ---

        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful! 🎉';
            // Set style for success
            feedbackDiv.style.color = '#155724'; // Dark green text
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
            
            // Optionally clear the form after successful submission
            form.reset();

        } else {
            // Error messages
            // Join messages with <br> for HTML rendering
            feedbackDiv.innerHTML = messages.join('<br>');
            // Set style for error
            feedbackDiv.style.color = '#721c24'; // Dark red text
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
        }
    });
});