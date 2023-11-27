function make_negative(num) {
  // returns the negative value of the number

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Use an if statement
//  if( num > 0 )     // Is our number positive?
//    return -num;    //  If so, negate it and return it
//
//  return num;       // Otherwise, it must be negative or zero already, so we can return it directly
  //


  // SOLUTION 2: Use the ternary operator, for a single-line solution!
  return num > 0 ? -num : num;    // Return "-num" if the number is positive, or simply "num" if it is zero or negative already
  //
}

module.exports = make_negative;
