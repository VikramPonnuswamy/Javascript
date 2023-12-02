function smush(a, b) {
  // merges the two lists a and b by taking alternate elements from each list in turn
  let newArray = [];

 for (i=0;i<a.length;i++) {

  //This push functions pushes the value at the end of the new array.
  newArray.push(a[i]);
  newArray.push(b[i])
  
 }

 return newArray;

}

module.exports = smush;
