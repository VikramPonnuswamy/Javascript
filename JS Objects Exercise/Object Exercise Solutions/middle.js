function middle(input) {
  // accepts a string as input, returns the middle character (if length is odd) or the middle two characters (if length is even)

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Use an if statement
//  if( input.length % 2 === 0 ) {                // Is the length of our string even?
//    let middle2 = input.length / 2;             //  If so, get the second of the middle indices (e.g. if string is length 6, middle2 = 3)
//    let middle1 = middle2 - 1;                  //  Store the index of the first middle index (e.g. if middle2 = 3, then the character before it will be middle2 - 1)
//    let char1 = input[ middle1 ];               //  Now, we can get the first of the two middle characters (storing it temporarily as "char1")
//    let char2 = input[ middle2 ];               //  And we can get the second also (storing it temporarily as "char2")
//    return char1 + char2;                       //  Since both characters are of the type "string", we can use "+" to concatenate them (returning both characters together)
//  }
//
//  // If we reach here, our string's length was not even, so we want to return only one character
//  let middle = Math.floor( input.length / 2 );  // We can use Math.floor() to get the integer component as our middle index (e.g. is string is length 5, middle = floor(2.5) = 2)
//  return input[ middle ];                       // Return the middle character directly
  //


  // SOLUTION 2: Use an if statement, and more compact code
//  if( input.length % 2 === 0 )                  // Is the length of our string even?
//    return input[ ( input.length / 2 ) - 1 ] + input[ input.length / 2 ];   // Use the same logic as Solution 1 to fetch both characters and return their concatenation
//
//  // If we reach here, our string's length was not even, so we want to return only one character
//  return input[ Math.floor( input.length / 2 )  ];                          // Use the same logic as Solution 1 to fetch the middle character directly
  //


  // SOLUTION 3: Use the ternary operator for a one-line solution... but is it still clearly readable?
  return input.length % 2  ?  input[ Math.floor( input.length / 2 ) ]  :  input[ ( input.length / 2 ) - 1 ] + input[ input.length / 2 ];
  //
}

module.exports = middle;
