/* 
1. Write JavaScript code that finds all the words in words.txt with three consecutive double letters.
2. Write JavaScript code to check whether a given number is Oddish or Evenish. A number is called “Oddish” if the sum of all of its digits is odd, and a number is called “Evenish” if the sum of all of its digits is even.*/

const fs = require("fs");

//const { join } = require("path");
 
const data = fs.readFileSync("words.txt", "utf8");

const lines = data.split('\n'); // this is storing the data in an arrray. It takes the string and splitting every time it sees a new linw \n and stores each one in a index.

// this for loop now reads each item in the array and now we can process the individually.
for (i=0; i < lines.length -1 ; i++) {
    //console.log(lines[i]);

    let word = lines[i];
    myFunc(word);
    myFuncNumber(word);

}
function myFunc (word){ 
    count = 0 ; // you need a count to check if the word has 3 consecutive double letters. 
    index = 0 ; // check each character of the word counter. 
    // you want to use while loop cuz we do not know the number of iterations. 

    while (index < word.length - 1) {
        if (count > 0 && word[index] != word[(index+1)]) {
            return;
        }
        
        if (word[index] == word[(index+1)]) {
            count++ ;
            index+=2 ;
        }
        else {
            index++ ;
        }

        if (count == 3) {
            console.log(word);
            return;
        }   
    }
}

function myFuncNumber (word) {
    console.log(word);
    console.log(word.length);

    if (word.length % 2 == 0) {
        console.log("Evenish");
    }
    else {
        console.log("Oddish")
    }  

}