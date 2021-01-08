// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
// function writePassword()
//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//passwordText.value = password;
//}

//function getRandomLowercase() {
//return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}

//function getRandomUppercase() {
//return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}

//function getRandomNumber() {
//return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
//}

//function getRandomSymbol() {
//const symbols = '!@#$%^&*(){}[]=<>/,.';
//return symbols[Math.floor(Math.random() * symbols.length)];
//}

//var passwordCharset = 0;
//var newPassword = 0;

var getRandomLowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var getRandomUppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var getRandomNumberChar = "123456789"
var getRandomSymbolChar = "!@#$%^&*(){}[]=<>/,."

// function generatePassword()
  // var passwordLength = prompt("Your password must be between 8 and 128 characters");
  // if (passwordLength < 8, passwordLength > 128) {
    // alert("Your password did not meet the criteria, please do over")
  // } else {
    // return;
  // }

  // var writePassword = prompt("Do you need a new password?");
  // if (writePassword) {
    // alert("let's get started");
  // } else {
      // return;       
  // }

  var getRandomLowercase = prompt("Do you want lowercase letters?")
  if (getRandomLowercase) {
    //passwordCharset += getRandomLowercase;
    alert("ok, include random lowercase");
  } else {
    alert("skip random lowercase")
  }

  var getRandomUppercase = prompt("Do you want uppercase letters?");
  if (getRandomUppercase) {
    //passwordCharset += getRandomUppercase;
    alert("ok, include random uppercase");
  } else {
    alert("skip random uppercase")
  }

  var getRandomNumber = prompt("Do you want random numbers?")
  if (getRandomNumber) {
    //passwordCharset += getRandomNumber;
    alert("ok, include random numbers");
  } else {
    alert("skip random numbers")
  }

  var getRandomSymbol = prompt("Do you want random symbols?")
  if (getRandomSymbol) {
    //passwordCharset += getRandomSymbol;
    alert("ok, include random symbols");
  } else {
    alert("skip random symbols")
  }

  console.log(getRandomLowercase);
  console.log(getRandomUppercase);
  console.log(getRandomNumber);
  console.log(getRandomSymbol);
  console.log(passwordLength);


  //Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);