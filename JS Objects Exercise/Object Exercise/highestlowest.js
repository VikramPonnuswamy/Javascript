function highestlowest(input) {
    // accepts a string as input, which will be space separated numbers, and you must return the highest and lowest number in the string as a space separated string, highest number first
    input = ["1", "9", "3", "4", "-5"];
    input.sort();
    let endIndex = input.length;
    return input[1] + " " + input[endIndex];

}

module.exports = highestlowest;