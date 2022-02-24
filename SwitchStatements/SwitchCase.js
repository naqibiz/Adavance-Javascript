// Switch Case Statement

// switch (expression) {
//   case value1:
//    statement to be executed when result of expression
//    match the value
//    break;
//   case value2:
//    ....
//    break;

//   default:
//     break;
// }

const myFruit = "Apple";
// --------------
// This is example of if else if statement
// --------------
// if (myFruit === "apple") {
//   console.log("I love Apple ");
// } else if (myFruit === "orange") {
//   console.log("I love Orange ");
// } else if (myFruit === "pear") {
//   console.log("I love Pears");
// } else {
//   console.log("Data not found");
// }

switch (myFruit) {
  case "Apple":
    console.log("Apple is available");
    break;
  case "Orange":
    console.log("Orange is available");
    break;
  case "Mango":
    console.log("Mango is available");
    break;
  case "Banana":
    console.log("Banana is available");
    break;
  default:
    console.log("I didn't understand that but sure");
    break;
}

function fruitLogger(fruit) {
  switch (fruit) {
    case "Apple":
      console.log("Apple is available");
      break;
    case "Orange":
      console.log("Orange is available");
      break;
    case "Mango":
      console.log("Mango is available");
      break;
    case "Banana":
      console.log("Banana is available");
      break;
    default:
      console.log("I didn't understand that but sure");
      return;
  }

  console.log("Broke out of switch statement", fruit);
}
// fruitLogger(prompt("Enter Value"));
fruitLogger("Apple");

function numChecker(num) {
  let value;
  switch (num) {
    case 0:
    case 1:
    case 2:
      value = "Low Range Value";
      break;
    case 3:
    case 4:
    case 5:
      value = "Mid Range Value";
      break;
    case 6:
    case 7:
    case 8:
      value = "High Range Value";
      break;
    default:
      value = "Input number between 0-9";
      break;
  }
  console.log(num + " The Value is " + value);
}
numChecker(8);
