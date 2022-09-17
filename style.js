var generateBtn = document.querySelector("#generate");
var passNumbers;
var passSpecialCharacters;
var passLowerCase;
var passUpperCase;
var choices;
var input;
var stringInput;
var randomNumber;
var randomString = '';
var output;
var UserInput;




// var passCharacterLength = '';
// var passLowerCase = '';
// var passUpperCase = '';

var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "(", ")"]
var number = [1,2,3,4,5,6,7,8,9,0]
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
   var input = parseInt(prompt("How many characters would you like your password to be? Choose between 8-128"));
  console.log(input)

  if(!input) {
    alert("Input a value!")
  }
  // pasreInt allows me to get their asnwer and convert it into a number i can use as their PW length
  else if (input <8 || input >128) {
      parseInt(prompt("You must choose between 8-128."))
  }
  // Confirm allows prompt to be as a boolean thus allowing me to make their criteria and output a password 
  else {
    passNumbers = confirm("Will this contain numbers? Press OK for yes and Cancel for no.");
    console.log(passNumbers);
    passSpecialCharacters = confirm("Will this contain special characters? Press OK for yes and Cancel for no.");
    console.log(passSpecialCharacters);
    passLowerCase = confirm("Will this contain lowercase letters? Press OK for yes and Cancel for no.");
    console.log(passLowerCase)
    passUpperCase = confirm("Will this contain uppercase letters? Press OK for yes and Cancel for no.");
    console.log(passUpperCase)
  };

  if (!passNumbers && !passSpecialCharacters && !passLowerCase &&!passUpperCase) {
    choices = alert("You must choose a criteria!");
  }
// If all 4 options are included 
  else if (passNumbers && passSpecialCharacters && passLowerCase && passUpperCase) {
    choices = characters.concat(number,lowLetters,upLetters);
  }
// If they want 3 options
  else if (!passNumbers && passSpecialCharacters && passLowerCase && passUpperCase) {
    choices = characters.concat(lowLetters,upLetters);
  }
  else if (passNumbers && !passSpecialCharacters && passLowerCase && passUpperCase) {
    choices = number.concat(lowLetters,upLetters);
  }
  else if (passNumbers && passSpecialCharacters && !passLowerCase && passUpperCase) {
    choices = characters.concat(number,upLetters);
  }
  else if (passNumbers && passSpecialCharacters && passLowerCase && !passUpperCase) {
    choices = characters.concat(number,lowLetters);
  }
// If they want 2 options
  else if (passNumbers && passSpecialCharacters && !passLowerCase && !passUpperCase) {
    choices = characters.concat(number);
  }
  else if (passNumbers && !passSpecialCharacters && passLowerCase && !passUpperCase) {
    choices = lowLetters.concat(number);
  }
  else if (passNumbers && !passSpecialCharacters && !passLowerCase && passUpperCase) {
    choices = upLetters.concat(number);
  }
  else if (!passNumbers && passSpecialCharacters && passLowerCase && !passUpperCase) {
    choices = characters.concat(lowLetters);
  }
  else if (!passNumbers && passSpecialCharacters && !passLowerCase && passUpperCase) {
    choices = characters.concat(upLetters);
  }
  else if (!passNumbers && !passSpecialCharacters && passLowerCase && passUpperCase) {
    choices = lowLetters.concat(upLetters);
  }
// If they want 1 option
else if (passNumbers && !passSpecialCharacters && !passLowerCase && !passUpperCase) {
  choices = number;
}
else if (!passNumbers && passSpecialCharacters && !passLowerCase && !passUpperCase) {
  choices = characters;
}
else if (!passNumbers && !passSpecialCharacters && passLowerCase && !passUpperCase) {
  choices = lowLetters;
}
else if (!passNumbers && !passSpecialCharacters && !passLowerCase && passUpperCase) {
  choices = passUpperCase;
}
// made password equal in to an array to later ".push" it 
password = [""];
// converted the parsed integer that was done in the beginning into another variable to use in the for loop
output = parseInt(input);

for (var i = 0; i < output; i++) {
  randomString = choices[Math.floor(Math.random() * choices.length)];
  password.push(randomString);
}

// ".join converts the array into a string"
var ps = password.join("");
UserInput(ps);
return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
