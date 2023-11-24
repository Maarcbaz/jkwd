// SWICH CASES 
// STATEMENT THAT EXAMINES A VA;UE FOR A MATHCH AGAINSGT CASE CLAUSE
// MORE EFFICIENT THAN MANY 'ELSE IF STATEMENT

let grade = 'a';
switch(grade) {
    case 'a':
        console.log('Excellent');
        break
    case 'b':
        console.log('very good');
        break
    case 'c':
        console.log('good');
        break;
    case 'e':
        console.log('fair');
        break;
    case 'f':
        console.log('Failed!');
        break;
    default:
        console.log('this is not a grade');
}


// GRADE 

const result = 94;

switch(true) {
    case result >= 90:
        console.log(result + ' Your result is excellent');
        break;
    case result >= 80:
        console.log(result + ' Your result is very good');
        break;
    case result >= 65:
        console.log(result + ' This result is good');
        break;
    case result >= 45:
        console.log(result + ' this result is fair');
        break;
    case result < 44:
        console.log(result +  ' You failed woefully!');
        break;
}