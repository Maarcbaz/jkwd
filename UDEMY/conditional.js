// // if (12 <= 12) {
// //     console.log(true);
// // }
// // else {
// //     console.log(false)
// // };

// // let accountBalance = "$300";
// // let nikeShoes = "$79.23";

// // if (accountBalance <= nikeShoes) {
// //     console.log("You just got a shoe")
// // }
// // else {
// //     console.log("Insufficint account balance!")
// // };

// // let myAccountBalance = 300;
// // let nikeSbShoes = 79.23;

// // if (nikeSbShoes <= myAccountBalance) {
// //     myAccountBalance -= nikeSbShoes
// //     console.log("You just bought a new dope shoe");
// //     console.log("Account Balance: " + myAccountBalance)
// // }
// // else {
// //     console.log("Insuficient account balance")
// // }
// // // || CONDITIONAL STATEMENT 


// // let aCc = 100;
// // let car = 100;
// // let bonus = 600; 

// // if (car <= aCc) {
// //     aCc -= car;
// //     console.log("Congratulation you just got a new Car, 👋 hurray!");
// //     console.log("Acoount Balance: " + aCc);
// // }
// // else if (car - bonus <= aCc) {
// //     aCc -= car - bonus
// //     console.log("You just got a new with your bonus account, 👋 huray!");
// //     console.log("Account Balance: " + aCc);
// // }
// // else {
// //     console.log("Insufficient Balance");
// //     console.log("Main Balance: " + aCc + ", Bonus Balance: " + bonus);
// //     let toTal = aCc + bonus;
// //     console.log("Total Balance: " + toTal)
// // }


// // // || TEST 

// // let accBalance = 1000;
// // let shoe = 800.56;
// // let coupon = 501;

// // if (shoe <= accBalance) {
// //     accBalance -= shoe;
// //     console.log("you just got some new shoes bro");
// //     console.log("Account Balance: " +accBalance);
// // }
// // else if(accBalance -= shoe - coupon) {
// //     console.log("you just got a dope shoe with your coupon balance!");
// //     console.log("Account Balance: " + accBalance)
// // }
// // else {
// //     console.log("Insufficient Account Balance");
// // }

// // // || CONDITIONAL STATEMENT TRIAL

// // let acBalance = 200;
// // let clothe = 1000;
// // let beneFit = 500;

// // if (clothe <= acBalance) {
// //     acBalance  -= clothe;
// //     console.log("Congratulation you just got a new clothe");
// //     console.log("Account Balance: " + acBalance)
// // }
// // else if (clothe - beneFit <= acBalance) {
// //     acBalance -= clothe - beneFit;
// //     console.log("Congratulation you just got a clothe from you benefit, 👋 Hurray")
// //     console.log("Account Balance: " + acBalance);
// // }
// // else {
// //     console.log("Insufficient Credit Balance")
// //     console.log("Account Balance: " + acBalance);
// //     console.log("Bonus Balance: " + beneFit);
// //     let tota = acBalance + beneFit;
// //     console.log("Total Amount: " + tota)
// // }






// let accountBaLance = 10;   
// let carScreen = 15;
// let screenBonus = 4;

// if (carScreen <= accountBaLance) {
//     accountBaLance -= carScreen;
//     accountBaLance = accountBaLance - carScreen
//     console.log("Congratulation your Car Screen as been repaired, 👋 Hurray!");
//     console.log("Account Balance: " + "$" + accountBaLance);
//     console.log("Screen Bonus Balance: " + "$" + screenBonus);
//     console.log(true)
// }
// else if (carScreen - screenBonus <= accountBaLance) {
//     accountBaLance -= carScreen - screenBonus;
//     // accountBaLance = accountBaLance - carScreen + screenBonus;
//     console.log("Congratulation your Car screen as been repaired, with your screen bonus balance, 👋 Hurray!");
//     console.log("Account Balance: " + "$" + accountBaLance);
//     screenBonus -= carScreen
// }
// else {
//     console.log("Insufficient Credit Balance");
//     console.log("Purchased Item: " + "$" +  carScreen);
//     console.log("Main Account Balance: " + "$" +  accountBaLance);
    
//     carScreen -= screenBonus + accountBaLance;

//     console.log("you need " + carScreen);
//     console.log("Bonus Balance: " + "$" +  screenBonus);
//     let totalAmt = screenBonus + accountBaLance;
//     console.log("Total Account Balance: " + "$" + totalAmt);
//     console.log(false)
// }

// // COMPARISON OPERATORS

// // 1. <= LESS THAN OR EQUAL TOO
// // 2. >= GRAETER THAN OR EQUAL TOO
// // 3. == EQUAL TO: TO CHECK IF THE VALUE ARE THE SAME
// // 4. === EQUAL TOO SIGN: CHECKS IF THE VALUE AND TYPE ARE THE SAME 
// // 5. !== NOT EQUAL TO CHECKS IF THE "TYPE"
// // 6. != NOT EQUAL TO, CHECKS IF THE "TYPE  AND VALUE" ARE THE SAME

// // let age = 23
// // let joesAge = "23"
// // if (age == joesAge) {
// //     console.log("I'm the same age with Joe");
// // }

// // // IN THIS CODE THE joesAge IS CONVERTED TO A STRNG WHICH IS REALLY BAD

// // let val1 = 23
// // let val2 = "23"
// // if (val1 === val2) {
// //     console.log("This are the same");
// // }
// // else {
// //     console.log("One of this is not like the other...");
// // }

// // CHECK  FOR REFERENCE ON COMPARISON EXAMPLES / EQUAL COMPARISON OPERATORS






let acct = 300;
let bonus = 100;
let item = 60;
let wallet = (acct + bonus);

if (item <= acct) {
    acct -= item;
    console.log("Your Item as been shiped");
    console.log("account Balance: " + "$" + acct )
}
else if (item <= wallet) {
    wallet -= item
    console.log("Your item as been shipped with you wallet balance")
    console.log("Wallet Balance: " + "$" + wallet)
}
else {
    console.log("Insufficient credit balance")
}




// PROJECT BASED ON CONDITIONS 

// 1. AGE PROJECT


// SWITCH STATEMENT


const pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}