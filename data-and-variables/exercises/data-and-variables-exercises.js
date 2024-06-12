// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let milesPerKilometer = 0.621;

console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilometer);

let milesToMars = distanceMars * milesPerKilometer;

let hoursToMars = milesToMars / shuttleSpeed;

let daysToMars = hoursToMars / 24;

console.log(spaceShuttle + " will take " + daysToMars + " to reach Mars");

let milesToMoon = distanceMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the Moon");

