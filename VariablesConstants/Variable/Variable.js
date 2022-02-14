// Variables are used to store information to be referenced and manipulated in a computer program.

var MyName = "Muhammad Naqi";
var MyFavNum = 5;
var MyArray = [1, 2, 3, 4, 5, 6, 7, "Bob", "Jane"];
var MyObject = { name: "Chirs", age: 30 };

console.log(typeof MyName + " " + MyName);
console.log(typeof MyFavNum + " " + MyFavNum);
console.log(typeof MyArray + " " + MyArray);
console.log(typeof MyObject + " " + MyObject);
console.log(
  MyName +
    " " +
    MyFavNum +
    " <==> " +
    MyArray +
    " <==> " +
    MyObject.name +
    " " +
    MyObject.age
);

var count = 0;
function increase() {
  count += 1;
  console.log(count);
}
increase();
increase();
increase();
increase();
increase();

var EmpName = "Chirs Jane";
var anotherName = EmpName;
var yetanotherName = anotherName;

console.log(yetanotherName);
