function handleClick(event) {
  console.log(event);
  document.getElementById("inp").value += event;
}

function equals() {
  var a = document.getElementById("inp").value;
  console.log(a, "value");
  var sum = eval(a);
  console.log(sum, "sum");
  document.getElementById("inp").value = sum;
}

function handleClear() {
  document.getElementById("inp").value = "";
}

function delCharacter() {
  var b = document.getElementById("inp").value;
  document.getElementById("inp").value = b.slice(0, -1);
}
