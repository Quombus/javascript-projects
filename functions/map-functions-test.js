let arr = ['Elocution', 21, 'Clean teeth', 100];


function arrayMapTest(array){
    let doubleFunction = function(n) {
      return n*2;
    };
    let returnedArray = array.map(doubleFunction);
    console.log(returnedArray);

}

arrayMapTest(arr);

let arrayStrings = ['Grongulo', 'Jarqueezius', 'Clyde;']

function wordSwapFunction(wordArray){
    let wordSwap = function(n){
     return n = "SWAP";
    };
    let returnedArray = wordArray.map(wordSwap);
    console.log(returnedArray);
}
wordSwapFunction(arr);