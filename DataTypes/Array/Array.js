// Array collection of data

// Add another array value is used push keyword and remove value is used pop keyword....
// OR second way Add another array value added in the other array.

var myArray = [
  "Muhammad Naqi",
  "Muhammad Bilal",
  "Muhammad Fayyaz",
  "Muhammad Ali",
  "Hadi Rajani",
  ["Muhammad Meer Mazher", "Muhammad Raza", "Jimbo"],
];
console.log(myArray, "array name is myArray");
// push keyword
// myArray.push(["Muhammad Meer Mazher", "Muhammad Raza", "Jimbo"]);
// myArray.pop();

// SORT ARRAY

var myanotherArray = new Array(); //["Chirs", "Zack", "Jessica", "John", "Jane", "Ali"]
myanotherArray[0] = "Chirs";
myanotherArray[1] = "Zack";
myanotherArray[2] = "Jessica";
myanotherArray[3] = "John";
myanotherArray[4] = "Jane";
myanotherArray[5] = "Ali";
console.log(myanotherArray, "myanotherArray");
var sortArray = myanotherArray.sort();
console.log(sortArray, "myanotherArray sorted array");
var reverse = sortArray.reverse();
console.log(reverse, "myanotherArray reverse array");

// CONCAT ARRAY

var myfirstArray = ["Chirs", "Zack", "Jessica"];
var mysecondArray = ["John", "Jane", "Ali"];
var myotherArray = ["Pete", "Mary", "Janes"];
var concatArray = myfirstArray.concat(mysecondArray, myotherArray);
console.log(concatArray, "concatArray");

// SLICE ARRAY
// Slice keyword remove array value with in and this after selected array.
// example total array 0 to 8 and selet array (5) so 5 to 8 value removed
var sliceArray = concatArray.slice(5);
console.log(sliceArray);

// JOIN ARRAY
// join keyword is used match the array of values
var myjoinArray = ["Chirs", "Zack", "Jessica", "John", "Jane", "Ali"];
var joinArray = myjoinArray.join(", ");
console.log(joinArray, "!!My joinArray!!");
