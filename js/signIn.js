function formValidate() {
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("Password").value;
  let error = document.getElementById("error");
  let text = "";

  if (emailValue.length < 10 || emailValue.indexOf("@") === -1) {
    text = "please enter valid e-mail";
    error.innerHTML = text;
    return false;
  } else if (passwordValue.length < 11) {
    text = "please enter valid password";
    error.innerHTML = text;
    return false;
  } else {
    return true;
  }
}
