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
const { start } = require("repl");
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

//Creating an array to store the different multiple products.
let product = [];
//Created a count to store each value in the next index in the array.
let count = 0;
//calling the function with product passed through as the parameter.
productNum(product);

//declaring the function for the loop of multiplying the each number by every number in the list before moving to second number in the array of numbers. 
//For this we needed two for loop. One to take the a value and nested loop inside to take the value and multiple through that value with every integer in the file. Then exit out before moving to the next value and that is then enters the new nested loop.

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


//now we want to sort it in the descding order to get top 3 highest values in index 0,1,2. 
//This sort requires a function which needs it to actually sort in the descending order. Otherwise it'll sort with the first value. for example when comparing 25 and 100, it'll place the 25 as the highest since it's 2 is greater than 1. Hence the function.

// If the compare function returns a negative value, a comes before b.
// If it returns a positive value, b comes before a.
// If it returns 0, the order remains unchanged.
//b-a does the high to low where as a-b does the lowest to high

product.sort(function(a,b){return b-a});
//This outputs the highest 3 integers after sorting..
console.log(product[0],product[1], product[2]);



/////////////Exercise 4
///////Write a JavaScript program to multiply all the items in a list by the same value
//ANSWERS: 200, 10, 50, 26, 12.5 where k is 2 and items are 100, 5, 25, 13, 6.25

//storing a single value for multiplying
let k = 2;
//array of items to be multiplied by k
let items = [100, 5, 25, 13, 6.25];
//new array to store the multiplied value
let productValue = [];

//for loop to go through each item in the items array and multiply by k. 

for (i=0;i<items.length;i++) {
    productValue[i] = k * items[i];
}

//finally output the array to give out the answers from the array.
console.log(productValue);
