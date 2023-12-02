function is_palindrome(word) {
  // returns true if word is a palindrome, false otherwise
  
  let wordArray = word.split('');

  let reverseWordArray = wordArray.reverse();
  let joinReverseWordArray = reverseWordArray.join('');
  
  if (joinReverseWordArray == word) {
    return true
  }
  else {
    return false
  }
}

module.exports = is_palindrome;
