function smush( a, b ) {
  // merges the two lists a and b by taking alternate elements from each array in turn

  // Uncomment a solution below (and comment out all
  //  all others) to try it out
  // NOTE: These solutions all assume that both arrays are of the same length
  //  (in this case that's fine, given that the tests always use arrays of identical length)


  // SOLUTION 1: Using a for loop
  let c = [];                             // Create an empty array we can add elements of "a" and "b" to
  for( let i = 0; i < a.length; i++ ) {   // Iterate over all the indices of "a"
    c.push( a[ i ] );                     //  First, add the next element of "a" to our output array "c"
    c.push( b[ i ] );                     //  Then, add the next element of "b" to our output array "c"
  }

  return c;                               // Return the array "c" which we just built
  //


  // SOLUTION 2: Using map() on a concatenated array (* requires the helper function "interleaveFunction()" for map! *) 
//  let aPlusB = a.concat( b );               // Concatenate the arrays "a" and "b" together
//  let c = aPlusB.map( interleaveFunction ); // Build a new array, "c", using our special map() function
//                                            //  (which takes elements from only one half of the array, based on whether they're odd or even)
//  return c;                                 // Return that new array, which is a "smushed" version of "a" and "b"
  //


  // SOLUTION 3: Using reduce for a single-line solution!
//  //  We start off with "accumulator = []", achieved by passing a blank list "[]" as the second argument of reduce()
//  //  The function passed as the first argument to reduce then adds to the blank list ("accumulator"):
//  //   Each time, a new array composed of a[ index ] ("currentValue"), and b[ index ] (literally "b[ index ]"),
//  //    is added to "accumulator" (so we build up a list composed of one element from a, and one from b, in sequence)
//  //  The reduce function is called on array "a", so it will execute its function once for each element of "a"
//  //   (since "b" is assumed to be the same length as "a", this is okay)
//  return a.reduce( ( accumulator, currentValue, index ) => accumulator.concat( currentValue, b[ index ] ),  [] );
  //
}


// HELPER FUNCTION, ONLY NEEDED FOR SOLUTION 2
//  Given an index and an array, returns an element from
//   the first or second half of the array, depending
//   on whether the index is odd or even
function interleaveFunction( element, index, array ) {
  let halfIndex = Math.floor( index / 2 );                        // Fetch the mid-point of the array
  if( index % 2 === 0 )                                           // If the index is even,
    return array[ halfIndex ];                                    //  fetch an element from the first half of the array
  else                                                            // Otherwise, the index is odd, so
    return array[ Math.floor( array.length / 2 ) + halfIndex ];   //  fetch an element from the second half of the array
};


module.exports = smush;
