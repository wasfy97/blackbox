function calculateGrade(mark) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
        return "Invalid input! Please enter a valid mark between 0 and 100.";
    }

    let grade;
    if (mark >= 91) {
        grade = "A+";
    } else if (mark >= 81) {
        grade = "A";
    } else if (mark >= 71) {
        grade = "B";
    } else if (mark >= 61) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

function showWelcomePrompt() {
    const name = prompt("Please enter your name:");
    if (name === null || name.trim() === "") {
        alert("Name cannot be empty! Please try again.");
        return;
    }

    const rawMark = prompt(`Hello ${name}! Please enter your mark:`);
    const mark = Math.floor(Number(rawMark));
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Invalid mark! Please enter a valid numeric value between 0 and 100.");
        return;
    }

    const grade = calculateGrade(mark);
    let resultMessage = `Hello ${name}, your mark is ${mark} and your grade is ${grade}.`;

    if (mark >= 50) {
        resultMessage += "\nCongratulations, you passed!";
    } else {
        resultMessage += "\nUnfortunately, you failed. Good luck next time!";
    }

    alert(resultMessage);
}
