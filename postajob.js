// Get the form element
const form = document.querySelector("form");

// Add an event listener for form submission
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object from the form
    const formData = new FormData(form);

    // Convert FormData to an object
    let object = {};
    formData.forEach((value, key) => {
        if(object[key]) {
            if (!Array.isArray(object[key])) {
                object[key] = [object[key]];
            }
            object[key].push(value);
        } else {
            object[key] = value;
        }
    });

    // Convert the object to a JSON string
    const jsonData = JSON.stringify(object);

    fetch("./DB_APIs/postJob.php", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        // Navigate to another page only if the response status is 200
        if (data.statusCode === 200) {
            window.location.href = './index.php'; 
        } else {
            // Alert the user only if the operation wasn't successful
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Unknown error occurred.');
    });
});
