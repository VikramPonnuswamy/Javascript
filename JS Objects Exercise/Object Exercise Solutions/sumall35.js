function sumall35( high ) {
  // should return the sum of all multiples of 3 and 5 below "high", or -1 if "high" is not a number

  // First of all, let's make sure that "high" is actually a number (i.e. of type "number")
  if( typeof high != "number" ) {       // Notice we can use "typeof high" as well as "typeof( high )"
    return -1;                          //  If "high" is _not_ a number, we need to return the value -1
  }

  // Here, we can use very similar code to our solution in "sumall.js":
  let sum = 0;
  for( let i = high-1; i > 0; i-- ) {   // This time, we start at "high - 1" (but still stop at 1)
    if( i % 3 === 0 || i % 5 === 0 ) {  // Is out number divisble by 3 or 5?
      sum += i;                         // ..If it is, add it to our total
    }
  }

  return sum;                       // Now we have our total, we can simply return it
}

module.exports = sumall35;
