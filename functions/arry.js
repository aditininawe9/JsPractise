// const frnd1 = "Aditi";
// const frnd2 = "Ankita";

// const friends = ['Aditi','Ankita'];
// console.log(friends);

// const years = new Array(2020,2021,2022);
// console.log(friends[0]);
// console.log(friends[1]);

// friends[2] = 'Jay'
// console.log(friends)

// const aditi = [frnd1,friends,'Jay',2021-1998]
// console.log(aditi)

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }
// const years = [1998,2000,2001,2002];
// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]),calcAge(years-1)];
// calcAge(years[years.length-1]);
// console.log(ages)

const friends = ['Aditi','Ankita','Nikita','Riya'];
//Add Elements
const newLength = friends.push('Jay');
console.log(newLength)
console.log(friends)
friends.unshift('John');
console.log(friends)

//Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends)
friends.shift();
console.log(friends);
console.log(friends.indexOf('Aditi'))
console.log(friends.indexOf('Ankita'))

//Equality Check
console.log(friends.indexOf('Aditi'))
console.log(friends.indexOf('Ankita'))

if(friends.includes('Ankita')){
    console.log('Included')
}