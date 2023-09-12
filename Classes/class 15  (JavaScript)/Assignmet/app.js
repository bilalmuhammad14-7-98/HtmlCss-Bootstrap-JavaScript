document.write("<h1> Mathematics Expressions</h1>");

// ---------------------------------------Question 1 and Question 2---------------------

// Performing add, sub, multiplication , division and modulus operations

var num_one = +prompt("Please enter value 1");
var num_two = +prompt("Please enter value 2");

var sum = num_one + num_two;
var sub = num_one - num_two;
var mul = num_one * num_two;
var div = num_one / num_two;
var mod = num_one % num_two;

document.write(
  "<h2>" + "The sum of " + num_one + " and " + num_two + " is " + sum + "</h2>"
);

document.write(
  "<h2>" +
    "Result of subtracting " +
    num_one +
    " and " +
    num_two +
    " is " +
    sub +
    "</h2>"
);

document.write(
  "<h2>" +
    "Result of multiplying " +
    num_one +
    " and " +
    num_two +
    " is " +
    mul +
    "</h2>"
);

document.write(
  "<h2>" +
    "Result of dividing " +
    num_one +
    " and " +
    num_two +
    " is " +
    div +
    "</h2>"
);

document.write(
  "<h2>" +
    "Remainder of " +
    num_one +
    " and " +
    num_two +
    " is " +
    mod +
    "</h2>"
);

// -------------------------------------Question 3 --------------------------------------

var value;
document.write(
  "<h3>" + "Value after variable declaration is " + value + "</h3>"
);

var value = 3;
document.write("<h3>" + "Initial Value is " + value + "</h3>");

var inc_value = ++value;
document.write("<h3>" + "Value after increment is " + inc_value + "</h3>");

var add_value = inc_value + 7;
document.write("<h3>" + "Value after addition is " + add_value + "</h3>");

var dec_value = add_value - 1;
document.write("<h3>" + "Value after decrement is " + dec_value + "</h3>");

var rem = dec_value % 3;
document.write("<h3>" + "The remainder is " + rem + "</h3>");

// ====================================Question 4==========================================

var ticket_price = 600;
var no_of_tickets = +prompt("Please enter the number of tickets you want");
var sum = ticket_price * no_of_tickets;

document.write(
  "<h3>" +
    "Total costs to buy " +
    no_of_tickets +
    " tickets is " +
    sum +
    "</h3>"
);

// =======================================Question 5 ========================================

var table = +prompt("Please enter the table you want to print the table of");

for (let i = 1; i <= 10; i++) {
  document.write("<h3>" + table + " * " + i + " = " + table * i + "</h3>");
}

// =======================================Question 6=======================================

var temperature = +prompt("Please enter the temperature.");
var fahrenheit = (temperature * 9) / 5 + 32;
var celsius = ((temperature - 32) * 5) / 9;

document.write(
  "<h3>" + temperature + " °C is " + fahrenheit + " °F " + "</h3>"
);
document.write("<h3>" + temperature + " °F is " + celsius + " °C " + "</h3>");

// ======================================   Question 7 =====================================

var item_one_price = 500;
var item_two_price = 200;
var item_one_quantity = 2;
var item_two_quantity = 5;
var shipping_charges = 150;

var total_costs =
  item_one_price * item_one_quantity +
  item_two_quantity * item_two_price +
  shipping_charges;

document.write("<h3>" + "Total cost of your order is " + total_costs + "</h3>");

// ===========================================Question 8 ====================================

var total_marks = +prompt("Please enter your marks");
var marks_obtained = +prompt("Please enter the marks obtained");

var percentage = (marks_obtained / total_marks) * 100;

document.write("<h3>" + "Percentage is " + percentage + "%" + "</h3>");

// ==================================== Question 9 ==============================================

var dollars = 10;
var saudi_riyals = 25;

var total_price_pkr = dollars * 104 + saudi_riyals * 28;

document.write(
  "<h3>" + "Total currency in pkr is " + total_price_pkr + "</h3>"
);

// =======================================Question 10 =============================================

var num = +prompt("Enter a number");

var total = num + (5 * 10) / 2;

document.write("<h2>" + "Total is " + total + "</h2>");

// =======================================Question 11 ===============================================

var current_year = +prompt("Please enter the current year");
var birth_year = +prompt("Please enter your birth year");
var age = current_year - birth_year;

document.write(
  "<h2>" + "Their age is either " + age + " or " + ++age + "</h2>"
);

// =================================Question 12=============================

var radius = +prompt("Please enter the radius");
var pie = 3.142;
var circumference = 2 * pie * radius;
var area = pie * (radius * radius);

document.write("<h3>" + "Radius of a circle : " + radius + "</h3>");
document.write("<h3>" + "The circumfernece is : " + circumference + "</h3>");
document.write("<h3>" + "The area is : " + area + "</h3>");

// ==================================Question 13 =======================================

var value = +prompt("Please enter any number of your choice");

document.write("<h2>" + "The value of a is :" + value + "</h2>");

document.write("<h2>" + "The value of ++a is :" + ++value + "</h2>");
document.write("<h2>" + "Now the value of a is :" + value + "</h2>");

document.write("<h2>" + "The value of a++ is :" + value++ + "</h2>");
document.write("<h2>" + "Now the value of a is :" + value + "</h2>");

document.write("<h2>" + "The value of --a is :" + --value + "</h2>");
document.write("<h2>" + "Now the value of a is :" + value + "</h2>");

document.write("<h2>" + "The value of a-- is :" + value-- + "</h2>");
document.write("<h2>" + "Now the value of a is :" + value + "</h2>");

// =============================  Question 14 ======================================

var a = 2;
var b = 1;

document.write("<p>" + "--a: " + --a + "</p>");
document.write("<p>" + "--a - --b: " + (--a - --b) + "</p>");
document.write("<p>" + "--a - --b + ++b: " + (--a - --b + ++b) + "</p>");
document.write(
  "<p>" + "--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "</p>"
);

var result = --a - --b + ++b + b--;
document.write("<p>" + "Result: " + result + "</p>");

// --=========================================================================
