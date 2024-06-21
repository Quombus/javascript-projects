const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str1 = str.slice(0,3);
let str22 = str.slice(4, str.length);
console.log(str22 + str1);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str22 + str1} is derivative of ${str} `);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let str4 = input.question("GIMME a word : ");
let str2 = input.question("Enter the number of letters that will be relocated :  ");
console.log(str2);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if ( str4.length < str2){
   console.log("No Bueno");
} else {
   let str5 = str4.slice(0 , str2);
   let str6 = str4.slice(str2, str4.length)
   console.log(str6 + str5);
}