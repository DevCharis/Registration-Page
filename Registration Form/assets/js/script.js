// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements by their IDs
    const registrationForm = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Add a submit event listener to the registration form
    registrationForm.addEventListener("submit", function (event) {
        let hasError = false; // Initialize a flag to track errors
        const errorMessages = []; // Initialize an array to store error messages

        // Check if the username input has a length less than 3 characters
        if (username.value.length < 3) {
            hasError = true; // Set the error flag to true
            errorMessages.push("Username must be at least 3 characters long.");
            document.getElementById("usernameError").textContent = "Username must be at least 3 characters long.";
        } else {
            document.getElementById("usernameError").textContent = ""; // Clear the error message
        }

        // Check if the email input is a valid email address using the isValidEmail function
        if (!isValidEmail(email.value)) {
            hasError = true;
            errorMessages.push("Invalid email address.");
            document.getElementById("emailError").textContent = "Invalid email address.";
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Check if the password input has a length less than 8 characters
        if (password.value.length < 8) {
            hasError = true;
            errorMessages.push("Password must be at least 8 characters long.");
            document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        } else {
            document.getElementById("passwordError").textContent = "";
        }

        // Check if the password and confirm password inputs match
        if (password.value !== confirmPassword.value) {
            hasError = true;
            errorMessages.push("Passwords do not match.");
            document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        } else {
            document.getElementById("confirmPasswordError").textContent = "";
        }

        // If any errors were found, prevent the form submission, display an alert with error messages
        if (hasError) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });

    // Function to validate email using a regular expression
    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }
});
