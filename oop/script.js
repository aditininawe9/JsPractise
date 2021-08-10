"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const aditi = new Person("Aditi", 1998);
// console.log(aditi);

//Constructor
//new is created
//function is called, this = {}
//{} linked to prototype
//function automatically return {}

// const ankita = new Person("Ankita", 1999);
// console.log(aditi instanceof Person);

//Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// aditi.calcAge();
// ankita.calcAge();

// console.log(aditi.__proto__);
// console.log(aditi.__proto__ === Person.prototype);

// console.log("jj", Person.prototype.isPrototypeOf(aditi));
// console.log("jj", Person.prototype.isPrototypeOf(ankita));
// console.log("jj", Person.prototype.isPrototypeOf(Person));

//prototypeofLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(aditi.species, ankita.species);

// console.log(aditi.hasOwnProperty("firstName"));
// console.log(ankita.hasOwnProperty("species"));

// console.log("jj", aditi.__proto__);
// console.log("jj", aditi.__proto__.__proto__);
// console.log("kk", aditi.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 8, 6, 7, 5];
// console.log(arr.__proto__);
// console.__proto__(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

//Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2030 - this.birthYear;
//   }
//Set a property that already exists
// set fullName(name) {
//   console.log(name);
//   if (name.includes(" ")) this._fullName = name;
//   else alert(`${name} is not a full name!`);
// }
// get fullName() {
//   return this._fullName;
// }

//Static
//   static hey() {
//     console.log("Hey");
//     console.log(this);
//   }
// }
// const aditi = new PersonCl("Aditi Ninawe", 1998);
// console.log(aditi);
// aditi.calcAge();
// console.log("jj", aditi.age);
// console.log(aditi.__proto__ === PersonCl.prototype);

//Setters and Getters

// const account = {
//   owner: "Aditi",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

//Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 1998;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1998);
// sarah.calcAge();

//Inheritance between 'Classes':Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2000, "Computer Science");
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

//Inheritance between classes :es6 classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//Instance Methods
// calcAge() {
//   console.log(2037 - this.birthYear);
// }
// greet() {
//   console.log(`Hey ${this.fullName}`);
// }
// get age() {
//   return 2037 - this.birthYear;
// }
// set fullName(name) {
//   if (name.includes("")) this._fullName = name;
//   else alert(`${name} is not a full name!`);
// }
// get fullName() {
//   return this._fullName;
// }

//static method
//   static hey() {
//     console.log("Hey there");
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   $;
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old ,but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// martha.introduce();
// martha.calcAge();

//Inheritance between "Classes" : Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init("Jay", 2020, "Computer Science");
// jay.introduce();
// jay.calcAge();

//Another class Example of inheritance

//Private Fields
//Provate Fields
//Public Methods
//Private Methods

class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private Fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Propety
    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanksfor opening an account, ${owner}`);
  }
  //Public Interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}
const acc1 = new Account("Jonas", "EUR", 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.movements);
// console.log(acc1.#pin);
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
