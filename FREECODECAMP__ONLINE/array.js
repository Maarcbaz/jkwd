let  myArr = ["Bread", 1]
console.log(myArr);



// ARRAY MULTIDIMENSIONAL ARRAY I.e THIS IS MORE THAN ONE ARRAY
let myArr2 = [["abass", 1], ["muhammed", 3]]
console.log(myArr2);
let mArr = [["poaint", 30], ["knight, 29"], ["kitchen", 103], ["room", 1100]]
console.log(mArr)

// ACCESSING AN ARRAY DATA

let arr = [12,42,76];
console.log(arr[1]);

let str = arr[0]

console.log(str)

// ?? THE ENTRIES OF ARRAY CAN BE CHANGED UNLIIKE STRING EVEN USING THE "CONST"

let array = [12,32,434,533]
array[1] = 400;

console.log(array)
// ?? The 3rd array will result to 400 


// ACCESSING MULTIDIMENSIONAL ARRAY WITH INDEXES

let tArray = [
    [1,2,3,4],
    [4,54,5],
    [2,4,5]
]


let result = tArray[1][1]
console.log(result)

// This array is inside result to 54;


// MANIPULATE SUBARRAYS

let pArr = [1.2, 2, 4, 5]
pArr.push("2.4", "2.4")
console.log(pArr)

// THE POP ARRAY METHOD works with the last array type

let ar = [1,24,8,5]
let pop = ar.pop()
console.log(ar);
console.log(pop);


// THE POP ARRAY METHOD WORKS WITH THE FIRST ARRAY ELEMENT

let fArr = [1,3,34,43,5]
let resUlt = fArr.shift()
console.log(fArr)
console.log(resUlt);

// THE UNSHIFT() THIS ADDS AN ELEMENT TO THE FIRST OF THE ARRAY "OPPOSITE OF PUSH"

let unArr = [1,2,3,34,5]
unArr.unshift(12)
console.log(unArr)


// push() THIS ADDS AN ELEMENT AT THE END OF THE ARRAY
// unshift() THIS REMOVES ELEMENT AT THE END OF AN ARRAY
// shift() THIS REMOVES THE FIRST ELEMENT OF AN ARRAY FIRST 
// pop() THIS ADDS ELEMENT TO THE LAST ARRAY TYPE ALSO REMOVES THE LAST ELEMENT AND RETURNS IT BACK




const myList = [
  ["Chocolate Bar", 15],
  ["Bread", 20],
  ["jelly", 100],
  ["peanut butter", 340],
  ["jam", 200],
  ["Cake", 10]
]
console.log(myList);


let arra = ["abass", 1, 4]
console.log(arra);
// console.log(index.length(arralog))
console.log(arra[2]);



let mulAr = [
  ["abass", 23, true],
  ["maarc, 1, 4,"]
]

let mulArray = [
  ["abass", 1,3]
  ["olayemi", 8,5]
]
console.log(mulAr);
console.log(mulAr[0][1])


