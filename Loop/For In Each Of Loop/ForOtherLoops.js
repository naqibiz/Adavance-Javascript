// FOR IN LOOP, FOR EACH LOOP & FOR OF LOOP
// In the For each loop condition break and continue not accepted, while for in loop & for of loop accepted.

// ----------------------------------------
// For in loop: Used for looping object properties....
// For in & For each loop

console.log("**********************");
const users = { 1: "Sally", 2: "Bally", 3: "Ashley", 4: "Timmy", 5: "Jane" };
// console.log(users[3]);
for (let obj in users) {
  if (users[obj] === "Bally") {
    users[obj] = "Unknown";
  }
  console.log(obj + " " + users[obj]);
}

console.log("**********************");
const drinks = ["Coffee", "Sprite", "Tea", "Coke", "Pepsi"];
drinks.forEach((d) => {
  console.log(d);
});

console.log("================");
for (const d in drinks) {
  if (drinks[d] === "Tea") {
    continue;
  }
  console.log(drinks[d]);
}
console.log("**********************");

// ----------------------------------------
// For of loop
// For of loop: Used for looping for data like value in an array....
// New loop in es6 used to loop over iteriable objects (array, string, maps, sets, etc...)

// Example Array
const products = ["Oil", "Biscuts", "Tea", "Coffee", "Water"];
for (const p of products) {
  console.log(p);
}
console.log("================");
// Example String
const myString = "🙂😇😨";
for (const character of myString) {
  console.log(character);
}

console.log("================");
const originalArray = [10, 15, 20, 25, 30];
function numIncreaser(arr, numToIncBy) {
  for (let num of arr) {
    num += numToIncBy;
    console.log(num);
  }
}
numIncreaser(originalArray, 30);

console.log("================");
// Example String
const Arraydrinks = ["Coffee", "Sprite", "Tea", "Coke", "Pepsi"];
const uniqueNameSet = new Set(Arraydrinks);

for (const array of uniqueNameSet) {
  console.log(array);
}

console.log("================");
// Example Map
const myMap = new Map();
myMap.set(0, "Zero");
myMap.set(1, "One");

for (const pair of myMap) {
  const [key, value] = pair;
  console.log(key + ": " + value);
}

console.log("================");
const id = 2201;
const uname = "Jane";
const age = 20;
const email = "jane@mail.com";
const phone = 551226671;
const address = "New York";
// -----------
const userInfo = new Map();
userInfo.set(0, id);
userInfo.set(1, uname);
userInfo.set(2, email);
userInfo.set(3, age);
userInfo.set(4, phone);
userInfo.set(5, address);

for (const pair of userInfo) {
  const [key, value] = pair;
  console.log(key + ": " + value);
}
console.log("**********************");
