/*

Exercise 1
Write a JavaScript program to print out all even numbers from a given Array in the same order and stop printing when it finds 237 in the sequence.
Sample numbers list:
//see the ex1numbers.txt file. 

Exercise 2
Given an Array of numbers and a number k, write a JavaScript program to check whether the sum of any two numbers from the list is equal to k or not.

For example, given [1, 5, 11, 5] and k = 16, return true since 11 + 5 is 16.

Exercise 3
Write a JavaScript program to compute the largest product of three integers from a given list of integers.

Exercise 4
Write a JavaScript program to multiply all the items in a list by the same value

Exercise 5
Write a JavaScript program to multiply all the items in a list together

Exercise 6
Write a JavaScript program to find the list of words that are longer than n from a given string.

*/

// Exercise 1: 

const fs = require("fs");
const data = fs.readFileSync("ex1numbers.txt", "utf8");

// the + looks for both criteria new space and new line and actions that. 
const lines = data.split(',' + '\n'); // this is storing the data in an arrray. It takes the string and splitting every time it sees a new linw \n and stores each one in a index.

//for loop to run through the array in lines where the data is stored as as an array. 

for (i = 0; i < lines.length ; i++ ) {
    
    let value = lines[i]
    
    if (value != 237) {
       console.log(value);   
    }
    else {
        break;
    }
    
}

//Exercise 2
// Given an Array of numbers and a number k, write a JavaScript program to check whether the sum of any two numbers from the list is equal to k or not.



for (i=0; i<lines.length; i++) {
    
    let k = 527 + 743;
    let numOne = lines[i];

    for (j=0; j<lines.length; j++) {
        
        
        let numTwo = lines[j];
        //found this parsingInt issue while degging as the system was reading the file as string and concetating two number side by side rather than addition arithmetic operation
        let total = parseInt(numOne) + parseInt(numTwo);
        
        if (total == k) {
            console.log('Sum of two numbers has been found = ' + numOne + " & " + numTwo);
        }
        // else {
        //     break;
        // }
    }

}

//Exercise 3
//Write a JavaScript program to compute the largest product of three integers from a given list of integers.
//From this everything will be loaded to git

let product = [];
let count = 0;
productNum(product);

function productNum (product) {
    for (i=0; i<lines.length; i++) {
        
        let numOne = lines[i];

        for (j=0; j<lines.length; j++) {
            
            let numTwo = lines[j];
            
            product[count] = numTwo * numOne;
            count++;
            
        }

    }   
}

console.log(product);

//New Line test for github practice. 

line of connected.