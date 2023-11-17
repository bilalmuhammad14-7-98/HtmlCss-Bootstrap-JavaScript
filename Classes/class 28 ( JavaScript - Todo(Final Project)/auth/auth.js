function handleSignUp() {
  console.log("signUp");
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var obj = {
    username,
    email,
    password,
    confirmPassword,
  };

  console.log(obj, "data-----");
}
