function even_or_odd( num ) {
  // returns 'even' if the number given is even, or 'odd' if the number given is odd.

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Use an if statement
//  if( num % 2 == 0 )                  // Is the number even (i.e. divisible by 2)?
//    return 'even';                    //  If so, return the string "even"
//  
//  return 'odd';                       // If not, we'll reach this statement (so we can be sure the number is odd, and can return "odd" directly)
  //


  // SOLUTION 2: Use the ternary operator, for a single-line solution!
//  return ( num % 2 == 0 ) ? 'even' : 'odd';   // If the condition is true, we'll return "even"
  //


  // SOLUTION 3: Use the ternary operator, and take advantage of the fact any non-zero numerical result evaluates as "true" for a really compact solution
  return num % 2 ? 'odd' : 'even';
  //
}

module.exports = even_or_odd;
