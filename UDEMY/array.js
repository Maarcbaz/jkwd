// // WRONG WAY TO ACCCESS MUCH DATA


// // var students = ["Timmy", "Janessa", "Arun"];
// // var nautyList = [];
// // var badKid = students[0];
// // nautyList.push(students[0]);
// // console.log(students);


// // let studets = ["temmy", "gray", "Janette", "Jane", "Grayat"];

// // let naughtyList = [];
// // naughtyList.push(studets[1]);

// // console.log(studets);
// // console.log(naughtyList);


// // let student = ["Abass", "Muahmmed", "Damilola", "Olayemi", "Usain"];
// // console.log(student[2]);
// // console.log(student.push("Hello"));
// // console.log(student);
// // console.log(student.sort());


// // let naughtyList = [];
// // naughtyList.push(student[3])
// // let index = naughtyList.indexOf("Muhammed");
// // if (index > -1) {
// //     naughtyList = naughtyList.splice(index, 1)
// // };


// // let array = [];
// // array = ["Abass", "Muhammed", "Damilola", "Olayemi", "Tina"];
// // console.log(array);
// // console.log(array.push("Muffins"));
// // console.log(array.sort());
// // console.log("Abass " + array[3]);

// // let naughtyList = [];
// //  naughtyList.push(array[0])
// // console.log(array);


// // let students = ["Ayo", "Billy", "Jones", "Scrot", "Gray"];
// // console.log(students);
// // console.log(students.push("!Ay"));
// // console.log(students.sort());
// // console.log(students)

// // let naughtyList = [];
// // naughtyList.push(students[0]);
// // let badKid = students.push(0)



// // let x = 3;
// // const y = x++;
// // x is 4; y is 3

// // let x2 = 3n;
// // const y2 = x2++;
// // x2 is 4n; y2 is 3n

// // let x = 3;
// // const y = ++x;
// // x is 4; y is 4

// // let x2 = 3n;
// // const y2 = ++x2;
// // x2 is 4n; y2 is 4n;


// // GRABING ITEM OUT OF AN ARRAY

// let student = ["Janet", "Bills", "Jane", "Doe", "Abass"];
// console.log(student);
// console.log(student.push("Timmy"));
// console.log(student.sort())
// let naughtyList = [];
// naughtyList.push(student[2]);
// // console.log(naughtyList)



// // REMOVING ITEM FROM AN ARRAY



// // let school = ["Basic", "Primary", "secondary", "University"];
// // let badSchool = [];
// // badSchool.push(school[2])
// // console.log(badSchool);

// // let index = badSchool.indexOf("secondary")
// // console.log(badSchool);
// // if (index > -1) {
// //     badSchool.splice(index, 1)
// // }
// // console.log(index);
// // console.log(badSchool);




let student = ["Temmy", "Jenassa", "Arun"]
console.log(student);
let naughtyList = [];
naughtyList.push(student[0])
console.log(naughtyList);

// let index = naughtyList.indexOf("Temmy")
// console.log(index);
// // if (index > -1 ) {
// //     naughtyList = naughtyList.splice(index, 1)
// // }
// // console.log(index);

let index = naughtyList.indexOf("Temmy");
console.log(index);
if (index > -1) {
    naughtyList = naughtyList.splice(index, 1)
}
console.log(index);