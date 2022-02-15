const bankAccountBalance = 1000;
const costOfItem = 2000;
const tax = 10;
const add = costOfItem + tax;
const canSpandMoney = true;

if (bankAccountBalance >= costOfItem) {
  console.log("Bank Account Success");
  if (tax >= 0.45) {
    console.log("Tax Amount too high");
  }
  if (add) {
    console.log("Your Total payment" + " " + add);
  }
  if (100 === 100) {
    const myName = "Chirs";
    console.log(myName);
  }
} else {
  console.log("Sorry Data Not Found");
}
