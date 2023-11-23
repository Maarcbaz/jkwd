let userName = "Bro Code";

console.log(userName.length); // CALCULATES THE TOTAL CHARACTERS IN THE  STRING
console.log(userName.charAt(4)); // RETURNS THE NUMBER AT, WHERE A LETTER IS
console.log(userName.indexOf('o')); // FINDS THE FIRST INDEX OF A LATTER FROM THE STRING
console.log(userName.lastIndexOf('o')); // FINDS THE LAST INDEX OF A LETTER FROM THE STRING 

userName = "        Bro Code        "
console.log(userName); 
console.log(userName.trim()); // REMOVES THE WHITE SPACE FROM A STRING

userName = "Bro Code";
console.log(userName.toUpperCase()) // TURNS THE STRING TO UPPERCASE
console.log(userName.toLowerCase()); // TERNS THE STRING TO LOWERCASE 

let phoneNumber = "123-4456-7890";
phoneNumber = phoneNumber.replaceAll('-', '/') // REPLACE A CHARACTER FROM A STRING  
console.log(phoneNumber);

// SLICE FUNCTION

let fullName = "Snoop Doug";
let firstName;
let lastName;

firstName = fullName.slice(4)
lastName =  fullName.slice(0, 3)
console.log(firstName);
console.log(lastName);


// lastName = fullName.slice(fullName.indexOf(' '))
console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(' '))
lastName = fullName.slice(fullName.indexOf(' ') + 1)


console.log(firstName);
console.log(lastName);


// METHOD CHAINING
let username = "abass";

let letter;

letter = username.charAt(0) // RESULT IS SMALL "a"
letter = letter.toUpperCase(0)
console.log(letter);

// INSTED WE CAN WRITE IT WITH ONE LINE OF CODE BY USING THE METHOD CHAINING
// METHOD CHAINING
// THIS IS CALLING ONES METHOD AFTER ANOTHER IN ONE CONTINOS LINE OF CODE

letter = username.charAt(0).toUpperCase().trim() // WRITING IN ONE LINE OF CODE


console.log(letter);