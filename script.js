// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password ( text area )input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var emptyPassword = [];

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
  "}",
  "~",
];

// final password var
var finalPassword = "";

// User Input prompts and alerts
function generatePassword() {
  do
    var howMany = prompt(
      "How many characters would you like your password to be? (8-128)"
    );
  while (isNaN(howMany) || howMany < 8 || howMany > 128);
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
  // all declined reset
  if (
    lowerLs === false &&
    upperLs === false &&
    numericLs === false &&
    specialLs === false
  ) {
    alert("Please select at least 1 option!");
    return "";
  }
  if (lowerLs) {
    emptyPassword = emptyPassword.concat(alphaChars.slice(26));
  }

  if (upperLs) {
    emptyPassword = emptyPassword.concat(alphaChars.slice(0, 26));
  }

  if (numericLs) {
    emptyPassword = emptyPassword.concat(numericalChars);
  }

  if (specialLs) {
    emptyPassword = emptyPassword.concat(specialChars);
  }

  // calculate random password through iterating
  for (var i = 0; i < howMany; i++) {
    var randomCharacter = Math.floor(Math.random() * emptyPassword.length);
    finalPassword = finalPassword + emptyPassword[randomCharacter];
  }

  return finalPassword;
}
