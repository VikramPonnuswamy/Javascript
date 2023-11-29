function even_or_odd(num) {
  // returns 'even' if the number given is even, or 'odd' if the number given is odd.
  // this checks if the number is has any remainder when it is divided by 2. if it doesn't the number is even. hence printing even. otherwise it's odd. 
  
  if (num % 2 ==0) {
    return "even" ;
  }
  else {
    return "odd" ;
  }
  
  
}

module.exports = even_or_odd;
