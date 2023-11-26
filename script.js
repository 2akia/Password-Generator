// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Please enter how many characters you want in your password (between 8 - 128 characters."));

  if (passwordLength < 8 || passwordLength > 128 ) {
   alert ("Please choose between 8 - 128 characters. ");
   return;
  };

  var hasCapitalsChar = prompt ("Do you want Capitals in your password ? If yes, type 'yes' and if no type 'no'. ");

  var hasSpecialChar = prompt ("Do you want speacial charaters in your password ? If yes, type ' yes ' and if no type 'no'.");

  var hasNumericChar = prompt ("Do you want Numbers in your password ?  If yes, type 'yes' and if no type 'no'.");

  var hasLowerCaseChar = prompt ("Do you want Lower Case in your password ?  If yes, type 'yes' and if no type 'no'.");
  
  if (hasCapitalsChar === "no" && hasSpecialChar === "no" && hasNumericChar === "no" && hasLowerCaseChar === "no" ) {
   alert ("Please select at least one character");
   return;
  }
  
  return {
   passwordLength: passwordLength,
   hasCapitalsChar: hasCapitalsChar === "yes",
   hasSpecialChar: hasSpecialChar === "yes",
   hasNumericChar: hasNumericChar === "yes",
   hasLowerCaseChar: hasLowerCaseChar === "yes"
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length) ;
  return arr[random];
}

// Function to generate password with user input
function generatePassword() {
  var option = getPasswordOptions();

  var chosenCharacters = [];

  if (option.hasCapitalsChar) {
    chosenCharacters = chosenCharacters.concat (upperCasedCharacters);
  }
  
  if (option.hasSpecialChar) {
    chosenCharacters = chosenCharacters.concat (specialCharacters);
  }
  
  if (option.hasNumericChar) {
     chosenCharacters = chosenCharacters.concat (numericCharacters);
  }
  
  if (option.hasLowerCaseChar) {
    chosenCharacters  = chosenCharacters.concat (lowerCasedCharacters);
  }
  console.log (chosenCharacters);
  
  
  var results = "";
  for (i = 0 ; i < option.passwordLength; i++) {
  var random = getRandom (chosenCharacters);
  
  console.log(random);
  results += random ;
  };
  
  return results;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

