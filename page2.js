// Populate the student's first and last name from session storage
document.addEventListener("DOMContentLoaded", function () {
    const firstName = sessionStorage.getItem("firstName");
    const lastName = sessionStorage.getItem("lastName");

    if (firstName && lastName) {
        document.getElementById("studentName").textContent = `${firstName} ${lastName}`;
    } else {
        alert("Student data not found! Please complete Page 1 first.");
    }
});

// Handle the form submission and save quiz answers in session storage
document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Read additional quiz answers
    const question4 = document.querySelector("input[name='question4']:checked").value;
    const question5 = document.querySelector("input[name='question5']:checked").value;
    const question6 = document.querySelector("input[name='question6']:checked").value;

    // Store additional answers in session storage
    sessionStorage.setItem("question4", question4);
    sessionStorage.setItem("question5", question5);
    sessionStorage.setItem("question6", question6);

    alert("Data saved successfully in session storage!");
});
