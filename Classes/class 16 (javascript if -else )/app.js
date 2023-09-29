// =====================chapter: 8-11======================
//Question 01
var userName = prompt("Please enter your name:");
if (userName !== null && userName !== "") {
  var greeting = "Hi, " + userName + "!";
  alert(greeting);
} else {
  alert("You didn't enter a name. Please try again.");
}

//Question 02
var userInput = prompt("Enter a number to display its multiplication table:");
var number;
if (userInput === null || userInput === "") {
    number = 5;
} else {
    number = (userInput);
    if (isNaN(number)) {
        alert("Invalid input. Using 5 as the default.");
        number = 5;
    }
}
document.write("<h1>" + "Multiplication Table of " + number + "</h1>");
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write( number + " x " + i +"=" + result +"<br>");
}

//Question 03
var cityName = prompt("Enter the name of your city:");
if (cityName !== null && cityName === "karachi") {
alert("Welcome to the city of lights!");
} else {
alert("Welcome to " + cityName);
}

//Question 04
var gender = prompt("Please enter your gender: ");
gender = gender.toLowerCase();
if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Sorry, we don't recognize that gender.");
}

//Question 06
var maxAge = prompt("Enter the maximum age:");
var currentAge = prompt("Enter your current age:");
if (currentAge <= maxAge) {
  alert("You are welcome.");
} else {
  alert("Sorry, you are not welcome.");
}

//Question 13
var teamAName = prompt("Enter the name of Team A:");
var teamAScore = parseInt(prompt("Enter the total score of Team A:"));

var teamBName = prompt("Enter the name of Team B:");
var teamBScore = parseInt(prompt("Enter the total score of Team B:"));

var result;

if (teamAScore > teamBScore) {
  result = teamAName + " has won the game!";
} else if (teamBScore > teamAScore) {
  result = teamBName + " has won the game!";
} else {
  result = "It's a tie!";
}
alert(result);




// =====================chapter: 12-13======================

//Question 01
var number = prompt("Enter a number:");
if (number % 3 === 0) {
} else {
  alert("The number is not divisible by 3.");
}

//Question 02
var number = prompt("Enter a number:");
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

//Question 03
var age = prompt("Enter your age:");
if (age > 18) {
  alert("You are old enough");
} else {
  alert("You are too young");
}

//Question 04
var yourName = "hasan"; 
var userName = prompt("Please enter your name:");
if (userName === yourName) {
  alert("Hello, " + userName + "! You have the same name as me!");
}

//Question 05
var number = prompt("Enter a number:");
if (number % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}

//Question 07
var number1 = +prompt("Enter the first number:");
var operator = prompt("Enter an operator (+, -, *, /, %):");
var number2 = +prompt("Enter the second number:");
var result;
switch (operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      result = "Division by zero is not allowed";
    }
    break;
  case '%':
    if (number2 !== 0) {
      result = number1 % number2;
    } else {
      result = "Modulus by zero is not allowed";
    }
    break;
  default:
    result = "Invalid operator";
}
alert("Result: " + result);


