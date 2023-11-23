function func(val) {
    

    let answer = ""


    switch(val) {
        case  1: // IF IT WAS A LETTER WE USE STRING RULE
            answer = 'apple'
            break;

        case 2:
            answer = 'banana'
            break;

        case 3:
            answer = 'bread';
            break;
        
       case "naMe":
            answer = "Abass Muhammed";
            break;

        case "class":
            answer = 'University';
            break;



        case 'mood':
                answer = 'happy';
                break;



        default:
                answer = 'happy'
    }
    return answer

}

console.log(func(3));
console.log(func(4));
console.log(func(2));
console.log(func(424)); // RETURNS THE LAST SWITCH CASE  STILL


// MULLTIPLE IDENTICAL OPTION IN JAVASCRIPT SWITCH


function changeinterval(change) {
    



    let ans = '';

    switch (change) {
        case 1:
        case 2:
        case 3:
            ans = "Too Small";
            break;

        case 4:
        case 5:
        case 6:
            ans = "Medium call"
            break;

        
        case 7:
        case 8:
        case 9:
            ans = "Very high"
            break;
    }


    return ans


}

console.log(changeinterval(6));



// SWITCH TRIAL 

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }


  switch(val) {
    case "bob":
      answer = 'Marley';
      break;

    case 42:
      answer = 'The Answer';
      break;

    case 1:
      answer = 'There is no #1'
      break;

    case 99:
      answer = 'Missed me by this much!'
      break;

     case 7: 
        answer = "Ate Nine"
        break;

  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(7));