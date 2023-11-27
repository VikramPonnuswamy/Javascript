/* Exercise 1 */
// Write a JavaScript program to print out all even numbers from a given Array in the same order and stop printing when it finds 237 in the sequence.


// SOLUTION 1: USING A FOR LOOP
//  We can use a for loop to iterate over our numbers
//  (This will fetch numbers in the order they occur
//   in the array, as the exercise specifies)
function solution1( numbers ) {
  for( let i = 0; i < numbers.length; i++ ) {   // Iterate over the array of numbers

    if( numbers[ i ] % 2 == 0 )                 // Test for whether the number is even
      console.log( numbers[ i ] );              //  It is even, so we'll print it out

    if( numbers[ i ] == 237 )                   // Do we have our target 237?
      break;                                    //  If so, we want to quit the for loop!

  }
}


// SOLUTION 2: USING A WHILE LOOP
//  This will iterate in the same way, but we
//   can control execution using the while condition
function solution2( numbers ) {
  // We'll need an index into the array
  let i = 0;
  // Also, we need something for our while condition
  //  to be able to test straight away; let's take
  //  the first number from the array
  let number = numbers[ i ];

  while( number != 237 && i < numbers.length ) {    // Loop until we reach 237, or the end of the array

    if( number % 2 == 0 )                           //  Test for whether that number is even
      console.log( number );                        //   It is even, so we'll print it out

    // Fetch the next number, and increment the index
    // NOTE: We're using "++i" here, so we:
    //  a) Increment FIRST (e.g. 0 becomes 1)
    //  b) and THEN use the index (e.g. get numbers[1])
    // (If we used "i++", we'd get numbers[0] before the increment!)
    number = numbers[ ++i ];
  }
}


/* Code to define the "numbers" array, and call our chosen function */

// We can copy and paste the list of numbers directly from
//  Learning Central into this script:
let numbers = [
    386,
    462,
    47,
    418,
    907,
    344,
    236,
    375,
    823,
    566,
    597,
    978,
    328,
    615,
    953,
    345,
    399,
    162,
    758,
    219,
    918,
    237,
    412,
    566,
    826,
    248,
    866,
    950,
    626,
    949,
    687,
    217,
    815,
    67,
    104,
    58,
    512,
    24,
    892,
    894,
    767,
    553,
    81,
    379,
    843,
    831,
    445,
    742,
    717,
    958,
    743,
    527,
];

solution2( numbers );

