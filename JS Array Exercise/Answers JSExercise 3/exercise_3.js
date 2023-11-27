/* Exercise 3 */
// Write a JavaScript program to compute the largest product of three integers from a given list of integers.


// SOLUTION 1: USING SORT, AND A HARD-CODED PRODUCT CALCULATION
//  If we sort the array first (in descending order),
//   the first three elements will be the largest values
//   present in the whole array, and multiplying them is
//   guaranteed to result in the greatest product.
//  We can then use indices 0, 1 and 2 to generate our
//   product, which we can immediately return.
function largestProduct( integers ) {
  //console.log( "Array before sorting: " + integers );   // Uncomment to see the original array

  // First, sort the array in descending order (ascending would require a - b instead of b - a)
  integers = integers.sort( ( a, b ) => b - a );
  //console.log( "Array after sorting:  " + integers );   // Uncomment to see the sorted array

  // Next, multiple the first three elements of the array together
  return total = integers[ 0 ] * integers[ 1 ] * integers[ 2 ];
}


// SOLUTION 2: USING SORT, AND FOREACH
//  Again, we sort the array so the largest values occur first.
//  Then, we can slice the array to "throw away"
//   everything except for the three numbers we need.
//  Finally, we can use forEach (instead of a for loop)
//   to generate a total product from the numbers
//   we kept in the array.
//  Note that I've included a "howMany" variable here,
//   which specifies how many values to include when generating
//   the product; this makes the solution more versatile (in that
//   we can handle an arbitrary number of array elements).
function largestProduct2( integers ) {
  // Specify three values to generate a product from
  //  (this could be a function parameter, of course).
  let howMany = 3;
  // First, sort the array in descending order (ascending would require a - b instead of b - a)
  integers = integers.sort( ( a, b ) => b - a );
  // Secondly, slice the array so we only keep the first 3 values
  integers = integers.slice( 0, howMany );

  // Set up a variable to record the total product at each iteration
  //  (it must be 1, or our total would be 0, e.g. 0*1*2*3 = 0!)
  let total = 1;
  // Pass an "arrow-notation" function to forEach, which multiplies
  //  our running total value with the current element at each iteration
  integers.forEach( element => total *= element );

  // Return the total
  return total;
}


// SOLUTION 3: USING A FOR LOOP, MATH.MAX, A TEMPORARY ARRAY,
//  SPLICE AND REDUCE
//  This is not an ideal solution, but is included as an example of
//   the use of other available methods. It requires a new, temporary
//   array (to store our largest values) which can be avoided if we use
//   "sort()" instead, and necessitates the removal of an element from
//   our "integers" array each time we pick a largest number from it.
function largestProduct3( integers ) {
  // Specify three values to generate a product from
  //  (this could be a function parameter, of course).
  let howMany = 3;
  // Create a temporary array, into which we'll place our largest values
  let arrLargest = [];

  // Iterate once for each largest value we need to find
  for( let i = 0; i < howMany; i++ ) {
    // Use "Math.max" to fetch the largest integer in the array;
    //  note the use of the triple-dot operator ("..."), which
    //  allows us to pass each element of the array in to Math.max()
    //  as if it were a separate argument (e.g. instead of the function
    //  being called as "Math.max( [3,2,1] )" for a simple array, it
    //  can be called as "Math.max( 3, 2, 1 )", which Math.max requires)
    let largest = Math.max( ...integers );
    // Store that value in our temporary array
    arrLargest.push( largest );
    // Remove the value from the "integers" array (so we don't
    //  pick it the next time around;
    //  we can use "splice( i, 1 )" to remove the element
    //  at the index i
    integers.splice( integers.indexOf( largest ), 1 );
  }

  // Now we have a list of the largest integers, we can use
  //  Array.prototype.reduce() to multiply each element with
  //  the running total (.reduce() keeps track of the total for us)
  return arrLargest.reduce( ( total, value ) => total * value ); 
}



/* Code to define the "integers" array, and call our chosen function */

let integers = [ 5, 3, 7, 8, 2 ];   // The product of the largest three will be 280

// Calculate and print the product
console.log( largestProduct2( integers ) );

// Print out the original array; note that it is altered in each case.
//  This is because arrays, when passed into function, are
//  "passed by reference" (as distinct from "by value"), which means
//  the function has access to the _original array_ (i.e. no copy is made),
//  and so any change made within the function _changes the original array_
//  itself (so we will see those changes here, after the function has ended)
console.log( integers );

