// Functions

function sayHi(firstname, lastname) {
  console.log("Hi" + " " + firstname + " " + lastname);
}
sayHi("john", "smith");
sayHi("Chirs", "Jones");
sayHi("Sally", "Jane");

function welcome(username, age) {
  console.log("Welcome" + " " + username + "Your Age" + " " + age);
}
const billy = "Billy";
const chirs = "Chirs";
const sally = "Sally";
welcome(billy, 20);
welcome(chirs, 21);
welcome(sally, 22);

// ---------------------------------------------------------

function numberDouble(num) {
  const doubleValue = num * 2;
  return doubleValue;
}
console.log(numberDouble(10));

const numTwoDoubled = numberDouble(2);
const numFiveDoubled = numberDouble(5);
console.log(numTwoDoubled, numFiveDoubled);

function numberAdder(num1, num2) {
  return num1 + num2;
}
console.log(numberAdder(numTwoDoubled, numFiveDoubled));

// ------------------------------------------
const squareNumber = function (num) {
  return num * num;
};

const numberAdder2 = function (squarenum, num2) {
  const squared = squarenum(4);
  return squared + num2;
};
console.log(numberAdder2(squareNumber, 10)); //return 26
console.log(squareNumber(10)); //return 100

let myNumber = 100;

function addTwenty(num) {
  return num + 20;
}

console.log(addTwenty(myNumber)); //return 120

// ------------------------------------------

const myInfo = { name: "Chirs", age: 30 };

function changemyInfo(myObj) {
  myObj.name = "john Smith";
  myObj.age = 100;
}

console.log(myInfo);
changemyInfo(myInfo);
console.log(myInfo);

// ------------------------------------------

const myArray = [1, 2, 3, 4, 5];

function addToArray(myArr) {
  myArr.push(6);
}
console.log(myArray);
addToArray(myArray);
console.log(myArray);
