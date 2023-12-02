function repeat_string(s, n) {
  // returns a string with the string s repeated n times
  let string = '';
  while (n > 0) {
    string = string.concat(s);
    n--;
  }
  return string;
}

module.exports = repeat_string;
