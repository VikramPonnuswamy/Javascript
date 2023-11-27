function largest_in_list( arr ) {
  // returns the largest value in the supplied array

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Using a for loop
//  let largest = arr[ 0 ];                   // Start by assuming the first element is the largest
//  for( let i = 1; i < arr.length; i++ ) {   // Iterate over the array's remaining indices (1 onwards)
//    if( arr[ i ] > largest )                //  Is this element larger than the largest we've seen so far?
//      largest = arr[ i ];                   //   If so, record it as the new largest value
//  }
//
//  return largest;                           // Return the largest value we found during our search
  //


  // SOLUTION 2: Using for..of
//  let largest = arr[ 0 ];                   // Start by assuming the first element is the largest
//  for( element of arr ) {                   // Iterate over the array's elements
//    if( element > largest )                 //  Is this element larger than the largest we've seen so far?
//      largest = element;                    //   If so, record it as the new largest value
//  }
//
//  return largest;                           // Return the largest value we found during our search
  //


  // SOLUTION 3: Using sort(), step by step
//  let sortFunction = ( a, b ) => b - a;       // Create a function to allow sorting in desscending order
//  arr.sort( sortFunction );                   // Use our sort function to sort the array
//  let largest = arr[ 0 ];                     // Now, we know the first index contains the largest value!
//  return largest;                             // Return it
  //


  // SOLUTION 4: Using sort() in one line!
  return arr.sort( ( a, b ) => b - a )[ 0 ];    // (1) Sort the array, (2) return its first element (the largest value)
  //
}

module.exports = largest_in_list;
