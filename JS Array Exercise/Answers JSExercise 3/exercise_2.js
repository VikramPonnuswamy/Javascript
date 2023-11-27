/* Exercise 2 */
// Given an Array of numbers and a number k, write a JavaScript program to check whether the sum of any two numbers from the list is equal to k or not.

// SOLUTION 1: USING A FOR LOOP
//  We can use two for loops (nested) to achieve this:
//   a) We step through each index (here, 0-3),
//   b) For each index, we start at the NEXT index (if there is one),
//       and continue to the end of the array
//       (e.g. j=1-3, when i=0; or j=2-3, when i=1 etc.)
//  In this way, we get to check every index against every subsequent
//   index, and so we get to test the sum of every number
//   (so we check 0+1, 0+2, 0+3, then 1+2, 1+3, then 2+3).
function sumCheck( numbers, k ) {

  for( let i = 0; i < numbers.length; i++ )         // Iterate over our entire array
    for( let j = i + 1; j < numbers.length; j++ )   // Iterate from the NEXT number onwards
      if( numbers[ i ] + numbers[ j ] == k )        // Test to see if both numbers sum to k...
        // ..if they do, we can return true
        //  (which quits the function IMMEDIATELY)
        return true;

  // If we reach here, we checked every pair; none summed to k
  return false;
}


// SOLUTION 2: USING AN ARRAY METHOD (.some)
//  This function tests an element at a given index
//   (e.g. element = array[ index ])
//   to see if, when it is added to any subsequent
//   element (e.g. array[ index+something ])
//   the total is equal to k.
//  Note that k is defined at the scope of the whole
//   script, so we can use it here (as if it is a
//   "global" variable).
function sumCheck2( element, index, array ) {
  for( let i = index + 1; i < array.length; i++ )   // Iterate from the NEXT number onwards
    if( element + array[ i ] == k )                 // Test to see if both numbers sum to k...
      // ..if they do, we can return true
      //  (which quits the function IMMEDIATELY)
      return true;

  // If we reach here, we checked ever pair; none summed to k
  return false;
}


/* Code to define "k" and the "numbers" array, then call our chosen function(s) */

let numbers = [ 1, 5, 11, 5 ];
let k = 16;

// First, let's try out for loop based method:
console.log( sumCheck( numbers, k ) );
// Now, let's use Array.prototype.some():
//  This is very like .foreach(), .map() etc.
//  in that it takes a function as an argument
//  (sumCheck2, in this case), and it iterates
//  over the whole array, but it stops and returns
//  "true" as soon as the function it's passed
//  returns "true" (i.e. when sumCheck2() returns
//  "true" it quits and gives us a "true" result).
// If the function we give it never returns "true",
//  it will finish iterating over the whole array,
//  and then return "false".
// We can use it here, because we're looking for
//  the first moment it is true that summing any
//  two array elements together results in
//  the total k.
console.log( numbers.some( sumCheck2 ) );

