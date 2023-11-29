function largest_in_list(arr) {
  // returns the largest value in the supplied list
  arr.sort(function(a,b){return b-a});
  return arr[0];
}

module.exports = largest_in_list;
