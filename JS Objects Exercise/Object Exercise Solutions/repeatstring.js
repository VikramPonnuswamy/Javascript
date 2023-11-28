function repeat_string( s, n ) {
  // returns a string with the string s repeated n times

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Using a for loop
//  let o = "";                       // Create an empty string which we can use to build our output "o"
//  for( let i = 0; i < n; i++ )      // Repeat the operations within this for loop "n" times
//    o += s;                         //  At each iteration, add "s" to our output string "o"
//
//  return o;                         // Return the string we built, consisting of "n" concatenations of the string "s"
  //


  // SOLUTION 2: Using the string method repeat() for a one-line solution
  return s.repeat( n );
  //
}

module.exports = repeat_string;
