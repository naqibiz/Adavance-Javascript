// * Variable is a function scope, variable as access anywhere around the function,
// but not out of function scope is used.
// * Let is block scope Variable and this accessed inside block.
// * const does not accept assigned same name variables this is override.
// ---------------------------------------------------------------------------------
//   Difference Between Let & Const
// * LET & CONST (The scope of a let and const variable is block scope.)
// * Let (It can be updated and re-declared into the scope.)
// * Const (It can be updated but cannot be re-declared into the scope.)
// ---------------------------------------------------------------------------------

// Variable Example

function sayHi() {
  var shouldsayHi = true;
  var reallySayHi = true;

  if (shouldsayHi === true) {
    var myName = "Chirs";
    if (reallySayHi === true) {
      var myLastName = "Smith";
    }
  }
  // out if block scope
  var myLastName = "John";
  console.log("Hi" + " " + myName + " " + myLastName);
}
// out of function scope
// console.log("Hi" + " " + myName + "" + " " + myLastName);
sayHi();

// Let Example

function sayHiTwo() {
  var shouldsayHiTwo = true;
  let MyName;

  if (shouldsayHiTwo === true) {
    MyName = "Chirs";
    console.log("Hi" + " " + MyName);
  } else {
    MyName = "jane";
    console.log("Hi" + " " + MyName);
  }
  // console.log("Hi" + " " + myName, "Let variable");
}
sayHiTwo();

// const Example

const MyName = "Chirs";
// MyName = "Chirs Jane";
MyLastName = "Jane";
console.log(MyName + " " + MyLastName);

const MyArray = [1, 2, 3, 4];
// MyArray = [5, 6, 7, 8];
// MySecondArray = [5, 6, 7, 8];
console.log(MyArray);
MyArray.push(5, 6, 7, 8);
console.log(MyArray);

const MyObject = { name: "Chirs" };
MyObject.name = "Jane";
console.log(MyObject);

function welcome() {
  const Myname = "John";
  if (true) {
    const Myname = "Smith";
    console.log(Myname);
  }
  console.log(Myname);
}
welcome();
