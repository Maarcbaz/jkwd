// let student = {
//     firstNAme: "Abass",
//     lastNAme: "Muhammed",
//     age: 20,

//     // FUNCTION INSIDE AN OBJECT 

//     greeting: function () {
//         return "hello " + "my name is " + this.firstNAme +   this.lastNAme + " i'm " + this.age + " years old.";
//     }
// }

// console.log(student.greeting());

// // DOT PRINCIPLE
// console.log(student.firstNAme);
// console.log(student.lastNAme);

// // SQUARE PRINCIPLE

// console.log(student["firstNAme"]);
// console.log(student["age"]);

// // NEW EMPTY ARRAY

// let student1 = new Object()
// student1.firstNAme = "Olayemi";
// student1.lastNAme = "Damilola";
// student1.age = 33;

// // NEW EMPTY ARRAy

// let student2 = {};

// student2.firstNAme = "Mumtaaz";
// student2.lastNAme = "Dele";
// student2.age = 12;


// // ADDING OBJECT INTO AN ARRAY

// let studentArray = [];
// studentArray.push(student);
// studentArray.push(student1);
// studentArray.push(student2);
// console.log(studentArray)


// // OBJECT ARE ACCESSED WITH THEIR NAME

// let stuDent = {
//     firstName: "Abass",
//     lastName: "Muhammed",
//     age: 20
// }
// console.log(stuDent.firstName);
// console.log(stuDent.lastName);
// console.log(stuDent.age);

// // CREATING A NEW EMPTY OBJECT 

// let student01 = new Object() 
// student01.firstNAme = "Zack",
// student01.lastNAme = "Synder"
// student01.age = 102;

// // CREATE A NEW EMOTY OBJECT

// let stdent02 = {}
// stdent02.firstNAme = "Quish"
// stdent02.lastNAme = "Kayl"
// stdent02.age = 23;

// console.log(stdent02);

// // ADDING OBJECT INTO AN ARRAY

// let stdArray = []
// stdArray.push(stuDent)
// stdArray.push(student01)
// stdArray.push(stdent02)

// console.log(stdArray);

// // FUNCTIONS IN  AN OBJECT
// let stdFunc = {
//     firstNAme: "Jane",
//     lastNAme: "Doe",
//     age: 25,
//     greetings: function greet() {
//         return "Hi i'm " + this.firstNAme + " " + this.lastNAme + " i'm " + this.age  + " years old"
//     }
// }
// console.log(stdFunc.greetings());

// REUSING A FUNCTION FOR AN OBJECT

function Student(first, last, age) {
    this.firstNAme = first;
    this.lastNAme = last;
    this.age = age;
    this.greetings = function greet() {
        return "hi, i'm " + this.firstNAme + " " + this.lastNAme + ". " + "i'm " +  this.age + ' ' + "years old"
    }
}
let std01 = new Student("jane", "doe", 23)
console.log(std01);
console.log(std01.greetings());

let arrstu = []
arrstu.push(new Student("Joseph", "Brie", 23))
arrstu.push(new Student("Abass", "Mumtaaz", 10))
arrstu.push(new Student("John", "Smith", 30))
arrstu.push(new Student("James", "smith", 20))
console.log(arrstu);