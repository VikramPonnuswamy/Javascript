/* Exercise 5 */
// Write a JavaScript program to multiply all the items in a list together


// Both solutions here are valid; the second is perhaps the most elegant,
//  and makes use of the .reduce() method, which we haven't studied yet.
//  .reduce() works in a similar manner to .map(), but produces a single,
//  overall total (whereas .map() generates an array with one output per element
//  of the original array).


// SOLUTION 1: USING A FOR LOOP
function multiplyElements( items ) {
  let total = 1;                  // Set an initial total (it must be 1, or our total would always be equal to 0, e.g. 0*1*2*3 = 0)
  for( let i = 0; i < items.length; i++ )     // Iterate over the length of the array, so we can access each element by the index i
    total *= items[ i ];                      // Multiply our running total by the element's value

  // Return the final total
  return total;
}


// SOLUTION 2: USING REDUCE
//  Array.prototype.reduce() allows us to iterate over an array,
//   and keep a running total as we do so; for example, it can be
//   used to sum all elements - here, we'll use it to multiply them
function multiplyElements2( items ) {
  // Pass a function into .reduce() which multiplies each element by
  //  the current total, and return the final value (which .reduce()
  //  returns to us)
  return items.reduce( ( total, value ) => total *= value );
}



/* Code to define the "integers" array, and call our chosen function */

let items = [ 5, 3, 7, 8, 2 ];   // The product of these will be 1680

// Calculate and print the product
console.log( multiplyElements2( items ) );

// Print out the original array; note that it is altered in each case.
//  This is because arrays, when passed into function, are
//  "passed by reference" (as distinct from "by value"), which means
//  the function has access to the _original array_ (i.e. no copy is made),
//  and so any change made within the function _changes the original array_
//  itself (so we will see those changes here, after the function has ended)
console.log( items );

