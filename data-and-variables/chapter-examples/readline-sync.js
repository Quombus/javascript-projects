// const input = require('readline-sync');

// let info = input.question("Question text... ");

const reader = require("readline-sync"); //npm install readline-syn
var log = console.log


let amount = reader.question("Amounts: ");
var i;
  for (i=0; i < amount; i++){
let answer = reader.question("How is your day? ")
log(answer)

};