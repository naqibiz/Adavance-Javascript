// Logical Operators
// AND (&&) Operators any one condition false, so make the full condition false
// while OR (||) Operators anyonece condition true so make the full condition is true

const BankAccountBalance = 2000;
const ItemPrice = 1000;
const usercode = 192022;
const usersecurecode = usercode;
const creditLimit = 300;
const hasCreditCard = true;
const hasReachedCreditCardLimit = false;

// ----------------------------------------------
if (BankAccountBalance >= ItemPrice && usercode == usersecurecode) {
  console.log("User Data Found (True)");
} else {
  console.log("User Data Not Found (False)");
}

// ----------------------------------------------
if (BankAccountBalance >= ItemPrice || usercode == usersecurecode) {
  console.log("User Information Success (True)");
} else {
  console.log("User Information Failed (False)");
}

// ----------------------------------------------
if (
  BankAccountBalance >= ItemPrice ||
  (hasCreditCard === true && creditLimit >= ItemPrice)
) {
  console.log("You can purchase this item, your balance is not empty");
} else {
  console.log("Your balance is empty");
}

// ----------------------------------------------
if (!hasReachedCreditCardLimit) {
  console.log("Can Purchase");
} else {
  console.log("Can Not Purchase");
}

// ----------------------------------------------
let Myname = "Chirs";
let username;

console.log(Myname);
console.log(!Myname);

console.log(!username === undefined || null);

// ----------------------------------------------

// If, Else If and  Else

if (BankAccountBalance >= ItemPrice) {
  console.log("Congrats! You can pay for this with cash");
} else if (hasCreditCard && hasReachedCreditCardLimit) {
  console.log("You can pay for this with Credit");
} else {
  console.log("Sorry, You cannot purchase this item! :(");
}
