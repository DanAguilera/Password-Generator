// // Assignment Code
 var generateBtn = document.querySelector("#generate");
 var password;
function generatePassword() {
    var characters = "01234567890!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var stringLength = Math.floor(Math.random() * 128) + 8; //https://java2blog.com/generate-random-number-between-1-and-10-in-javascript/
    var randomString = '';
    for (var i=0; i<stringLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        randomString += characters.substring(randomNumber,randomNumber+1);
    }
    return randomString
}



  // // Write password to the #password input
function writePassword() {
   var password = generatePassword(); // generatePassword() was not previously defined in initital code
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}

  function promptMe() {
    var passIntro = prompt('Hello, please type "Y" or "N" for the following criteria  you want included in your password, press "ok" to continue')
    var passCharacterLength = prompt('Character length from 8-128: Write down a number between 8 and 128')
    var passLowerCase = prompt('Lowercase, Y or N')
    var passUpperCase = prompt('Uppercase, Y or N')
    var passNumbers = prompt('Numbers Y or N')
    var passSpecialCharacters = prompt('Special Characters, Y or N')
  } 




// }

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 
 /* generateBtn was added a addEventListener waiting for the user to do something within the
    () and that is when clicked prompt the writePassword function */
