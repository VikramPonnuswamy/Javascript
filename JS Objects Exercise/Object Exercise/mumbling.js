function mumble(input) {
    // accepts a string as input, and returns a new string with the first character repeated once, the second twice, and so on. The first character of each string of repeats should be upper case
    
    //SOLUTION: 
    // let output = "";                            // Create a blank string to use for building our output string
    // let i = 0;                                  // Create a counter "i" to keep track of which letter index we're working on (we'll use this, then increment it, using "i++")
    // for( letter of input ) {                    // Iterate over each character of the input string
    //   output += letter.toUpperCase() + letter.repeat( i++ ) + "-";    // For each character, add (1) an uppercase letter, (2) a number of non-uppercase letters, and (3) a dash
    // }

    //return output.slice( 0, -1 );  

    //MY ANSWER:
    //Takes the input and split by each character and stores it in an array.
    let stringArry = input.split('');
    
    //Creating a new array to store the values that needs to be concatenate later.
    let newArray = [];
    //Final string combined for use. 
    let newString = '';


    //Initial for loop to go through the array of the input. Store the value as uppercase in the new array. Then the same value is passed through a while loop and iterated by the position of the input array and concat the value to the item in the newArray index. 
    for (i=0;i<stringArry.length;i++) {
        newArray[i] = stringArry[i].toUpperCase();
        let count = 0;
        let iteration = i;

        while(count < iteration) {
            newArray[i] = newArray[i] + stringArry[i];
            count++
        }

    }

    //All your values are obtained for the input and we need to know concat all the items in the array and return the string. This is done by looping through ever single item in the newArray. 
    //The if statement checks if the newString is empty, to avoid getting a '-' for the first loop. If it is it stores the value of the first item in the Array. 
    //the j+1 nad length-1 deal with the logic to avoid doing the if statement again. 

    for (j=0;j<newArray.length-1;j++) {
        
        if (newString == '') {
            newString = newArray[0];
        }

        newString = newString +'-'+ newArray[j+1];
    }

    console.log(newString);
    return newString;
    
}

module.exports = mumble;