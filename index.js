function calculateGrade(marks) {
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Marks should be between 0 and 100.";
    } else {
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60 && marks <= 79) {
            return 'B';
        } else if (marks >= 50 && marks <= 59) {
            return 'C';
        } else if (marks >= 40 && marks <= 49) {
            return 'D';
        } else {
            return 'E';
        }
    }
}

// Example usage:
let studentMarks = 85;
console.log("Student Grade:", calculateGrade(studentMarks)); // Output: A
