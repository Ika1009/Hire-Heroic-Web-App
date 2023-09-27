const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(form);

    try {
        const response = await fetch('./DB_APIs/login.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.status === 'success') {
            // Handle successful login
            //setSecureCookie("user_id", data.user_id, 1); // Set user_id as a cookie
            window.location.href = "report/report.php";
        } else {
            // Handle unsuccessful login
            alert(data.message);
        }
    } catch (error) {
        console.error('There was an error logging in:', error);
    }
});

// Commented this part of code because we don't want to work with cookies 

/*function setSecureCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + (value || "") + expires + "; path=/; secure; samesite=strict";
}*/
