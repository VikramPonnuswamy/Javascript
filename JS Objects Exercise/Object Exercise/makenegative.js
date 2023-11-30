function make_negative(num) {
  // returns the negative value of the number
  
  if (num < 0) {
    return num;
  }
  else {
    let value = num * -1;
    return value;
  }
}

module.exports = make_negative;
