function isPasswordCorrect(password) {
  errors = [];
  if (password.length < 6) {
    return false;
  }
  if (password.match(/[0-9]/i) < 1) {
    return false;
  }
  if (password.match(/[?.,!@#$%\^&\-]+/) < 1) {
    return false;
  } else {
    return true;
  }
}
console.log(isPasswordCorrect("infoShare")); //false
console.log(isPasswordCorrect("qwerty123")); //false
console.log(isPasswordCorrect("qwerty123!")); //true
console.log(isPasswordCorrect("!qw12")); //false
