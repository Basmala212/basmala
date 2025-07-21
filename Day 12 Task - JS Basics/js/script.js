 /** 
**This is a important Comment
*! This is warning Comment
*? This is a question Comment
*TODO: This is a todo Comment
*/
//  متغيرات
let name = "Basmalla";
let age = 21;
let isStudent = true;

//  طباعة رسالة 
console.log("Hello, my name is " + name + " and I am " + age + " years old.");

//  زيادة فالقيمة بنسبة معينة
age += 5;
console.log("In 5 years, I will be " + age);

//  استخدام if / else لتصنيف العمر
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

//  ternary operator
let status = isStudent ? "Student" : "Not a student";
console.log("Are you a student? " + status);

//  switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Weekend!");
    break;
  default:
    console.log("Normal day.");
}

//  for loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// while loop
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// do...while loop
let x = 0;
do {
  console.log("Current value: " + x);
  x++;
} while (x < 3);

//  دالة عادية
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Basmalla"));

//  دالة سهمية
const square = (num) => num * num;
console.log("Square of 4 is: " + square(4));
// Object Declaration
let student = {
  name: "Basmalla",
  age: 21,
  isStudent: true
};
console.log("Student name: " + student.name);

// مصفوفة
let colors = ["Red", "Green", "Blue"];
console.log("First color is: " + colors[0]);

// alert و document.write
// alert("Welcome!");
document.write("This line is printed on the page.<br>");

//  استخدام slice و charAt و concat و length
let firstName = "John";
let lastName = "Doe";
let result = firstName.slice(0, 3) + lastName.charAt(0);
console.log("Result:", result);
let full = firstName.concat(" ", lastName);
console.log("Full name:", full);

console.log("Length:", full.length);

// parseInt 
let num1 = "10";
let num2 = 5;
let resultNum = parseInt(num1) * num2;
console.log("Result:", resultNum);

// special characters
let quote = "He said, \"JavaScript is great!\"";
let multiLine = "Line1\nLine2\tTabbed";
console.log(quote);
console.log(multiLine);

// charCodeAt
let word = "Web";
console.log("ASCII of first character:", word.charCodeAt(0));

// لعبة حجر ورقة مقص
let playerOne = "Rock";
let playerTwo = "Scissors";

if (playerOne === playerTwo) {
  console.log("It's a tie!");
} else if (
  (playerOne === "Rock" && playerTwo === "Scissors") ||
  (playerOne === "Scissors" && playerTwo === "Paper") ||
  (playerOne === "Paper" && playerTwo === "Rock")
) {
  console.log("Player One wins!");
} else {
  console.log("Player Two wins!");
}

//  التحقق من نوع الرقم إذا كان موجب . سالب. صفر . فردي .زوجي
let number = -3;
if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}

if (number % 2 === 0) {
  console.log("Number is even.");
} else {
  console.log("Number is odd.");
}
