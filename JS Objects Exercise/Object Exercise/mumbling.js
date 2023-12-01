function mumble(input) {
    // accepts a string as input, and returns a new string with the first character repeated once, the second twice, and so on. The first character of each string of repeats should be upper case
    
    let stringArry = input.split('');
    let newString = '';
    if (stringArry < 1) {
        newString = stringArry
        return  newString;
    }
    else {
        
    }
    for (i=0;i<stringArry;i++) {
        newString = newString +"-"+ stringArry[i].toUpperCase + "-"+stringArry[i]*i
    }
}

module.exports = mumble;