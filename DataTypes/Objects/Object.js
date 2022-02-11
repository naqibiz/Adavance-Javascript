// var myObject = new Object();
// myObject[1] = "Muhammad Naqi";
// myObject[2] = "Muhammad Bilal";
// myObject[3] = "Muhammad Fayyaz";

// var myOtherObject = {
//   1: "Muhammad Naqi",
//   2: "Muhammad Bilal",
//   3: "Muhammad Fayyaz",
// };
// myOtherObject["key"] = "Hadi Rajani";

// -----------Different Ways Creating of Objects-----------
var anOtherObject = {
  firstname: "Muhammad",
  lastname: "Naqi",
  age: 20,
  number: {
    mobile: "555-5678886-55",
    home: "543438-9",
  },
  address: "123 Fake St.",
};

document.getElementById("fname").innerHTML =
  "FIRST NAME: " + " " + anOtherObject.firstname;
document.getElementById("lname").innerHTML =
  "LAST NAME: " + " " + anOtherObject.lastname;
document.getElementById("age").innerHTML = "AGE: " + " " + anOtherObject.age;
document.getElementById("phone").innerHTML =
  "PHONE: " + " " + anOtherObject.number.mobile;
document.getElementById("home").innerHTML =
  "HOME: " + " " + anOtherObject.number.home;
document.getElementById("add").innerHTML =
  "VENUE: " + " " + anOtherObject.address;

// **************************************
var dount = {
  storevall: "Type: coconut",
  glazed: true,
  sweetness: 8,
  hasChocolate: false,
  sayType: function (storevalue) {
    return (storevalue = this.storevall);
  },
  showSweetness: function (storevalue2) {
    return (storevalue2 = "Sweetness: " + this.sweetness + "/10");
  },
};

document.getElementById("type").innerHTML = dount.sayType();
document.getElementById("glazed").innerHTML = "Glazed: " + dount.glazed;
document.getElementById("sweetness").innerHTML = dount.showSweetness();
document.getElementById("chocolate").innerHTML =
  "HasChocolate: " + dount.hasChocolate;

// Constructor pattern for creating object

function Dount(type, glazed, sweetness, hasChocolate) {
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasChocolate = hasChocolate;
  this.sayType = function () {
    console.log("Type: " + this.type);
  };
  this.showSweetness = function () {
    console.log("Sweetness " + this.sweetness + "/10");
  };
}

var coconutDonut = new Dount("Coconut", false, 8, true);
var vanillaDonut = new Dount("Vanilla", true, 10, false);

coconutDonut.sayType();
coconutDonut.showSweetness();
