//let arr = ["a", "b", "c", "d", "e"];

//SLICE
// console.log(arr.slice(4));
// console.log([...arr]);

//SPLICE
// arr.splice(-1);
// console.log(arr.splice(4));

//REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["i", "j", "k", "l", "m"];
// console.log(...arr, ...arr2);
// console.log(arr2);

// const days = ["Mon", "Tue", "Wed"];
// days.forEach(function (day, index) {
//   console.log(`starts with ${index} -- ${day}`);
// });

//Maps
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// //Set
// const currenciesUnique = new Set(["USD", "GBP", "USD"]);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

//Map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUSD);

// const user = "Aditi Ninawe";
// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map((name) => name[0])
//   .join(" ");
// console.log(username);

//Filter Method
// const arra = [5, 6, 7, 3, 2];

// const output = arra.filter((x) => x % 2);
// console.log(output);

//Map Method
// function findSum(arra) {
//   let sum = 0;
//   for (let i = 0; i < arra.length; i++) {
//     sum = sum + arra[i];
//   }
//   return sum;
// }
// console.log(findSum(arra));

// const output1 = arra.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output1);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arra.length; i++) {
//     if (arra[i] > max) {
//       max = arra[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arra));

// const outputR = arra.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(outputR);

//Example of map,reduce and filter
// const users = [
//   { firstName: "aditi", lastName: "ninawe", age: 23 },
//   { firstName: "ankita", lastName: "ninawe", age: 23 },
//   { firstName: "nikita", lastName: "ninawe", age: 25 },
//   { firstName: "riya", lastName: "saraf", age: 22 },
// ];
//Map
// const output = users.map((x) => x.firstName + x.lastName);
// console.log(output);

//Reduce
// const output2 = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output2);

//const output = arra.filter((x) => x % 2);
// console.log(output);
// const output3 = users
//   .filter((x) => x.age < 30)
//   .map((x) => x.firstName + " " + x.lastName);
// console.log(output3);

//Find method
// const numbers = [1, 5, 6, 8, 5];

// function findNum(numbers, index, arr) {
//   console.log("ok");
//console.log(numbers, index, arr);
//   var findingValue = 5;
//   return number === findingValue;
//   return true;
// }
// const result = numbers.find((number) => number === 6);
// console.log(result);

// const users = [
//   { firstName: "aditi", lastName: "ninawe", age: 23 },
//   { firstName: "ankita", lastName: "ninawe", age: 23 },
//   { firstName: "nikita", lastName: "ninawe", age: 25 },
//   { firstName: "riya", lastName: "saraf", age: 22 },
// ];

// const result = users.find(function (user) {
//   return user.lastName === "ninawe";
// });
// console.log(result);

//findIndex
// const ages = [10, 30, 20, 60, 50];
// const result = ages.findIndex((age) => age === 50);
// console.log(result);

//Some and Every Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.includes(-400));

// const anyDeposits = movements.some((mov) => mov === 0);
// console.log(anyDeposits);

// console.log(movements.every((mov) => mov > 0));

//Flat Methods
// const arr = [[1, 2, 3], 4, 5, 6];
// console.log(arr.flat());

//Sort Methods
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//console.log(movements.sort());
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); //Ascending

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements); //Descending
