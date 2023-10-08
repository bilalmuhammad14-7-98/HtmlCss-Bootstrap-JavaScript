// ----Question 1

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br />");
}

for (var i = 0; i < fruits.length; i++) {
  document.write("Elements at index" + i + "is" + fruits[i] + "<br />");
}

// ------Questions 2-------

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userinput = prompt("Please enter a cake name");
console.log(userinput, "user input");

var bool = false;

for (var i = 0; i < A.length; i++) {
  if (userinput === A[i]) {
    bool = true;
    alert(userinput + "is available at index " + i);
    break;
  }
}

if (bool == false) {
  alert("we are sorry the item you are looking for is not available");
}

// ------Question 3

var scores = [12, 45, 3, 22, 34, 50];

var userValue = +prompt(
  "Please enter the nunber you want to loop through the scores"
);

for (var i = 1; i <= userValue; i++) {
  document.write(scores[i] + "<br />");
}

// ----Questions 4 nested loops----
// a

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br />");
}

// b

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br />");
}

// c

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br />");
}

// -Question 5

function sum(a, b, c) {
  if (c == "+") {
    var res = a + b;
    return res;
  } else if (c == "-") {
    var res = a - b;
    return res;
  } else if (c == "*") {
    var res = a * b;
    return res;
  } else if (c == "/") {
    var res = a / b;
    return res;
  }
}

var num = sum(4, 2, "-");
document.write(num);

//  Question 6

function celsiusToFahrenheit(a) {
  var celsius = a;
  var celsiusToFahrenheit = celsius + 7 / 4 + 10;
  return celsiusToFahrenheit;
}

const FarhenHiet = celsiusToFahrenheit(20);
document.write("Fahrenheit" + FarhenHiet + "°");

function fahrenHietToCelsius(b) {
  var f = b;
  var convertedFahrenheit = f + 10 / 4;
  return convertedFahrenheit;
}

const celsius = fahrenHietToCelsius(100);
document.write("celsius" + celsius + " degrees");
