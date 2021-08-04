"use-strict";

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();

//   return age;
// }
// const firstName = "Aditi";
// calcAge(1998);

// const myName = "Aditi";

// if (myName === "Aditi") {
//   console.log(`Aditi is a ${job}`);
//   const age = 2022 - 1998;
//   console.log(age);
//   var job = "developer";
//   console.log(x);
// }

// console.log(i);
// console.log(job);
// console.log(year);

// var i = "aditi";
// let job = "developer";
// const year = 1998;

// console.log(addDec1(2, 4));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 4));
// function addDec1(a, b) {
//   return a + b;
// }
// var addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// const aditi = {
//   name: "Aditi",
//   year: 1998,
//   calcAge: function () {
//     return 2021 - this.year;
//   },
// };

// var a = aditi.calcAge();
// console.log(a);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

// const calcArrow = (birthYear) => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcArrow(1998);

// const aditi = {
//   year: 1998,
//   calcage: function () {
//     console.log(this);
//   },
// };
// aditi.calcage();

// const jonas = {
//   name: "Jonas",
//   year: 1991,
//   calcAge: function () {
// console.log(this);
// console.log(2400 - this.year);

//     const aditi = this;
//     console.log(aditi);
//   },
//   hpy: () => console.log(`Hey ${this.name}`),
//};
// jonas.hpy();
// console.log(this.name);
//jonas.calcAge();
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 7, 8);

//Primitive and Reference
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Aditi",
//   age: 23,
// };
// const friend = me;
// console.log(me.name);
// friend.age = 27;
// console.log("Friend", friend);
// console.log("Me", me);

let name = "aditi";
let newName = name;
name = "ninawe";
console.log(name, newName);

const jessica = {
  firstName: "Aditi",
  lastName: "Ninawe",
  age: 23,
};
const singlejessica = jessica;
singlejessica.lastName = "davis";
console.log("jessica", jessica);
console.log("singlejessica", singlejessica);
