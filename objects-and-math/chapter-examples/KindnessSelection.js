function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

 let newArray = [];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
for (i=0; i < 3; i++){
  console.log(" ");
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}

function randomArray(array1, array2){
 let combinedArray = [array1, array2];
 let combinedArrayIndex = Math.floor(Math.random()*2)
 return combinedArray[combinedArrayIndex];
}


 if (randomArray(happiness,words).length === happiness.length){
  
  console.log(randomSelection(happiness));
  console.log(randomSelection(happiness));

  } else {
    console.log(randomSelection(words));
    console.log(randomSelection(words));
  }
 




newArray.push(randomSelection(happiness));
newArray.push(randomSelection(words));
console.log(newArray);