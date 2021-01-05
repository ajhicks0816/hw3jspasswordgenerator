// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  function getRandomLower() {
    return(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUppder() {
    return(Math.floor(Math.random() *26) + 65);
  }

  function getRandomNumber() {
    return(Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  console.log(getRandomSymbol());



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  alert ("writePassword");
}
