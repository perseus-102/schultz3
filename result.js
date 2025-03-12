// Array of correct answers (mirroring answers.js)
const correctAnswers = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Which programming language is used for web development?", answer: "JavaScript" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" }
];

// Read data from session storage
document.addEventListener("DOMContentLoaded", function () {
    const firstName = sessionStorage.getItem("firstName");
    const lastName = sessionStorage.getItem("lastName");

    if (firstName && lastName) {
        document.getElementById("studentName").textContent = `${firstName} ${lastName}`;
    } else {
        alert("Student data not found! Please complete previous steps.");
        return;
    }

    // Retrieve student's answers from session storage
    const studentAnswers = [
        sessionStorage.getItem("question1"),
        sessionStorage.getItem("question2"),
        sessionStorage.getItem("question3"),
        sessionStorage.getItem("question4"),
        sessionStorage.getItem("question5"),
        sessionStorage.getItem("question6")
    ];

    // Calculate score and generate feedback
    let totalPoints = 0;
    const feedbackTable = document.getElementById("feedbackTable");

    correctAnswers.forEach((item, index) => {
        const isCorrect = studentAnswers[index] === item.answer;
        const points = isCorrect ? 1 : 0;
        totalPoints += points;

        // Create a new row for feedback
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${isCorrect ? "Correct" : "Incorrect"}</td>
            <td>${item.answer}</td>
            <td>${points}</td>
        `;
        feedbackTable.appendChild(row);
    });

    // Calculate final grade percentage
    const finalGrade = ((totalPoints / correctAnswers.length) * 100).toFixed(2);
    document.getElementById("finalGrade").textContent = finalGrade;

    // Add a total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="3"><strong>Total</strong></td>
        <td><strong>${totalPoints}</strong></td>
    `;
    feedbackTable.appendChild(totalRow);
});
