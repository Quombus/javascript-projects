const { keyInPause } = require("readline-sync");



let superChimpOne = {
   move : function() { 
   return  Math.floor(Math.random()*11)},
   astronautID: 7777,
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   move : function() { 
      return  Math.floor(Math.random()*11)},
   astronautID: 2314,
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
let chimpChimp = {
   move : function() { 
      return  Math.floor(Math.random()*11)},
   astronautID: 4367,
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   move : function() { 
      return  Math.floor(Math.random()*11)},
   astronautID: 5029,
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};
let tardigrade = {
   move : function() { 
      return Math.floor(Math.random()*11)},
   astronautID: 9226,
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
let crew = [superChimpOne, salamander, chimpChimp, beagle, tardigrade];


// function crewReports(array) {
//    for (i=0; i < array.length; i++){ 
//  console.log( `${array[i].name} is a(n) ${array[i].species}. They are ${array[i].age} years old and ${array[i].mass} kilograms. Their ID is ${array[i].astronautID} `)}
// }
// crewReports(crew);






function fitnessTest(array){
  let results = [];
   for (i=0; i < array.length; i++){
      let stepsTaken = 0;
      let timesMoved = 0;
      while (stepsTaken < 20){
         stepsTaken += array[i].move();
         timesMoved ++;
      }
      results.push(`${array[i].name} took ${timesMoved} turns to take 20 steps.`)
   }
   return results;
   }
  

 console.log(fitnessTest(crew));





// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
