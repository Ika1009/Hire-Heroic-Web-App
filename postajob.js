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
        if (data.message) {
            alert(data.message);
        }

        // If the insertion was successful, navigate to another page
        if (response.status === 200) {
            window.location.href = 'path_to_another_page.html'; // <-- Replace with the path to the desired page
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Uknown error occured');
    });
});
