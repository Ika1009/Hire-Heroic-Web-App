const signupForm = document.getElementsByTagName("form")[0];

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Retrieve form data
    let formData = new FormData(signupForm);
    
    // Call the PHP signup endpoint
    fetch('./DB_APIs/signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Signup successful!');
            // Redirect or do something else upon successful signup
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('There was an error during the signup:', error);
        alert('There was an error during the signup. Please try again.');
    });
});
