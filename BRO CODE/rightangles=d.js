// CODE TO SOLVE THE HYPOTHENUS OF A RIGHT ANGLED TRIANGLE
let a;
let b;

a = prompt("Enter side A: ")
a = Number(a)

b = prompt('Enter side B')
b = Number(b)

c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c)


console.log("Final answer is: ", c);
alert('Final answer is: ' + c)