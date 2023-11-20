var getUl = document.getElementById("todo-ul");

var currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("loginuser").innerHTML = currentUser.username;

function addTask() {
  console.log("add task");
  // get attribute - returns value of that attribute
  //   var inp = document.getElementById("todoinp");
  //   var att = inp.getAttribute("name");

  //    has attribute - return true or false ()

  //   var inp = document.getElementById("todoinp");
  //   var att = inp.hasAttribute("name");

  //   set Attribute - sets attribute

  //   var inp = document.getElementById("todoinp");
  //   var att = inp.setAttribute("class", "inputfield");

  var inp = document.getElementById("todoinp");
  var listitem = document.getElementById("todo-item");
  var inpVal = inp.value;

  if (!inpVal) {
    return alert("Please add a task");
  }

  getUl.innerHTML += `<li
                class="list-group-item d-flex justify-content-between align-items-center"
                id="todo-item"
              >${inpVal}<div
                  class="buttons-group d-flex justify-content-center align-items-center"
                >
                  <button
                    type="button"
                    class="btn btn-primary edit-btn"
                    onclick="edit(this)"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary trash-btn"
                    onclick="handledelete(this)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              </li>`;

  console.log(inpVal, listitem, "inpVal");
  inp.value = "";
}

function edit(e) {
  var value = e.parentNode.parentNode.firstChild.textContent;
  var newText = prompt("Please enter the new text", value);

  if (newText == null) {
    return (e.parentNode.parentNode.firstChild.textContent = value);
  }
  console.log(newText, "edit");
  e.parentNode.parentNode.firstChild.textContent = newText;
}

function handledelete(e) {
  e.parentNode.parentNode.remove();
}

function handleLogout() {
  localStorage.removeItem("currentUser");
  location.href = "../index.html";
}
