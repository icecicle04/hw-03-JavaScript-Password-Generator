// Assignment Code
var generateBtn = document.querySelector("#generate");
// additional vars for chosen characters
var alphaChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numericalChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// final password var
var finalPassword = "";

// test console logs
console.log(alphaChars[2]);
console.log(numericalChars[6]);
console.log(specialChars[3]);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// User Input prompts and alerts
function generatePassword() {
  do
    var howMany = prompt(
      "How many characters would you like your password to be? (8-128)"
    );
  while (howMany < 8 || howMany > 128);
  var lowerLs = confirm(
    "would you like lowercase characters in your password?"
  );
  var upperLs = confirm(
    "would you like uppercase characters in your password?"
  );
  var numericLs = confirm(
    "would you like numeric characters in your password?"
  );
  var specialLs = confirm(
    "would you like special characters in your password?"
  );
  if (
    lowerLs === false &&
    upperLs === false &&
    numericLs === false &&
    specialLs === false
  )
    alert("Please select at least 1 option!");

  if (lowerLs === true) {
    password = password + alphaChars.slice(26);
  }

  if (upperLs === true) {
    password = password + alphaChars.slice(0, 26);
  }

  console.log(howMany);
  console.log(lowerLs);
  console.log(upperLs);
  console.log(numericLs);
  console.log(specialLs);
  console.log(password);

  // function generatedPassword() {
  //   if (lowerLs === true) {
  //     var lowerCharPass = Math.random.alphaChars[("a", "x")];
  //   }
  //   console.log(lowerCharPass);
  //   if (condition) {
  //   }
}

// var lowerCaseCharPassword = newNewPassword;
// console.log(newNewPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
