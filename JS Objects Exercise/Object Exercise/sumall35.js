function sumall35(high) {
  // should return the sum of all multiples of 3 and 5 below high, or -1 if high is not a number
  
  if (typeof high != "number") {

    return -1;
  }

  let value = high - 1;
  let finalValue = 0;
  while (value > 0) {
    
    if (value % 3 == 0 || value % 5 == 0) {
      finalValue = finalValue + value;
      value--;
    }
    else {
      value--;
    }

  }
    return finalValue ; 
  
  
}

module.exports = sumall35;
