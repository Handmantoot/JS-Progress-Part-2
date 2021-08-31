'use strict'; // Strict mode is usefull. :) I like it. 

// let hasDriversLicense = false; //'let' lets you change variable
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

//Function fun
// function logger() {
//     console.log("My name is Nigel.");
// }
// logger() // calls function

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const orangeAppleJuice = fruitProcessor(10, 3);
// console.log(orangeAppleJuice);

// function heyItsMe(firstName, lastName) { //These areguments are EMPTY untill you put information in the heyItsMe variable parameters. 
//     const fullName = `My first Name is ${firstName} and my last name is ${lastName}.`
//     return fullName;
// }
// const myName = heyItsMe("Nigel", "Boles"); // inputs information into firstName, LastName.
// console.log(myName);


// //function declation. Can be called before function.
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression. Cannot be called before function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow Functions
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age2 = calcAge3(1991)
// console.log(age2)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} reitres in ${retirement}`
//     // return retirement;
// }

// console.log(yearsUntilRetirement(1991, "John"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//Functions calling functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;
// }


// console.log(fruitProcessor(2, 3));

//function review

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;

// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} reitres in ${retirement}`);
//         return retirement; // Once met, Return will immediately exit function statement. Make sure the Return statement is last
//     } else {
//         return -1;
//     }

//     // return `${firstName} reitres in ${retirement}`
//     // return retirement;
// }

// console.log(yearsUntilRetirement(1991, 'Nigel'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//coding challenge: Functions will do later




//My Rent calculator

// const monthlyRent = 2100;
// const beforeTaxes = 4600;
// const neededIncome = 3 * monthlyRent;
// const differenceInIncome = neededIncome - beforeTaxes;

// if (beforeTaxes < neededIncome) {
//     console.log(`You need to make ${differenceInIncome}`);
// } else {
//     console.log("You make 3 times the rent and will be approved unless your credit is ASS.");
// }


//Yearly income Function practice


// const nigelsyearly = 4600 * 12;
// const ericsYearly = 2200 * 12;
// const yearlyIncomeCombined = nigelsyearly + ericsYearly;
// console.log(yearlyIncomeCombined);

//arrays

// const friendNames = ["Bob", "phil", "Jack"]; //how to make an array
// // console.log(friendNames);

// // const years = new Array(1991, 1992, 1993, 1994, 2020);
// // console.log(years);


// console.log(friendNames[friendNames.length - 1]);
// console.log(friendNames.length);

// friendNames[2] = 'Jay'; //data manipulation. Changes Jack to Jay
// console.log(friendNames)

// const firstName = "Nigel"
// const nigel = [firstName, 'Boles', 2021 - 1992, 'EDI Developer', friendNames];
// console.log(nigel.length)

// Excercisae
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // years[0] = 1991;

// const age1 = calcAge2(years[years.length - 5]); // Good for changing the numbers in the years array
// const age2 = calcAge2(years[years.length - 4]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge2(years[years.length - 5]), calcAge2(years[years.length - 4]), calcAge2(years[years.length - 1])]
// console.log(ages)

// const friendNames = ["Bob", "phil", "Jack"];
// const newLength = friendNames.push("Jay");
// console.log(friendNames);
// console.log(newLength);

// friendNames.unshift("John");
// console.log(friendNames)

// //removes elements
// friendNames.pop() // removes last. This case is Jay
// const popped = friendNames.pop() //removes Jack
// console.log(popped)
// console.log(friendNames)

// friendNames.shift() // removes first element in array - This case John
// console.log(friendNames)


// console.log(friendNames.indexOf('phil'));
// console.log(friendNames.includes('phil'));

// console.log(friendNames.includes('Morris'));

// if (friendNames.includes("phil")) {
//     console.log("You have a friend named phil...Why?")
// }

//coding challenge arrays

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(bills, tips);

const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(total)

//arrow function refresher 
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;