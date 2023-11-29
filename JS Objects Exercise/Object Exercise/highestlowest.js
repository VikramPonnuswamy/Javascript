function highestlowest(input) {
    // accepts a string as input, which will be space separated numbers, and you must return the highest and lowest number in the string as a space separated string, highest number first
   
    //this line splits the string into an array everytime it detects a space. so each word is stored in its own index
    let string = input.split(" ")
    
    //this code takes the first index as a and another index as b and compares to see which is higher and this is done throughout the array sorts from largest to smallest. a-b will do smallest to largest. 
    string.sort(function (a,b){return b-a})

    //this returns the first value aka highest and split by a space and returns the smallest ie items that's present in the last index.
    return string[0] + " " + string[string.length-1];

}

module.exports = highestlowest;