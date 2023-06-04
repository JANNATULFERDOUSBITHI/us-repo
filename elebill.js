let eleticityUnit = 150;
let bill = 0;

if (eleticityUnit <= 50) {
  bill = 0.5 * eleticityUnit;
} else if (eleticityUnit <= 150) {
  bill = 25 + (eleticityUnit - 50) * 0.75;
} else if (eleticityUnit <= 250) {
  bill = 25 + 75 + (eleticityUnit - 150) * 1.2;
} else if (eleticityUnit > 250) {
  bill = 25 + 75 + 120 + (eleticityUnit - 250) * 1.5;
}

let totalBill = bill + 55;

console.log(bill);
