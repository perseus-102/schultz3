document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const question1 = document.querySelector("input[name='question1']:checked").value;
    const question2 = document.querySelector("input[name='question2']:checked").value;
    const question3 = document.querySelector("input[name='question3']:checked").value;
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("question1", question1);
    sessionStorage.setItem("question2", question2);
    sessionStorage.setItem("question3", question3);

    alert("Data saved successfully in session storage!");
});
