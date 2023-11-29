//let num = 0;

//This function takes in the num value. 
function sumall(num) {
  // returns the sum of all numbers smaller than or equal to num
  let sumValue = 0;

  //loop is ran until num hits 0. you add num to the sum Value then subtract -1 from num and repeats 
  while (num > 0) {
    sumValue = sumValue + num;
    num--;
  }
  return sumValue;
 
}

module.exports = sumall;
