function highestlowest(input) {
  // accepts a string as input, which will be a set of numbers, each separated by a space
  // you must return the highest and lowest number in the string as a space separated string, highest number first

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Use a for loop, storing both largest and smallest numbers to return
//  let numbers = input.split( ' ' );             // First, turn the string into an array of numbers, splitting around the spaces ( ' ' )
//  let max = numbers[ 0 ];                       // Start by assuming the first element is the largest...
//  let min = numbers[ 0 ];                       // ..and also that the first element is the smallest
//  for( let i = 1; i < numbers.length; i++ ) {   // Iterate over the array's remaining indices (1 onwards)
//      if( min > numbers[ i ] )                  //  Is this element smaller than the smallest seen so far?
//          min = numbers[ i ];                   //   If so, store it as "min"
//      if( max < numbers[ i ] )                  //  Is this element larger than the largest seen so far
//          max = numbers[ i ];                   //   If so, store it as "max"
//  }
//
//  return `${max} ${min}`;                       // Create a string from both numbers, with a space in between, and return it
  //


  // SOLUTION 2: Use the built-in Math methods
//  let numbers = input.split( ' ' );             // First, turn the string into an array of numbers, splitting around the spaces ( ' ' )
//  let max = Math.max( ... numbers );            // Use the "..." notation to turn the array into individual arguments, to pass into Math.max
//  let min = Math.min( ... numbers );            // Use the "..." notation to turn the array into individual arguments, to pass into Math.min
//  return `${max} ${min}`;                       // Create a string from both numbers, with a space in between, and return it
  //


  // SOLUTION 3: Use the built-in Math methods in two lines
  let numbers = input.split( ' ' );             // First, turn the string into an array of numbers, splitting around the spaces ( ' ' )
  return `${ Math.max( ... numbers ) } ${ Math.min( ... numbers ) }`;   // Create a string, inserting both .max and .min numbers directly
  //
}

module.exports = highestlowest;
