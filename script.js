// Assignment Code
function generatePassword() {

  console.log("Hi mom and dad");
  //Possible characters ordered into arrays by type
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //Arrays are joined together into a string
  var numStr = numeric.join("");
  console.log(numStr);
 
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var upStr = upperCase.join("");
  console.log(upStr);

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lowStr = lowerCase.join("");
  console.log(lowStr);

  var specialChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", ".", ",", "?", "/", "[", "]", "{", "}", "|"];
  var specStr = specialChar.join("");
  console.log(specStr);

  var possibleChar = [];

  var generatedPassword = [];



//User is prompted for their desired password length
var passwordLength = window.prompt("How many characters do you want in your password? Pick a number between 8 and 128.");
if (passwordLength < 8 || passwordLength > 128) {
  //The following appears if the number chosen is not in the given range and kicks users back to start
   window.alert("Please choose a number within the given range.");
   return generatePassword();
} else if (isNaN(passwordLength)) {
   window.alert("Please choose a valid number.")
   return generatePassword();
} else {
   window.confirm("Your password will be " + passwordLength + " characters long.")
}


console.log(passwordLength);

//User is asked if they would like lowercase letters included in the password.
//If yes, the proper array is added to the string of possible characters.
var hasLowerCase = confirm("Do you want your password to include lowercase characters?"); 
if (hasLowerCase) {
  //possibleChar += lowerCase;
  possibleChar +=lowStr;
  window.alert("Your password will include lowercase characters.");
} else {
  window.alert("Your password will not include any lowercase characters.")
}

console.log(possibleChar);

//User is asked if they would like uppercase letters included in the password.
//If yes, the proper array is added to the string of possible characters.
var hasUpperCase = confirm("Do you want your password to include uppercase characters?"); 
if (hasUpperCase) {
 // possibleChar += upperCase;
  possibleChar += upStr;
  window.alert("Your password will include uppercase characters.");
} else {
  window.alert("Your password will not include any uppercase characters.")
};

console.log(possibleChar);

//User is asked if they would like numbers included in the password.
//If yes, the proper array is added to the string of possible characters.
var hasNumerals = confirm("Do you want your password to include numeric characters?"); 
if (hasNumerals) {
  //possibleChar += numeric;
  possibleChar += numStr;
  window.alert("Your password will include numeric characters.");
} else {
  window.alert("Your password will not include any numeric characters.")
};

console.log(possibleChar);

//User is asked if they would like special characters included in the password.
//If yes, the proper array is added to the string of possible characters.
var hasSpecial = confirm("Do you want your password to include special characters?"); 
if (hasSpecial) {
  //possibleChar += specialChar;
  possibleChar += specStr;
 window.alert("Your password will include special characters.");
} else {
  window.alert("Your password will not include any special characters.")
}

console.log(possibleChar);

//To generate the password, the loop randomly picks a number between 0 and the length of possible characters, and adds the value of that index to the generated password variable. 
for (let i = 0; i < passwordLength; i++) {
generatedPassword += possibleChar[Math.floor(Math.random() * possibleChar.length)];
}
console.log(generatedPassword);
return generatedPassword;
};


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
