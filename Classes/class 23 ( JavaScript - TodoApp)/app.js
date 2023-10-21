var getUl = document.getElementById("list");

function addTodo() {
  console.log("addTodo");

  var input = document.getElementById("inp");
  var inputValue = input.value;
  console.log(inputValue);

  var li = document.createElement("li");
  li.innerHTML = inputValue;

  getUl.appendChild(li);
  input.value = "";

  var delBtn = document.createElement("button");
  var delTxt = document.createTextNode("Delete");
  delBtn.appendChild(delTxt);
  li.appendChild(delBtn);

  delBtn.setAttribute("onClick", "handleDelete(this)");

  var editBtn = document.createElement("button");
  var editBtnTxt = document.createTextNode("Edit");
  editBtn.appendChild(editBtnTxt);
  li.appendChild(editBtn);

  editBtn.setAttribute("onClick", "handleEdit(this)");
}

function handleDelete(e) {
  //   console.log(btn.parentNode);
  e.parentNode.remove();
}

function handleEdit(e) {
  console.log("handleEdit=>", e.parentNode);

  var newText = prompt("Please enter the new text");
  console.log("newText=>", newText);
  e.parentNode.firstChild.textContent = newText;
}
