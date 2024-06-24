let size = 5;
function makeLine(n) {

let hash = '#';
let hashLine = hash.repeat(n);
return hashLine; 

}
console.log(makeLine(1));




function makeRectangle(x, y){
      let line =  (` ${makeLine(x)}\n`)
      let rectangle = line.repeat(y);
      return rectangle;
}



 function makeStairs(s){ 
   let stepLadder;
    for (let i = 0; i < s ; i++){    
    let hash = '#';
    stepLadder = `${hash.repeat(i + 1)}`
    console.log(stepLadder)
    }
    return stepLadder;
 }
makeStairs(5);


function makeSpaceLine(numSpace, numChars){
let spaces = '_'
let chars = "#"

spacesTotal = spaces.repeat(numSpace);
charsTotal = chars.repeat(numChars);
let output = console.log(`${spacesTotal}${charsTotal}${spacesTotal}`);

return output;
 }
makeSpaceLine(3,5);


function makeIsocelesTriangle(height){
    let triangle;
    for (let i = 0; i < height ; i++){    
        let hash = '#';
        let space = " "
        

        let triangle = `${space.repeat(height - i - 1)} ${hash.repeat(2 * i + 1)}`
        console.log(triangle);
}
return triangle;
}
makeIsocelesTriangle(5);

function makeDiamond(height){

 for (let i = 0; i < height ; i++){    
    let hash = '#';
    let space = " "
    console.log(space.repeat(height - i - 1) + hash.repeat(2 * i + 1));
}
for (let i = height - 1; i >= 0; i--){    
        let hash = '#';
        let space = " "
        console.log(space.repeat(height - i - 1) + hash.repeat(2 * i + 1));     
}


}
makeDiamond(5);