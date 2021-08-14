// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseAphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?\\@[]^_`{|}~".split('');
var numericCharacters = "1234567890".split('');

// console logs to make sure all strings are split into arrays correctly
console.log(lowercaseAphabet);
console.log(uppercaseAphabet);
console.log(specialCharacters);
console.log(numericCharacters);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = [];
  var numberOfCharacters = prompt("How many characters would you like your password to be? (8-128)");
  // Stops the funtion if the number of characters are not between 8 and 128.
  if(numberOfCharacters < 8 || numberOfCharacters > 128){
    password = ["Please follow the directions! 😀 The number of characters needs to be between 8 - 128. Please try again."];
    passwordText.value = password;
    return;
  }
  // confirms to find the booleans for what characters to make the password
  var uppercaseBoolean = confirm("Use uppercase letter?");
  var lowercaseBoolean = confirm("Use lower case letters?");
  var specialCharactersBoolean = confirm("Use special characters?");
  var numbericBoolean = confirm("Use numeric characters?");
  var totalChosenCharaters = [];
  var passwordCharacter;
  
  // if uppercase characters are wanted then add all uppercase characters to array
  if (uppercaseBoolean){
     totalChosenCharaters = totalChosenCharaters.concat(uppercaseAphabet);
  }
   // if lowercase characters are wanted then add all lowercase characters to array
  if (lowercaseBoolean){
    totalChosenCharaters = totalChosenCharaters.concat(lowercaseAphabet);
  }
   // if special characters are wanted then add all special characters to array
  if(specialCharactersBoolean){
    totalChosenCharaters = totalChosenCharaters.concat(specialCharacters);
  }
 // if numeric characters are wanted then add all numeric characters to array
  if(numbericBoolean){
    totalChosenCharaters = totalChosenCharaters.concat(numericCharacters);
  }
  // if no characters are wanted then display a message
  if(!uppercaseBoolean && !lowercaseBoolean && !specialCharactersBoolean && !numbericBoolean){
    password = ["Sorry, cannot make a password without any characters. 😕 Please try again."];
    passwordText.value = password;
    return;
  }

// loop used to pick random characters out of the total characters selected and add them to the password array
for(var i= 0; i < numberOfCharacters; i++){
    passwordCharacter = totalChosenCharaters[Math.floor(Math.random()*totalChosenCharaters.length)];
    password.push(passwordCharacter);
}
// Display password array with out commas
  passwordText.value = password.join('');

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
