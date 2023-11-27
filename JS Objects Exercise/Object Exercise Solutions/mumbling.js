function mumble( input ) {
  // accepts a string as input, and returns a new string with 
  // the first character repeated once, the second twice, and so on.
  // The first character of each string of repeats should be upper case,
  // and each set of characters should be separated by a dash

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


    // SOLUTION 1: Use nested for loops, and simple if statements
//    let output = "";                            // Create a blank string to use for building our output string
//    for( let i = 0; i < input.length; i++ ) {   // Iterate over the indices of every letter in the input string
//      let letter = input[ i ];                  //  Get the letter at index i; store it in the variable "letter"
//
//      for( let j = 0; j < i + 1; j++ )          //  For each letter, iterate over all values from 0 to index+1
//        if( j == 0 )                            //   Is this the first time we're repeating the letter?
//          output += letter.toUpperCase();       //    If so, we need to make it uppercase (and add it to our output string)
//        else                                    //   Otherwise, this isn't the first repeat of the letter...
//          output += letter;                     //    ..so we just add the letter to our output string (without making it uppercase)
//
//      if( i < input.length - 1 )                //  If this _isn't_ the last index (i.e. input.length-1), we need to add a dash!
//        output += "-";                          //   Append the dash to our output string
//    }
//
//    return output;                              // Finally, we've finished building our output string, so we can return it now
    //


    // SOLUTION 2: Use for..of and string methods, for a compact solution
    let output = "";                            // Create a blank string to use for building our output string
    let i = 0;                                  // Create a counter "i" to keep track of which letter index we're working on (we'll use this, then increment it, using "i++")
    for( letter of input ) {                    // Iterate over each character of the input string
      output += letter.toUpperCase() + letter.repeat( i++ ) + "-";    // For each character, add (1) an uppercase letter, (2) a number of non-uppercase letters, and (3) a dash
    }

    return output.slice( 0, -1 );               // Return the string we build, _without_ its final character (because that will be the final dash we added, which we don't want)
    //
}

module.exports = mumble;
