// Comparison Operators

// Assignment(=) operator used for assign value &
// Double(==) assignment operators used for check the equal value &
// Triple(===) assignment operators used for check the equal value and equal data type

// ---------------------------------------------------------------------------
const numbers = 9;
console.log(typeof numbers + " " + numbers);

const anOtherNumber = "9";
console.log(typeof anOtherNumber + " " + anOtherNumber);
const stringConversion = parseInt(anOtherNumber);
console.log(typeof stringConversion + " " + stringConversion);

const comparison = numbers === stringConversion;
console.log(comparison);

if (numbers === stringConversion) {
  console.log("Welcome To Pakistan");
} else {
  console.log("Your Value Not Equal");
}

// ---------------------------------------------------------------------------
const myArray = [1, 2, 3, 4];
const myOtherArray = myArray;
console.log(myArray === myOtherArray, "Arrays");

const myObject = { name: "Chirs" };
const myOtherObject = myObject;
console.log(myObject === myOtherObject, "Objects");

// ---------------------------------------------------------------------------
const myFirstNumber = 123;
const mySecondNumber = 120;

if (myFirstNumber > mySecondNumber) {
  console.log(
    "Hi There ~!" +
      " " +
      myFirstNumber +
      " " +
      "High Value" +
      " " +
      "&" +
      " " +
      "Low Value" +
      " " +
      mySecondNumber
  );
} else {
  console.log("Try again ~!");
}

// ---------------------------------------------------------------------------
// Example Bank Account
const username = prompt("Enter Name");
const CustomerName = (document.getElementById("customername").innerHTML =
  "Name: " + username);
// -----
const Age = prompt("Enter Age");
const CustomerAge = (document.getElementById("age").innerHTML = "Age: " + Age);
// -----
const Address = prompt("Enter Address");
const CustomerAdd = (document.getElementById("address").innerHTML =
  "Address: " + Address);
// -----
const BankAccountBalance = 20000;
const CustomerBalance = (document.getElementById("bankbalance").innerHTML =
  "Account Balance: " + BankAccountBalance);
// -----
const CostOfItem = prompt("Enter Cost Item");
const ItemCost = (document.getElementById("itemcost").innerHTML =
  "Item Cost: " + CostOfItem);

var itemprice = CostOfItem; //CostOfItem
var total = BankAccountBalance;
var percent = itemprice - (itemprice / 100) * 20;
console.log(percent);
const dis = (document.getElementById("discount").innerHTML =
  "20% Discount Total Payment " + percent);

if (BankAccountBalance >= CostOfItem) {
  CustomerName;
  CustomerAge;
  CustomerAdd;
  CustomerBalance;
  ItemCost;
  dis;
  alert("You can purchase Item");
} else {
  //   console.log("You can't purchase item ");

  alert("You can't purchase item ");
}
// ---------------------------------------------------------------------------

const AccountBalance = "124";
const ItemPrice = 124;

if (AccountBalance !== ItemPrice) {
  console.log("I am runing");
} else {
  console.log("Wrong Not Runing");
}
