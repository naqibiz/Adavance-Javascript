// Advance Functions

var sayHi = () => {
  console.log("Hello, using arrow functions");
};
sayHi();

// ************
const multiplier = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplier(5, 10));

// ******************
// userNameList (arrow map function)

const users = [
  { name: "Chirs", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Billy", age: 40 },
  { name: "Smith", age: 35 },
  { name: "John", age: 45 },
];

console.log("Maping in users");
const userNameList = users.map((user) => {
  return user.name + " " + user.age;
});
console.log(userNameList);

console.log("Maping in myArr");
function mapUserNames(myArr) {
  const userNameList = myArr.map((user) => {
    return user.name + " " + user.age;
  });
  return userNameList;
}
console.log(mapUserNames(users));

// ******************
const multipliernum = (x, y) => x * y;
console.log(multipliernum(2, 3), "Multiplier Num");

const multipliernum2 = (num) => num * num;
console.log(multipliernum2(8), "Multiplier Num Two");

const mapUsersName = (myArr) => myArr.map((user) => user.name);
console.log(mapUsersName(users));

// ******************
// filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filteredNumber = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(filteredNumber);

// ******************
// doubledNumber
const doubledNumbers = (num) => {
  const numberContainer = [];
  num.forEach((n) => {
    const doubled = n * 2;
    numberContainer.push(doubled);
  });
  return numberContainer;
};

console.log(doubledNumbers(numbers));

// ******************
// string split

function stringSplitter(str) {
  return str.split(" ");
}
console.log(stringSplitter("Hi there"));

const initialString = "How are you";
function stringSplitters(str = initialString) {
  return str.split(" ");
}
console.log(stringSplitters());

// *********************
// splice arg

function logAllArguments(x) {
  const args = Array.prototype.splice.call(arguments, logAllArguments.length);
  console.log(args.sort());
}
logAllArguments("hi", "Hello", "How are you");
logAllArguments(true, 3, 1, 5, 6); // after sort (1, 3, 5, 6) true is splice

function Multiplied(multiplier, ...nums) {
  return nums.map((n) => multiplier * n);
}
console.log(Multiplied(10, 5, 1, 3, 6, 7, 8, 9, 10, 313));
