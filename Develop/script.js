// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "abcdef"

  passwordText.value = password;

}

// var newPassword = prompt("Do you need a new password?");
// var confirmPassword = confirm("Would you like lowercase letters?")

// if (confirmPassword) {

  function getRandomLower() {
    return (Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return (Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return (Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  console.log(getRandomLower());
  console.log(getRandomUpper());
  console.log(getRandomNumber());
  console.log(getRandomSymbol());


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);