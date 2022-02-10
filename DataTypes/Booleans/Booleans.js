// Boolean Trur and false

// ***************************************************************
var messagetrue = "This var is true";
var messagefalse = "This var is not true";

var shouldBeTrue = true;
var shouldBefalse = false;

if (shouldBeTrue === false) {
  document.getElementById("checkboolean").innerHTML = messagetrue;
} else {
  document.getElementById("checkboolean").innerHTML = messagefalse;
}

// ***************************************************************
var hasContent = "Muhammad Naqi";
var doesNotHaveContent = "";
document.getElementById("booleantrue").innerHTML =
  hasContent + " " + Boolean(hasContent);
document.getElementById("booleanfalse").innerHTML =
  doesNotHaveContent + " " + Boolean(doesNotHaveContent);

// ***************************************************************
// Zero is False and One is true
var isZero = 0;
var isOne = 1;
document.getElementById("zero_one").innerHTML =
  "O value is" +
  " " +
  Boolean(isZero) +
  " " +
  "1 value is" +
  " " +
  Boolean(isOne);

// ***************************************************************
var nonAssignedVariable;
document.getElementById("Undefined").innerHTML = Boolean(nonAssignedVariable);

// ***************************************************************
var myArray = ["Muhammad Naqi", 2, 3, 4, "Ali Hadi Rajani", 6];

if (myArray) {
  console.log("Has Truthy Values");
} else {
  console.log("Has Not Truthy Values");
}
