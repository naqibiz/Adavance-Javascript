// For Loops
// Repeat until a specific condition evaluates to false
// ------------------
// for(initial expression; condition; increment = expression){
//     statement
// }

// var index = 0;
for (var index = 0; index < 10; index++) {
  console.log(index);
}

const iceCream = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Rocky Road",
  "Blueberry",
];

for (var i = 0; i < iceCream.length; i++) {
  console.log(iceCream[i]);
}

for (let i = 0; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log("Session Three");
  } else if (i % 3 === 0) {
    console.log("Session One");
  } else if (i % 5 === 0) {
    console.log("Session Two");
  }
  console.log(i);
}

//Nested For Loops
outerLoop: for (let n = 0; n < 10; n++) {
  console.log("Loop # " + n);
  innerLoop: for (let j = 0; j < 10; j++) {
    console.log("Inner Loop # " + j);
    if (j === 3) {
      break innerLoop;
    }
    if (n === 5) {
      break outerLoop;
    }
  }
}
console.log("Loop Finished");

// ------------------------------
// setTimeout in For Loop

const looper = (value) => {
  setTimeout(() => {
    console.log(value, "Value");
  }, 3000);
};

for (let i = 0; i < 10; i++) {
  looper(i);
}
