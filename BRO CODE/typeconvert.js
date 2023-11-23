// TYPE CONVERSION === CHANGE THE DATA TYPE OF A VALUE TO ANOTHER (STRING, NUMBER, B[=]


let age = prompt('Enter Your Age');
console.log(typeof age); // HERE AGE IS A SEEN AS A VARIABL STRING
age = Number(age)
console.log(typeof age); // HERE AGE IS SEEN AS A NUMBER {BCOS WE USE THE NUMBER FUNCTION}
age += 1;
let firstName = "Malthida"
console.log(`Happy birtday! ${firstName}`, ' ', 'you are now ' + age);


let x;
let X;
let y;
let z;
let Z;
x = Number('3.14')
X = Number('i love pizza')
y = String('3.12')
z = Boolean('')
Z = Boolean("'i'm true")


console.log(x, typeof x); // THES IS A NUMBER
console.log(X, typeof X); // THIS RESULT INTO A NAN "BCOS IT'S NOT  A NUMBER"
console.log(y, typeof y); // THIS IS A STRING
console.log(z, typeof z); // THIS IS FALSE BECAUSE OF AN EMPTY STRING
console.log(Z, typeof Z); // THIS IS A TRUE BOOLEAN BCOS IT'S NOT EMPTY


