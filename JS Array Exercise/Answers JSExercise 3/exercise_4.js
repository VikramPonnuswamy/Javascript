/* Exercise 4 */
// Write a JavaScript program to multiply all the items in a list by the same value


// SOLUTION 1: USING A FOR LOOP
function multiplyByK( items, k ) {
  for( let i = 0; i < items.length; i++ )   // Iterate over the array's length, so that we have an index i for each element
    items[ i ] *= k;                        // Multiply the element at index i by k at each iteration

  // We don't need to return anything; arrays are "passed by reference", so
  //  any change we make here (unless we copy the array ourselves first)
  //  will alter the original array itself
}


// SOLUTION 2: USING FOREACH
function multiplyByK2( items, k ) {
  // Pass a function to forEach which multiplies the element at each
  //  index within the array by "k" ("k" is within the scope of this
  //  "multiplyByK2()" function, so it is available within forEach, too)
  items.forEach( ( element, index, array ) => array[ index ] *= k );

  // We don't need to return anything; arrays are "passed by reference", so
  //  any change we make here (unless we copy the array ourselves first)
  //  will alter the original array itself
}


// SOLUTION 3: USING MAP
function multiplyByK3( items, k ) {
  // Pass a function to map() which multiplies the element at each
  //  index within the array by "k" ("k" is within the scope of this
  //  "multiplyByK2()" function, so it is available within forEach, too).
  // map() generates a new array for us, so we must return it to use it.
  return items.map( element => element * k );
}



/* Code to define the "items" array and multiplier "k", and call our chosen function */

let items = [ 100, 5, 25, 13, 6.25 ];
let k = 2;


// Solution 1 or 2:

// Use our chosen function to change the "items" array, multiplying each element by "k"
multiplyByK( items, k );
// Print out the (changed) "items" array, so we can see the results
console.log( items );


// Solution 3:

items = [ 100, 5, 25, 13, 6.25 ];     // Reset our array values (they were changed above)

items = multiplyByK3( items, k );
// Print out the (new) "items" array, so we can see the results
console.log( items );

