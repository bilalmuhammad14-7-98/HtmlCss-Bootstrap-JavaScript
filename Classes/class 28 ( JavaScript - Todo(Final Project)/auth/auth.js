function handleSignUp() {
  console.log("signUp");
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password.length < 6) {
    alert("Your password must be at least 6 characters long");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  var userData = JSON.parse(localStorage.getItem("users"));
  var count = 0;
  var lastItem = userData ? userData[userData.length - 1] : null;

  console.log(userData, "userData----");
  // if (userData) {
  //   var lastItem = userData.pop();
  // }

  console.log(lastItem, "lastitem");

  var currentUser = {
    id: lastItem ? lastItem.id + 1 : (count = count + 1),
    username,
    email,
    password,
  };

  console.log(currentUser, userData, "currentUser-----");

  if (!userData) {
    userData = [currentUser];
  } else {
    userData.push(currentUser);
  }

  localStorage.setItem("users", JSON.stringify(userData));
}
