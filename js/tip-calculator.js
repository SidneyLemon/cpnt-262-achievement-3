// Assign initial values
const billTotal = 40;
const tipRate = .18;
const tipPercentage = 0.18;



// Calculate tip
const tipAmount = billTotal * tipRate;
const paymentTotal = billTotal + tipAmount;



// Output
console.log(tipAmount);
console.log(tipPercentage);
console.log(paymentTotal);
console.log(`$${paymentTotal} = $${billTotal} + $${tipAmount}.`);
console.log(Math.round(7.2));
