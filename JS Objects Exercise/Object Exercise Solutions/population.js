function population( start, increase, additions, target ) {
  // given a starting population, which increases by "increase" percent each year,
  // and "additions" people arriving from outside town, how many years does it take
  // to reach the "target" population?

  // Uncomment a solution below (and comment out all
  //  all others) to try it out


  // SOLUTION 1: Use a while loop, and work out the population step by step
  let current = start;                        // We begin with the current population being equal to "start"
  let years = 0;                              // We also begin with the population having grown for 0 years
  while( current < target ) {                 // Keep adding to the current population until we reach our target population
    current += current * ( increase / 100 );  //  Each year, add a proportion of the current population to the previous year's total (where proportion = percent / 100)
    current += additions;                     //  Each year, add another "additions" people to the current population
    years++;                                  //  Increment our "years" counter each time we do this
  }

  return years;                               // When we reach this point, we've reached the target; return the number of years this took
  //


  // SOLUTION 2: Use a for loop, and build a relatively compact solution
//  for( let years = 1;  ; years++ ) {                  // Start with years = 1; note that by OMITTING the end condition, this for loop will run forever!
//    start += start * ( increase / 100 ) + additions;  //  Each year, add "additions" people, and an "increase" proportion of the starting (current) population
//    if( start >= target )                             //  If we've reached our target...
//      return years;                                   //   ..return the number of years taken to reach the target
//  }
  //


  // SOLUTION 3: Take solution 2, and make it more compact (but less readable?), by leveraging the "for( start; end; execute )" expressions
//  let years = 0;                            // We must define "years" here, so we can return it outside of the "for" loop
//  for(  ; start < target ; years++, start += start * ( increase / 100 ) + additions );  // Loop while start<target; each iteration, increase population, and increment "years"
//  return years;                             // At this point, our "for" loop has ended, and we've reached our target; now, we can return the number of "years" take to reach it
  //
}

module.exports = population;
