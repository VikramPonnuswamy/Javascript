function population(start, increase, additions, target) {
    // given a starting population, which increases by increase percent each year, and additions people arriving from outside town, how many years does it take to reach the target population?

let currentPop = start;
let year = 0;

//This is just simple maths to be honest. in a while loop cuz we don't know the number of iterations.
while (currentPop < target) {
    currentPop = currentPop*(1+(increase/100)) + additions;
    year++;
}

return year;

}

module.exports = population;