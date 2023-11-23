// VALUE WORKS FOR INPUT
let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numfield2");
let resultField = document.getElementById("resultField") 
let form = document.getElementById("xOfy")


form.addEventListener('submit', function(event) {

    if (!numField1.value || !numfield2.value) {
        alert("Please enter a number") // WHEN THE FIELD IS EMPTY
    }
    else {

        let x = parseFloat(numField1.value); // PARSEFLOAT ALLOWS DECIMAL
        let y = parseFloat(numfield2.value); // VALUE ALLOWS THE INPUT TO BE ACCESSIBLE
        
            let result = x / y;
            let percent = result * 100; // CALCULATE THE %
        
        
            resultField.innerText = "Answer: " + percent + '%' // RESULT TO THE PERCENT % CALCULATION
            event.preventDefault() // PREVENTS REFRESHING THE PAGE
    }
}) 