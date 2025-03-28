function generatePassword() {
  length = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
  let password = "";
  for (let i = 0; i < length; i++) {
    let charCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
    password += String.fromCharCode(charCode);
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  let passwordField = document.getElementById("password");
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
  } else {
    alert("Пароль не було скопійовано");
  }
}
