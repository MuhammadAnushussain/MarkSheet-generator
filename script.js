// Get student name and father name from input
var studentName = prompt("Enter Your Name");
var fatherName = prompt("Enter Your Father Name");


// Display student and father name
document.write("Student Name = " + studentName + "<br>");
document.write("Father Name = " + fatherName + "<br>");

// Input marks for Subjects
var eng = parseFloat(prompt("Enter Your English Marks"));
var urdu = parseFloat(prompt("Enter Your Urdu Marks"));
var math = parseFloat(prompt("Enter Your Math Marks"));
var phy = parseFloat(prompt("Enter Your Physics Marks"));
var chem = parseFloat(prompt("Enter Your Chemistry Marks"));
var isl = parseFloat(prompt("Enter Your Islamiat Marks"));

// Calculate total obtained marks and percentage
var obtainedMarks = eng + urdu + math + phy + chem + isl;
var percentage = (obtainedMarks / 600) * 100;

// Display subject-wise marks
document.write("English Marks = " + eng + "<br>");
document.write("Urdu Marks = " + urdu + "<br>");
document.write("Mathematics Marks = " + math + "<br>");
document.write("Physics Marks = " + phy + "<br>");
document.write("Chemistry Marks = " + chem + "<br>");
document.write("Islamiat Marks = " + isl + "<br>");


// Display total obtained marks and percentage
document.write("Obtained Marks = " + obtainedMarks + "<br>");
document.write("Percentage = " + percentage.toFixed(2) + "%" + "<br>");

// Display the grade 
if (percentage <= 100 && percentage >= 80) {
    document.write("Grade: A+");
} else if (percentage <= 79 && percentage >= 70) {
    document.write("Grade: A");
} else if (percentage <= 69 && percentage >= 60) {
    document.write("Grade: B");
} else if (percentage <= 59 && percentage >= 50) {
    document.write("Grade: C");
} else if (percentage <= 49 && percentage >= 40) {
    document.write("Grade: D");
} else if (percentage <= 39 && percentage > 33) {
    document.write("Grade: E");
} else {
    document.write("Result: Fail");
};