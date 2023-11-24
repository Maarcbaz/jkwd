// GIVES US THE ABILITY TO CHECK MORE THAN ONE CONDTION CUCURRENTLY
// && (BOTH CONDITION MUST BE TRUE)
// || (EITHER CONDTION CAN BE  TRUE)

let temp = 23;
if (temp < 0 && temp < 30 ) {
    console.log('The whether is bad');
}
else {
    console.log('The temperature is poor!');
}

let teMp = 40;
let sunny = true;
if (teMp <= 0 && teMp >= 40 && sunny) {
    console.log('The whether is Good');

}
else {
    console.log('The whether is bad!');
}

// '!" NOT LOGICAL OPERATORS 
// TYPICALLY USED TO REVERSE A CONDITION'S BOOLEAN VALUE 
//TRUE -> FALSE FALSE -> TRUE

let temperature = 12;
let sun = true;

if (!(temperature > 0)) {
    console.log('It is sunny outside');
}
else {
    console.log('it is cold outside');
}

if (!sun) {
    console.log('it is cold outside');
}
else {
    console.log('it is sunny outside');
}

