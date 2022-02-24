//...While Loop Statement

let numberOfLoop = 0;
while (numberOfLoop < 10) {
  console.log("I am looping");
  numberOfLoop++;
}

let num1 = 0;
let num2 = 0;
while (num1 < 100) {
  num1 += 5;
  console.log(num1);
  num2 += num1;
  loopDeloop();
}
function loopDeloop() {
  console.log("I am Looping!!");
}

const names = ["Chirs", "Zack", "Jessica", "John", "Jane", "Ali"];
let index = 0;
while (index < names.length) {
  if (names[index] === "Ali") {
    console.log(names[index]);
    break;
  }
  index += 1;
}
console.log(index);

// --------------------
function nameLooper(arr, username) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === username) {
      console.log(arr[index], "Index", index);
      break;
    }
    index += 1;
  }
}
nameLooper(names, "John");

//do ...While Loop Statement

let shouldRunOnlyOnce = false;
let indexval = 0;

do {
  console.log("Looping!!!");
  indexval += 1;
  if (indexval === 10) {
    shouldRunOnlyOnce = false;
  }
} while (shouldRunOnlyOnce);

// ----------------------
let condition = false;
do {
  const userInput = prompt("Enter q to exit");
  if (userInput === "q") {
    condition = false;
  } else {
    condition = true;
  }
} while (condition);

// ----------------------
let totalMoney = 100;
do {
  checkIfCanPurchase();
} while (totalMoney > 500);

function checkIfCanPurchase() {
  if (totalMoney > 500) {
    console.log("Can Purchase :)");
  } else {
    console.log("Cannot Purchase :)");
  }
}
