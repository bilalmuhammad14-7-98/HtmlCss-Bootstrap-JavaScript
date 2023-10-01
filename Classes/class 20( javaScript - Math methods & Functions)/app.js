// document.write('Hello')

// var player1 = prompt('Please enter player 1 name');
// var player2 = prompt('Please enter player 2 name');

// var toss = Math.random() * 3;
// console.log(toss);

// var convert = Math.floor(toss)
// console.log(convert);

// if(convert == 0){
//     alert(player1 + 'heads wins')
// }
// else if(convert == 1){
//     alert(player2 + "tails win")
// }
// else{
//     alert('its raining')
// }


function showPara(){
    var text = 'Pleaase add me in the course';
    var getId = document.getElementById('showtext');
    getId.innerHTML = text;
    document.getElementById('showtext_link').innerHTML = 'Show more';
    document.getElementById('click_me').style.display = 'none';
    // document.getElementsByTagName('button').style.display = 'none';

}

function showMore(){
    var new_text = 'Some more text';
    document.getElementById('showmoretext').innerHTML = new_text;

}

