// Nested Functions

function squareAndMultiply(num1, num2) {
  function square(x) {
    return x * x; //10 * 10 result (100)
  }
  return square(num1) * square(num2);
  //square(num1) 100 * 60 = 6000 square(num2) 6000 * 60 result 360000
}
console.log(squareAndMultiply(10, 60)); //Result 360000

// -----------------
function squareAndMultiplyTwo(num1, num2) {
  function square(x) {
    return x * x;
  }
  function multiplyBy10(y) {
    return y * 10;
  }
  return square(num1) * multiplyBy10(num2);
}

const first = squareAndMultiplyTwo(4, 4);
const second = squareAndMultiplyTwo(10, 2);
const third = squareAndMultiplyTwo(4, 200);

console.log(first + " " + second + " " + third);

// -----------------

function personFormatter(firstName, lastName, age) {
  function formatNames(arg1, arg2) {
    return arg1 + " " + arg2;
  }
  function dataformatter(fullName, num) {
    const formattedData = { name: fullName, age: num };
    return formattedData;
  }
  const formattedName = formatNames(firstName, lastName);
  return dataformatter(formattedName, age);
}

console.log(personFormatter("Muhammad", "Naqi", 20));
