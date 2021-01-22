// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "'", ".", ":", "<", ">", "=", "?", ",", "/", "{", "}", "[", "]", "|"];
var characterPool;

function generatePassword()  {
  var passwordLength = window.prompt("How Many Characters?", "8 - 128");
  if (passwordLength > 128 || passwordLength < 8) {alert("Please choose between 8 & 128", "8 - 128"); generatePassword();
}  else {
  var passwordUpper = window.confirm("Do You Want Uppercase Letters?"); 
  var passwordLower = window.confirm("Do You Want Lowercase Letters?");
  var passwordNumeric = window.confirm("Do you want Numbers?");
  var passwordSpecial = window.confirm("Do you want special characters?");};

//IF THEY CHOOSE ALL 4 OPTIONS
  if (!passwordUpper && !passwordLower && !passwordNumeric && !passwordSpecial) {alert("Please choose one character set"); generatePassword();
  } else if
    (passwordUpper && passwordLower && passwordNumeric && passwordSpecial) {
    characterPool = uppercaseLetters.concat(lowercaseLetters, numbersList, specialCharacters);
    //IF THEY CHOOSE 3 OF THE OPTIONS
  } else if (passwordUpper && passwordLower && passwordNumeric && !passwordSpecial) {characterPool = uppercaseLetters.concat(lowercaseLetters, numbersList);
  } else if (passwordUpper && passwordLower && !passwordNumeric && passwordSpecial) {
    characterPool = uppercaseLetters.concat(lowercaseLetters, specialCharacters);
  } else if (passwordUpper && !passwordLower && passwordNumeric && passwordSpecial) {
    characterPool = uppercaseLetters.concat(numbersList, specialCharacters);
  } else if (!passwordUpper && passwordLower && passwordNumeric && passwordSpecial) {
    characterPool = lowercaseLetters.concat(numbersList, specialCharacters);
    //IF THEY CHOOSE 2 OF THE OPTIONS
  } else if (passwordUpper && passwordLower) {
    characterPool = uppercaseLetters.concat(lowercaseLetters);
  } else if (passwordUpper && passwordNumeric) {
    characterPool = uppercaseLetters.concat(numbersList);
  } else if (passwordUpper && passwordSpecial) {
    characterPool = uppercaseLetters.concat(specialCharacters);
  } else if (passwordLower && passwordNumeric) {
    characterPool = lowercaseLetters.concat(numbersList);
  } else if (passwordLower && passwordSpecial) {
    characterPool = lowercaseLetters.concat(specialCharacters);
  } else if (passwordNumeric && passwordSpecial) {
    characterPool = numbersList.concat(specialCharacters);
  } //IF THEY CHOOSE JUST 1 OPTION
  else if (passwordUpper) {
    characterPool = uppercaseLetters;
  } else if (passwordLower) {
    characterPool = lowercaseLetters;
  } else if (passwordNumeric) {
    characterPool = numbersList;
  } else if (passwordSpecial) {
    characterPool = specialCharacters;
  };

  var passwordGenerated = [];
  for (var i = 0; i < passwordLength; i++) {
    var randomPool = characterPool[Math.floor(Math.random() * characterPool.length)];
    
    passwordGenerated.push(randomPool);
};

return(passwordGenerated.join(""));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
