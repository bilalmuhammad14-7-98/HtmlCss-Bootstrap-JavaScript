// Question 1

var eng_students = [];
document.write(eng_students);

// Question 2

var maths_students = [{}];
document.write(maths_students);
console.log(maths_students, 'array')

// Question 3

var strings_arr = ['dan','joe', 'sam'];
document.write(strings_arr);

// Question 4

var num_arr = [1,2,4,5,6,7,]
document.write(num_arr);

// Question 5

var boolean_arr = [true, false]
document.write(boolean_arr);

// Question 6

var mixed_arr = [true, false, 1,2,3,4, 'dan', 'sam']
document.write(mixed_arr);


// Question 7

var mobile_networks = ['telenor', 'jazz', 'warid', 'zong']
document.write(mobile_networks);

// Question 8

var qualifications = ['ssc', 'hsc', 'bcs', 'fsc', 'bcom'];
document.write(
    '<h1>'+ 'Qualifications' + '</h1>'
    + '<ol type="1">'
    +'<li>'  + qualifications[0] + '</li>'
    +'<li>'  + qualifications[1] + '</li>'
    +'<li>'  + qualifications[2] + '</li>'
    +'<li>'  + qualifications[3] + '</li>'
    +'<li>'  + qualifications[4] + '</li>'
+'</ol>'
)

// Question 9

var movies = ['Avengers:Age of Ultron', 'Spectre', 'Jurassic World', 'Inside out'];
document.write(
    '<h1>'+ 'Top Movies of 2015' + '</h1>'
    + '<ol type="1">'
    +'<li>'  + movies[0] + '</li>'
    +'<li>'  + movies[1] + '</li>'
    +'<li>'  + movies[2] + '</li>'
    +'<li>'  + movies[3] + '</li>'
+'</ol>'
)

document.write('Length of the array is' + " " + movies.length + '<br>');

// Question 10

var cars = ['civic', 'mercedes', 'corolla', 'mehran'];

document.write('First index of the array:' + " " + cars.indexOf('civic') + '<br>' );
document.write('Cars at First index of the array:' + " " + cars[0] + '<br>' );
document.write('Last index of the array:' + " " + cars.indexOf('mehran') + '<br>' );
document.write('Cars at Last index of the array:' + " " + cars[3] + '<br>' );

// Question 11

var student_names = ['Michael', 'John', 'Tony'];
var scores = [320, 230, 480];

var Michael_percentage = (scores[0] / 500) * 100;
var John_percentage = (scores[1] / 500) * 100;
var Tony_percentage = (scores[2] / 500) * 100;

document.write('Score of ' + student_names[0] + ' is ' +  scores[0] + '.' + 'Percentage: ' + Michael_percentage + '<br>' );
document.write('Score of ' + student_names[1] + ' is ' +  scores[1] + '.' + 'Percentage: ' + John_percentage  + '<br>');
document.write('Score of ' + student_names[2] + ' is ' +  scores[2] + '.' + 'Percentage: ' + Tony_percentage + '<br>' );

// Question 12

var colors = ['red', 'green', 'blue'];
var newcolor = prompt('Enter the color you want to add the beginning of the array');

document.write('Colors Array' + ' ----'  + colors + '<br>');
colors.unshift(newcolor);
document.write('Colors Array after user added new value at the beginning'  + " -----" + colors + '<br>')

var newcolor = prompt('Enter the color you want to add the end of the array');
colors.push(newcolor);
document.write('Colors Array after user added new value at the end'  + " -----" + colors + '<br>')

var newcolor = prompt('Enter two more color you want to add the start of the array');
colors.unshift(newcolor);
document.write('Colors Array after user added two new value at the beginning'  + " -----" + colors + '<br>')

colors.shift();
document.write('Colors Array after user deleted value at the beginning'  + " -----" + colors + '<br>')

colors.pop();
document.write('Colors Array after user deleted value at the end'  + " -----" + colors + '<br>');

var index_no = +prompt('Enter the index you want to add the value');
var items = prompt('Enter the items you want to add');
colors.splice(index_no, 0, items);
document.write('Colors Array after user added value  at ' + index_no  + " -----" + colors + '<br>');

var index_no = +prompt('Enter the index you want to delete the value');
var items = +prompt('Enter the items you want to delete');
colors.splice(index_no, items);
document.write('Colors Array after user deleted value  at ' + index_no  + " -----" + colors + '<br>');


















