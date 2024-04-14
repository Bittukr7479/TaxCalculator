const annualIncome = document.querySelector(".annualIncome");
const extraIncome = document.querySelector(".extraIncome");
const age = document.querySelector(".ageGroup");
const deduction = document.querySelector(".deduction");
const Submit = document.querySelector("#Submit");
const demo = document.querySelector("#demo");


function overallIncome() {
    netIncome = annualIncome.value + extraIncome.value - deduction.value;
    var finalIncome;
    if (netIncome <= 8) {
        finalIncome = netIncome;
        return finalIncome;
    } else {
        if (age.value < 40) {
            const tax = .3 * (annualIncome.value + extraIncome.value - 8)
            finalIncome = netIncome - tax;
            return finalIncome;
        } else if (age.value >= 40 && age.Value < 60) {
            const tax = .4 * (annualIncome.value + extraIncome.value - 8)
            finalIncome = netIncome - tax;
            return finalIncome;
        } else if (age.value >= 60) {
            const tax = .1 * (annualIncome.value + extraIncome.value - 8)
            finalIncome = netIncome - tax;
            return finalIncome;
        } else {
            finalIncome = 0;
            return finalIncome;
        }
    }
}
function result() {
    demo.innerHTML = overallIncome();
    window.onload = result;
}


// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }


