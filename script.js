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

//coding challenge: Functions

//My Rent calculator

const monthlyRent = 2100
const neededIncome = 3 * monthlyRent;

function differenceInRent(){
    
    return differenceInRent;
}
differenceInRent(monthlyRent,neededIncome);