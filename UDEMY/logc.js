let hee = 400;
let her = "400";

if (hee != her ) {
    console.log("There are NOT the same");
}
else {
    console.log("Lol!...");
}

if (1==1 && 2==2) {
    console.log("These are the same");
}
if (2!==2 || 5==5) {
    console.log("One of these are the same");
}
if (3===3 && 4===5 || 3===5 || 4===5) {
    console.log("Not sure");
}
if (3==3 && 5===5 || 3===6 && 4===5) {
    console.log("Not sure");
}


let cat1 = 5;
let cat2 = 10;
let cat3 = 1;

if (cat1 > cat2 && cat1 > cat3) {
    console.log("Cat 1 is the cutest");
}
else if (cat2 > cat1 && cat2 > cat3) {
    console.log("Cat 2 is the cutest");
}
else if (cat3 > cat1 && cat3 > cat2) {
    console.log("Cat 3 is the cutest");
}

let dog1 = 5;
let dog2 = 10;
let dog3 = 20;
let dog3LAmeHAndicaped = true;

if ((dog1 > dog2 && dog2 > dog3) || !dog3LAmeHAndicaped) {
    console.log("The first Dog is the Cutest")
}
else if ((dog2 > dog3 && dog3 > dog2) || !dog3LAmeHAndicaped) {
    console.log("The second Dog is the cuteset");
}
else if ((dog3 > dog1 && dog3 > dog2) || dog3LAmeHAndicaped) {
    console.log("The last Dog is the cutest");   
}

if (2 == 3) {
    console.log("hello there");
}