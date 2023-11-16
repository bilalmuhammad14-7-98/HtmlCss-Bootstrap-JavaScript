var getUl = document.getElementById("todo-ul");

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
                    onclick="location.href='../dashboard/dashboard.html'"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              </li>`;

  console.log(inpVal, listitem, "inpVal");
}

function edit(e) {
  var value = e.parentNode.parentNode.firstChild.textContent;
  var newText = prompt("Please enter the new text", value);
  console.log(newText, "edit");
  e.parentNode.parentNode.firstChild.textContent = newText;
}
