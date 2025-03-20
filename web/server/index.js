document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is already registered (using localStorage as a simple method)
    if (localStorage.getItem("userLoggedIn")) {
        window.location.href = "./public/html/inbox.html"; // Redirect if logged in
        return;
    }

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const age = document.getElementById("age").value;

        const userData = { username, age };

        try {
            const response = await fetch("http://localhost:3000/register-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (response.ok) {
                // Save login state in localStorage
                localStorage.setItem("userLoggedIn", "true");

                // Redirect to another page
                window.location.href = "./public/html/inbox.html";
            } else {
                alert(result.message || "Failed to register user.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to register user.");
        }
    });
});
