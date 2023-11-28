function is_palindrome( word ) {
  // returns true if word is a palindrome, false otherwise

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Create a reversed version of the string, then test for equality with the original
//  let wordReversed = "";                          // Make an empty string which we can use to build up a reversed version of "word"
//  for( let i = word.length - 1; i >= 0; i-- )     // Iterate over all indices in word, starting with the last (word.length-1), and ending at 0 (since 0 >= 0 is true, -1 >= 0 is not)
//    wordReversed += word[ i ];                    //  Add each character of "word" to our string (so we end up with "word" in reverse)
//  let isPalindrome = word === wordReversed;       // Test whether the reversed word is the same as the original one, and store in the boolean "isPalindrome"
//  return isPalindrome;                            // Finally, return that boolean value (so our function returns "true" if the word is a palindrome, "false" otherwise)
  //


  // SOLUTION 2: Use an array to create a reversed version of the string, then test for equality with the original
//  let lettersAsArray = Array.from( word );        // Turn the string into an array of individual characters
//  let arrayReversed = lettersAsArray.reverse();   // Reverse the order of elements in the array
//  let wordReversed  = arrayReversed.join( "" );   // Create a string from that array, by joining (choosing _no_ separating character between them, i.e. an empty string)
//  let isPalindrome = word === wordReversed;       // Test whether the reversed word is the same as the original one, and store in the boolean "isPalindrome"
//  return isPalindrome;                            // Finally, return that boolean value (so our function returns "true" if the word is a palindrome, "false" otherwise)
  //


  // SOLUTION 3: A one-line solution!
  //  Works by testing if the original word is equal to:
  //  (1) A string built from an array with no separation character (.join( "" ))
  //  (2) Which is a reversed version of an array (.reverse())
  //  (3) Which is build from the original word (Array.from( word ))
  return word === Array.from( word ).reverse().join( "" );        // Return the result of the boolean comparison "word === wordReversed" directly
  //
}

module.exports = is_palindrome;
