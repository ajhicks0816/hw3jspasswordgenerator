// Assignment Code
var generateBtn = document.querySelector("#generate");
if (generateBtn) = 

// Write password to the #password input
function writePassword() {

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //var password = "abcdef"

  //passwordText.value = password;

// var newPassword = prompt("Do you need a new password?");

var getRandomLowercase = confirm("Would you like lowercase letters?")
if (getRandomLowercase) {
  alert("ok, include random lowercase");
}
else {
  alert("skip random lowercase")
}

var getRandomUppercase = confirm("Would you like uppercase letters?");
if (getRandomUppercase) {
  alert("ok, include random uppercase");
}
else {
  alert("skip random uppercase")
}

var getRandomNumber = confirm("Would you like random numbers?")
if (getRandomNumber) {
  alert("ok, include random numbers");
}
else {
  alert("skip random numbers")
}

var getRandomSymbol = confirm("Would you like random symbols?")
if (getRandomSymbol) {
  alert("ok, include random symbols");
}

else {
  alert("skip random symbols")
}






function getRandomLowercase() {
  return (Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return (Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return (Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLowercase());
console.log(getRandomUppercase());
console.log(getRandomNumber());
console.log(getRandomSymbol());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);