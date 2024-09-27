// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(`The four numbers are valid 
according to the provided criteria: ${isValid}.`);
//output: true

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Part 1

let result1 = (n1 % 5 === 0);
console.log(`The first number is divisible by 5
according to the provided criteria: ${result1}.`); 
//outputs: true
let result2 = (n2 % 5 === 0);
console.log(`The second number is divisible by 5
according to the provided criteria: ${result2}.`);
//outputs: true
let result3 = (n3 % 5 === 0);
console.log(`The third number is divisible by 5
according to the provided criteria: ${result3}.`);
//outputs: true
let result4 = (n4 % 5 === 0);
console.log(`The fourth number is divisible by 5
according to the provided criteria: ${result4}.`);
//outputs: true

let isFirstNumberLargerThan5 = (n1 > n4);
console.log(`The first number is larger than 
the last according to the provided
criteria: ${isFirstNumberLargerThan5}.`); 
//outputs: true

let anyName = (n2 - n1 ) * n3;
console.log(anyName); 
//outputs: 100

let findRemainder = (anyName / n4);
console.log(`The remainder of the second number 
minus the first number, mutiplied by the third
number, then divided by the fourth number 
according to the provided criteria is: ${findRemainder}.`) 
//outputs: 20

// Part 2

let distance = 1500

let speed1 = 55
let mpg1 = 30

let speed2 = 60
let mpg2 = 28

let speed3 = 75
let mpg3 = 23

let budget = 175
let fuel = 3

let speed1FuelNeed = distance/mpg1
let speed2FuelNeed = distance/mpg2
let speed3FuelNeed = distance/mpg3

let speed1FuelBudgetNeed = distance/mpg1*fuel
let speed2FuelBudgetNeed = distance/mpg2*fuel
let speed3FuelBudgetNeed = distance/mpg3*fuel


let enoughBudget1 = speed1FuelBudgetNeed < budget
let enoughBudget2 = speed2FuelBudgetNeed < budget
let enoughBudget3 = speed3FuelBudgetNeed < budget

let speed1TimeNeed = distance/speed1
let speed2TimeNeed = distance/speed2
let speed3TimeNeed = distance/speed3

console.log(`When I drive ${speed1} miles per 
hour, I need ${speed1FuelNeed} gallons of fuel 
to finish the ${distance} miles long trip.`)
//outputs: When I drive 55 miles per hour, I need 50 gallons 
//of fuel to finish the 1500 miles long trip.
console.log(`When I drive ${speed2} miles per 
hour, I need ${speed2FuelNeed} gallons of fuel 
to finish the ${distance} miles long trip.`)
//outputs: When I drive 60 miles per hour, I need 53.57142857142857 gallons 
//of fuel to finish the 1500 miles long trip.
console.log(`When I drive ${speed3} miles per 
hour, I need ${speed3FuelNeed} gallons of fuel 
to finish the ${distance} miles long trip.`)
//outputs: When I drive 75 miles per hour, I need 65.21739130434783 gallons 
//of fuel to finish the 1500 miles long trip.

console.log(`Is my budget enough to cover the 
trip when I drive at a speed of ${speed1} miles 
per hour? The answer is ${enoughBudget1}`)
//outputs: Is my budget enough to cover the trip when 
//I drive at a speed of 55 miles per hour? The answer is true
console.log(`Is my budget enough to cover the 
trip when I drive at a speed of ${speed2} miles 
per hour? The answer is ${enoughBudget2}`)
//outputs: Is my budget enough to cover the trip when 
//I drive at a speed of 60 miles per hour? The answer is true
console.log(`Is my budget enough to cover the 
trip when I drive at a speed of ${speed3} miles 
per hour? The answer is ${enoughBudget3}`)
//outputs: Is my budget enough to cover the trip when 
//I drive at a speed of 75 miles per hour? The answer is false

console.log(`I need to drive ${speed1TimeNeed} 
hours to finish the trip at a speed of ${speed1} 
miles per hour.`)
//outputs: I need to drive 27.272727272727273 hours to finish 
//the trip at a speed of 55 miles per hour.
console.log(`I need to drive ${speed2TimeNeed} 
hours to finish the trip at a speed of ${speed2} 
miles per hour.`)
//outputs: I need to drive 25 hours to finish 
//the trip at a speed of 60 miles per hour.
console.log(`I need to drive ${speed3TimeNeed} 
hours to finish the trip at a speed of ${speed3} 
miles per hour.`)
//outputs: I need to drive 20 hours to finish 
//the trip at a speed of 75 miles per hour.