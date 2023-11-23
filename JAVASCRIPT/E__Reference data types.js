// REFERENCE DATA TYPES
// ARRAY
/* An array is a data structure that contains a list of elements. These element are all the same data types, such as an integer or string. */

let shopping= [];
shopping = ['paintbrush','colourbrush','canvas'];
console.log(shopping);

let books=[];
books=["math","eng","agric","econ","geo","acc","marketing","yor","civic"];
console.log(books);
//ARRAY 
//  EXAMPLES

let numbers = [];
numbers = [1,4,2,3,7,6];
console.log(numbers);
console.log(numbers[3]);
console.log(numbers[1] + numbers[3]);

console.log(numbers[3] / numbers[4]);
console.log(numbers.sort());
console.log(numbers.push(5));
console.log(numbers.sort());
console.log(numbers.push(-20));
console.log(numbers.sort())
console.log(numbers.push(.20));
console.log(numbers.sort())

// MIXED ARRAY
let mix=[];
mix=['one',1,'two','2']
console.log(mix);
console.log(mix[0] + mix[3])
// TRIAL 

let tay=[];
tay=['array','bay','skye','pen','school','zoo','bitch','ball','ballon'];
console.log(tay);
console.log(tay.sort());
console.log(tay.push('cool'))
console.log(tay.sort());



// OBJECTS

let pen={
    type:'ball point',
    color: 'black',
    cost: 10
}

// Accessing object

// objectname.propertyname
// objectname['propertyname']

console.log(pen.cost);

let emily={
    age:16,
    school:'DPS',
    class:'10th std',
    subject: ['physics','chemistry','biology','maths']
}
console.log(emily.subject[1]);


// EXAMPLE 
let maarc={
    name:'Maarcbaz',
    school:'Skye view',
    age:16,
    class: 'clr',
    subject: ['english','maths','biology','chemistry','f.maths',],
    course: 'computer science',
}
console.log(maarc)
console.log(maarc.subject[4]);;
typeof maarc.subject[2]
console.log(maarc.subject.push(209));
console.log(maarc.subject.sort());
console.log(maarc.subject.push[100])

// EXAMPLE
  
let jane={
    name:'jane doe',
    class:2,
    friend: 'john'
}
console.log(jane);
console.log(jane['class'])



// FUNCTION 

function hello() {
    console.log('hello')
}
hello()

function product(a,b) {
    return a*b
}
let x=product(2,6);
console.log(x);

function janet() {
    console.log("Hello i'm janet")
}

// TRIALS 





function kibs(x,z) {
    return x*z
} 
let q=kibs(43,80);
console.log(q);


// WHEN YOU CALL A FUNCTION YOU PASS AN ARGUEMENT
// WHEN YOU DEFINE A FUNCTION YOU PASS PARAMETERS

// EXAMPLES / TRIALS

function par(w,r) {
    return w-r

}

let w=par(30,64);
console.log(w);





//

//TRIAL FUNCION 

function para(a,s) {
    return a-s
}

let ui = para(200,400);
console.log(ui)




// TRIAL 3

function pray(z,d) {
    return z-d
}

let zat=pray(10.25,13.20);
console.log(zat)



// CONDITIONAL STATEMENT 

let jack =[];
jack=[1,2,3,4,5,6,7,4]
if (jack[3]==jack[7]) {
    console.log('correct');
    // alert('correct');
    
};


if (jack[1]==jack[10]) {
    console.log('correct')
}

else {
    console.log('wrong try again')
    // alert('oops sorry');
}


// EXAMPLES


let luck=[];
luck=[1,2,3,2,4,1,3]
if (luck[0]==luck[5] || luck[3]==luck[4]) {
    console.log('correct')
    
} 
else {
    console.log('opps wrong')
}

// LOOPS

// FOR LOOP

for(let i=0;i<5;i++) {
    console.log("The number is +1")
};


let abss=[];
abss=[1,2.3,2.5,1,4,5,3,45,'iuto','lor',4]

if (abss[2]==abss[4] || abss[0]==abss[3]) {
    console.log('the number is correct')
    alert("right")
}
else {
    console.log('oops this is impossible')
    alert('wrong')
}


function lw(params) {
    
}