function middle(input) {
    // accepts a string as input, returns the middle character (if length is odd) or the middle two characters (if length is even)
    let inputArray = input.split("");
    let middleValue = inputArray.length / 2;

    console.log(middleValue);
    
    if (inputArray.length % 2 == 0) {
        
        return inputArray[middleValue-1] + inputArray[middleValue];
    }
    else if (inputArray.length < 1 ) {
        return inputArray;
    }
    else {
        return inputArray[middleValue-0.5];
    }

    
}

module.exports = middle;