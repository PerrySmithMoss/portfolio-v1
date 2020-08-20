// Standard way to complete the FizzBuzz challenge
function FizzBuzz1(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) {
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += 'FizzBuzz ';
        }
        else if (i % value1 == 0) {
            returnValue += 'Fizz ';
        }
        else if (i % value2 == 0) {
            returnValue += 'Buzz ';
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

// Achieving the same FizzBuzz result, but using ternery operators and outputing the results as an array
function fizzBuzz2(num1, num2) {
    let numbersArray = [];
    for (let i = 1; i <= 100; i++) {
        numbersArray[i] = ((i % num1 == 0 ? "Fizz" : "") + (i % num2 == 0 ? "Buzz" : "") || i);
    }
    return numbersArray;
}

// When called will update the HTML template
function buzzIt() {
    // Grab the template from the HTML document
    let output = [];
    let templateHeader = document.getElementById("template-header");
    let templateRow = document.getElementById("template-row-items");

    let templateHTML = templateRow.innerHTML;
    let resultsHTML = templateHeader.innerHTML;

    // Get numbers the user entered
    let num1 = document.getElementById("fizzValue").value;
    let num2 = document.getElementById("buzzValue").value;

    // Call the fizzBuzz function and populate the output array
    output = fizzBuzz2(num1, num2);
    // Loop over array and output 5 columns in one row
    for (i = 1; i < output.length; i += 5) {
        resultsHTML += templateHTML
            .replace("{{val1}}", output[i])
            .replace("{{val2}}", output[i + 1])
            .replace("{{val3}}", output[i + 2])
            .replace("{{val4}}", output[i + 3])
            .replace("{{val5}}", output[i + 4]);
    }
    document.getElementById("results").innerHTML = resultsHTML;
}