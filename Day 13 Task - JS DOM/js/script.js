//  Objects
let person = {
  name: "Basmalla",
  age: 21,
  isStudent: true
};

console.log("Name:", person.name);
console.log("Age:", person["age"]);

person.age = 22;
person.city = "fayoum";
console.log("City:", person.city);

delete person.isStudent;
console.log(person);

// Objects & Arrays
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits);
console.log("Number of items:", fruits.length);
console.log("First fruit:", fruits[0]);

fruits.push("mango");
fruits.pop();
fruits.splice(1, 1);
console.log("Fruits:", fruits);

fruits.forEach(function (fruit, index) {
  console.log(index + 1 + ": " + fruit);
});

// JSON
let jsonPerson = JSON.stringify(person);
console.log("JSON Format:", jsonPerson);

// Object Naming Conventions
let camelCaseObject = { firstName: "Ali" };
let PascalCaseObject = { FirstName: "Ali" };
let snake_case_object = { first_name: "Ali" };

// String Methods
let message = "JavaScript is powerful!";
console.log("Length:", message.length);
console.log("UpperCase:", message.toUpperCase());
console.log("LowerCase:", message.toLowerCase());
console.log("Includes 'powerful':", message.includes("powerful"));
console.log("Index of 'is':", message.indexOf("is"));
console.log("Substring (0,10):", message.substring(0, 10));

//  DOM (Document Object Model)
let heading = document.getElementById("main-title");
let items = document.getElementsByClassName("item");
let firstParagraph = document.querySelector("p");
let allButtons = document.querySelectorAll("button");

heading.innerHTML = "Welcome to my site";
firstParagraph.innerText = "This is a DOM example.";

let newDiv = document.createElement("div");
newDiv.textContent = "New element added";
document.body.appendChild(newDiv);

newDiv.setAttribute("class", "custom-div");

let textNode = document.createTextNode("Inner text");
newDiv.appendChild(textNode);

// newDiv.remove();
// document.body.removeChild(newDiv);

// Events
let btn = document.querySelector("#click-me");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});
