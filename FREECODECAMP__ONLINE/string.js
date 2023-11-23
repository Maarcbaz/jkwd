let varString = "hello world \"this is cool\"";
console.log(varString);

// THIS HELPS WHEN INCLUDING A QUOTE WHICH IS INSIDE A QUOTE SO WE USE "\"

// SOME CODE
/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed

*/

// CONCATENATION this is adding variable

let mau = "hello " + "hey"


// PLUS EQUATOR SIGN

let lString = "This is so long "
lString = lString + "so long";
console.log(lString);

let pString = "My string is a plus equator "
pString += "Sign"
console.log(pString);

let fNAme = "Abass Muhammed";
let aboutMe = "my name is " + fNAme + " I'm a boy that loves, " +  "coding";
console.log(aboutMe);


// LENGHT OF A STRING
console.log("Alan Turing".length)

let length = "Common Men! Whooo"
console.log(length.length);


// FINDING CHARACTERS IN STRING

const firstName = "James";
const firstNameLetter  = firstName[0];
console.log(firstNameLetter);


// CHANGING VALUE
let change = "Bob";
change = "job"

// NTH-CHILD-ELEMENT 

const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];