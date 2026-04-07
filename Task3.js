
var name = prompt("Enter Name:");
var age = prompt("Enter Age:");
var salary = prompt("Enter Monthly Salary:");
var loanAmount = prompt("Enter Loan Amount:");

console.log("Before conversion (age):", typeof age);
age = Number(age);

console.log("Before conversion (salary):", typeof salary);
salary = Number(salary);

console.log("Before conversion (loanAmount):", typeof loanAmount);
loanAmount = Number(loanAmount);

console.log("After conversion (age):", typeof age);
console.log("After conversion (salary):", typeof salary);
console.log("After conversion (loanAmount):", typeof loanAmount);

// Eligibility Check
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible ✅");
} else {
    console.log("Not Eligible ❌");
}

// EMI Calculation
var emi = loanAmount;
emi /= 12;

console.log("EMI:", emi);

// Loan Category
if (loanAmount > 500000) {
    console.log("Loan Category: High Loan");
} else if (loanAmount > 200000) {
    console.log("Loan Category: Medium Loan");
} else {
    console.log("Loan Category: Low Loan");
}

// Risk Level (Ternary)
var risk = (salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level:", risk);

// Customer Type (Switch)
switch (true) {
    case (emi > 40000):
        console.log("Customer Type: Premium Customer");
        break;

    case (emi > 20000):
        console.log("Customer Type: Standard Customer");
        break;

    default:
        console.log("Customer Type: Basic Customer");
}