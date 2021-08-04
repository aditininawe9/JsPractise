"use strict";
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   booking.push(booking);
// };
// console.log("LH123");
// console.log("LH123", 2, 800);

// const flight = "LH234";
// const aditi = {
//   name: "Aditi Ninawe",
//   passport: 123456789,
// };
// const checkIn = function (flightNum, passenger) {
//   (flightNum = "LH999"), (passenger.name = "Miss" + passenger.name);
//   if (passenger.passport === 123456789) {
//     alert("Checked in");
//   } else {
//     alert("Wrong Password");
//   }
// };
// checkIn(flight, aditi);
// console.log(flight);
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };
// newPassport(aditi);
// checkIn(flight, aditi);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
//Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String : ${str}`);
//   console.log(`Transformed String : ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer(`Js is the best `, upperFirstWord);
// transformer(`Js is the best `, oneWord);

//Js callbacks
// const high5 = function () {
//   console.log("5");
// };

// document.body.addEventListener("click", high5);
// ["Aditi", "Ankita"].forEach(high5);

//Functions returning functions
// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Aditi");
// greeterHey("Ninawe");
// greet("Hello")("Aditi");

// const book = {
//   book: "Emma",
//   code: "EM",
//   bookings: [],

//   read(bookNum, name) {
//     console.log(
//       `${name} belongs to ${this.book} of code ${this.code} of ${bookNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${bookNum}`, name });
//   },
// };

// book.read(23, "subconsious mind");

// const eurowings = {
//   book: "Eurowings",
//   code: "EW",
//   bookings: [],
// };

// const read = book.book;
// book(21,'sara')

// const luth = {
//   airline: "luth",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//   },
// };
// luth.book(123, "Jonas");
// console.log(luth);
// const eurowings = {
//   name: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };
// const book = luth.book;
// book.call(23, "Sara");
// console.log(eurowings);
// book.call(293, "Mary");
// console.log(luth);

//Apply Method
// const fligtData = [238, "Aditi"];
// book.apply(luth, fligtData);
// console.log(luth);

// const bookEW = book.bind(eurowings);
// bookEW(22, "Ankita");
// bookEW("Nikita");

let name = {
  firstName: "Aditi",
  lastName: "Ninawe",
};
let printFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};
printFullName.call(name, "Jabalpur");
printFullName.apply(name, ["Indore"]);
let name2 = {
  firstName: "Ankita",
  lastName: "Ninawe",
};
//function borrowing
printFullName.call(name2, "Mumbai");
printFullName.apply(name2, ["Pune"]);

//bind method
let printname = printFullName.bind(name2, "Hydrabad");
console.log(printname);
printname();

const runOnce = function () {
  console.log("never run again");
};
runOnce();
(function () {
  console.log("never run again");
  const isPrivate = 25;
  console.log(isPrivate);
});
() => console.log("Never run again");

//Closures

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
