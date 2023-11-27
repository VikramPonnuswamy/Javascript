function sumall( num ) {
  // returns the sum of all numbers smaller than or equal to num

  let sum = 0;                      // A temporary variable to hold our working total
  for (let i = num; i > 0; i--) {   // Let's loop backwards from "num" to 1...
    sum += i;                       // ..and add each number to our total
  }

  return sum;                       // Now we have our total, we can simply return it
}

module.exports = sumall;
