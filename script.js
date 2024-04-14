const annualIncomeInput = document.getElementById("annualIncome");
const extraIncomeInput = document.getElementById("extraIncome");
const ageGroupSelect = document.getElementById("ageGroup");
const deductionInput = document.getElementById("deduction");
const submitBtn = document.getElementById("submitBtn");
const demo = document.getElementById("demo");
const closeBtn = document.getElementById("closeBtn");
const overallIncome = document.getElementById("overallIncome");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");


function calculateTax() {
    const annualIncome = parseFloat(annualIncomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const deductions = parseFloat(deductionInput.value);
    const ageGroup = ageGroupSelect.value;

    if (isNaN(annualIncome) || isNaN(extraIncome) || isNaN(deductions) || ageGroup === "") {
        demo.innerHTML = "Please enter valid numbers and select an age group.";
        if ((isNaN(annualIncome))) {
            first.classList.remove("hidden");
        } else if ((isNaN(extraIncome))) {
            second.classList.remove("hiden");
        } else if ((isNaN(deductions))) {
            fourth.classList.remove("hiden");
        } else if ((ageGroup === "")) {
        } else {
            third.classList.remove("hiden");

        }

    } else {
        const netIncome = annualIncome + extraIncome - deductions;
        let finalIncome = netIncome;


        if (netIncome > 800000) {
            let taxRate;
            if (ageGroup === "1") {
                taxRate = 0.3;
            } else if (ageGroup === "2") {
                taxRate = 0.4;
            } else if (ageGroup === "3") {
                taxRate = 0.1;
            }

            const taxableAmount = netIncome - 800000;
            const tax = taxRate * taxableAmount;
            finalIncome = netIncome - tax;
        }

        demo.innerHTML = `Final Income after tax: ${finalIncome.toFixed(2)}`;
    }
}

function closeButton() {
    overallIncome.innerHTML = "lorem";
}

// closeBtn.addEventListener("click", closeButton);

submitBtn.addEventListener("click", calculateTax);

