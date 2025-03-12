
document.addEventListener("DOMContentLoaded", function () {
    const firstName = sessionStorage.getItem("firstName");
    const lastName = sessionStorage.getItem("lastName");

    if (firstName && lastName) {
        document.getElementById("studentName").textContent = `${firstName} ${lastName}`;
    } else {
        alert("Student data not found! Please complete Page 1 first.");
    }
});
document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const question4 = document.querySelector("input[name='question4']:checked").value;
    const question5 = document.querySelector("input[name='question5']:checked").value;
    const question6 = document.querySelector("input[name='question6']:checked").value;
    sessionStorage.setItem("question4", question4);
    sessionStorage.setItem("question5", question5);
    sessionStorage.setItem("question6", question6);

    alert("Data saved successfully in session storage!");
});
