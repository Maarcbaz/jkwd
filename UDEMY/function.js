// // BAD WAY TO MAKE THIS 

// let lenght1 = 15;
// let width1 = 20;
// let area = lenght1 * width1;

// let length2 = 20;
// let width2 = 14;
// let area2 = length2 * width2
// console.log(area);
// console.log(area2);

// FUNCTION

function area(length, breadth) {
    return length * breadth
}
let area1 = area(20, 34)
console.log(area1);
let area2 = area(2203, 402)
console.log(area2);


function func(x,y) {
    return x + y
}
let mood = func("i'm ", "sorry")
console.log(mood);

let moods = [];
moods.push(func("i'm " + "so sorry"))

baLance = 500;
function bankTransaction(priceOfSale) {
    if (priceOfSale <= baLance) {
        baLance -= priceOfSale
        console.log("Purchase Successfu");
    }
    else {
        console.log("insufficient Balance");
    }
}
console.log(baLance);
bankTransaction(23)
console.log(baLance);
bankTransaction(794)
console.log(baLance);
bankTransaction(34)
console.log(baLance);

// STORED IN A VARIABLE
var transaction = function(priceOfSale) {
     if (priceOfSale <= baLance) {
        baLance -= priceOfSale
        console.log("Purchase Successfu");
    }
    else {
        console.log("insufficient Balance");
    }
}
transaction(75)
console.log(baLance);

