// var email = prompt('Please enter your email');

// var regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// if (email == 'abc@gmail.com' || email == 'bilal@gmail.com' || email == "hassan@gmail.com"){
//     alert('Login Successfully');
// }
// else{
//     alert('Please enter valid credentials')
// }

// if(regex.test(email)){
//     alert('valid email')
// }else{
//     alert('Invalid email');
// }

// var userInput = +prompt("Enter the number for table:")
// var abc = +prompt("Enter multiplication value: ")

// for(var i=0; i<=abc; i++){
//     document.write(userInput + "X" + i + "=" + userInput*i + "<br>")
// }

// var arr = ['iphone', 'mac book', 'airpod']

// document.write('<select>')

// for (var i=0; i < arr.length; i++){
//     document.write(
//             '<option>' + arr[i] + '</option>'
//     )
    
// }

// document.write('</select>')

// for(var i=1 ; i < 100 ; i= i + 10){

//     for(var j=i; j < i + 10; j++){
//         document.write(j);
//     }

//     document.write('<br>')
// }

// for (var i = 5; i>=1 ; i--){
//   for (var j = 5; j>=i ; j--){
//     document.write(j + " ")
//   }
//   document.write("<br>")
// }

// for (var i=1; i <= 5 ; i++){
//     for (var j=i++; j<=++i; j++ ){
//      document.write(j + " ")
//     }
//     document.write("<br>")
// }

//  ----Question 1

document.write('First Example' + '<br>')

for (var i=1; i<=5; i++){
    // document.write(i);

    for(var j=1; j<=i; j++){
        document.write(j);
    }

    document.write('<br>');
}

document.write('Second Example' + '<br>');

for (var i = 1; i<=5; i++){
    for(var j=1; j <=5; j++){
        document.write(j);
    }

    document.write('<br>')
}

document.write('Third Example' + '<br>');

for (var i=5 ; i>=1; i--){
    for (var j = 5 ; j >=i; j--){
        document.write(j);
    }

    document.write('<br>')
}

document.write('Fourth Example' + '<br>');

for (var i=1; i<=5; i++){
    for (var j=1 ; j<=i; j++){
        document.write(i);
    }

    document.write('<br>')
}

document.write('Five Example' + '<br>');

for (var i=1; i<=5; i++){
    for (var j=5 ; j>=i; j--){
        document.write('*');
    }

    document.write('<br>')
}


document.write('Six Example' + '<br>');

for (var i=1; i<=5; i++){
    for (var j=1 ; j<=i; j++){
        document.write('*');
    }

    document.write('<br>')
}

