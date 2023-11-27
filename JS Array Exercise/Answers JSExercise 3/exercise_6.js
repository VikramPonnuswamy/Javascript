/* Exercise 6 */
// Write a JavaScript program to find the list of words that are longer than n from a given string


// SOLUTION 1: USING A FOR LOOP
//  This is a perfectly acceptable solution, and shows
//   how we can use simple statements to achieve our aim
function wordsOfLength( s, n ) {
  let list = [];                            // Create a blank list to which we can our target words
  let words = s.split( ' ' );               // Split the string (by the space character) into a list of words
  for( let i = 0; i < words.length; i++ )   // Iterate over the length of the words list (to get an index i)
    if( words[ i ].length > n )             //  Is the length of this word greater than n?
      list.push( words[ i ] );              //   If so, add it to our word list
  return list;                              // Return the completed list
}


// SOLUTION 2: USING ARRAY.FILTER
//  This is the most elegant solution, and shows
//   how we can chain calls to split() and filter() together
//   to achieve our aim
function wordsOfLength2( s, n ) {
  // First, split the string around the space character, to get a list of words;
  // Then, immediately call ".filter()" on that list,
  //  passing in a function which returns true if the element (i.e., each word)
  //  is longer than n
  // Finally, return the result of the whole operation
  return s.split( ' ' ).filter( element => element.length > n );
}


/* Code to define a string "s" and word length "n", and call our chosen function */

let s = 'Write a JavaScript program to find the list of words that are longer than n from a given string';
let n = 5;

// Fetch a list of words of length >n using our chosen function
let wordList = wordsOfLength2( s, n );

// Print out the list
console.log( wordList );

