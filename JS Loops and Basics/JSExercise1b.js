//Question 1: Print the result and the type of the following:

/* 5
5 * 2
5 / 2
5 % 2
5**2
5.0
5.0 * 2
5.0 / 2
5.0 % 2
5.0**2
‘good’
‘good’ + ‘morning’
‘good’*3
‘3’ + ‘2’
‘3’ * 2
‘3’ + 2
‘3’ * ‘2’
 */

var num = 5;
console.log(num);
console.log(typeof(num));

var sum = 5*2;
console.log(sum);
console.log(typeof(sum));

var div = 5/2;
console.log(div);
console.log(typeof(div));

var mod = 5%2;
console.log(mod);
console.log(typeof(mod));

var order = 5**2;
console.log(order);
console.log(typeof(order));

var num1 = 5.0;
console.log(num1);
console.log(typeof(num1));

var sum1 = 5.0*2;
console.log(sum1);
console.log(typeof(sum1));

var div1 = 5.0/2;
console.log(div1);
console.log(typeof(div1));

var mod1 = 5.0%2;
console.log(mod1);
console.log(typeof(mod1));

var order1 = 5.0**2;
console.log(order1);
console.log(typeof(order1));

var word = "good";
console.log(word);
console.log(typeof(word));

var word2 = "morning";
var word3 = word + " " + word2;
console.log(word3);
console.log(typeof(word3));

var word4 = word*3;
console.log(word4);
console.log(typeof(word4));

var word5 = "3";
var word6 = "2";
var word7 = word5 + word6;
console.log(word7);
console.log(typeof(word7));

var word8 = 2;
var word9 = word5*word8;
console.log(word9);
console.log(typeof(word9));

var word10 = word5+word8;
console.log(word10);
console.log(typeof(word10));

var word11 = word5*word6;
console.log(word11);
console.log(typeof(word11));

//Question 2: 
/* Follow these instructions:

Store the values 3 and 5 into variables a and b, respectively.
Multiply a and b and store the result into c.
Divide b by a and store the results into d
Print a, b, c, and d.
Update the values of a, b, c, and d as follows:
Divide c by b.
Multiply d by a.
Increment a by 1.
Subtract 1 from b.
Store the sum of a, b, c, and d into res.
Print result */

var a = 3;
var b = 5;

c = b*a;
d = b/a;

a = c/b;
b = d*a;
c = a+1;
d = b-1;

res = a+b+c+d;

console.log(res);

//Question 3: Define three integer values, a, b, and c. Then, verify the following logical conditions and print their result:

/* a is greater than b.
b is greater than or equal to a and lower than or equal to c.
c is lower than a or greater than b.
a is not equal to b or equal to c.
The sum of a, b, and c is not greater than 5. */

var a1 = 2;
var b1 = 3;
var c1 = 4;

console.log(a1 > b1);
console.log(b1 >= a1 && b1 <= c1);
console.log(c1 < a1 || c1 > b1);
console.log(a1 != b1 || a1 != c1);
console.log(a1+b1+c1 < 5 );

//Question 4: Define three integer values, a, b, and c. Then, translate the following statements into code and test them on the user’s inputs:

/* If the sum of a, b, and c is less then 10, then add 5 to a and print “The value of A has been updated to [value]” (example: “The value of A has been updated to 6”); otherwise, print “Test 1 passed”.

If a is greater than c, then check if a is greater than b. If that’s the case, print “A is the greatest”; otherwise print “A is not the greatest”. If a is not greater than c, then print “C might be greater than A and B”.

Define a fourth number, d. If d is equal to a or b or c, print “You already introduced this number”. Otherwise, print “Thanks for your contribution”.
Define a word, w. If w is “sum”, print “The sum of A, B, and C is [sum]”. If w is “hello”, then print “Hi! Nice to meet you!”. If w is greater than or equal to “a” and lower than or equal to “z”, print “This is just a letter…”. Finally, if the user writes something else, print “Sorry, I don’t understand.”. */

//using the above a,b,c values. 
var sumAbc1 = a1+b1+c1;

if (sumAbc1 < 10){
    
    a1 = a1 + 5;
    console.log("The value of A has been updated to " + a1);
}
else {
    console.log("Test 1 passed");
}

if (c1 < a1 > b1){
    console.log("A is the greatest");
}
else if (c > a) {
    console.log("A is not the greatest");
    console.log("C might be greater than A and B");
}

var d1 = 9;

if(d1 == a1 || d1 == b1 || d1==c1) {
    console.log("You already introduced this number");

}
else {
    console.log("Thanks for contribution");
}

//Define a word, w. If w is “sum”, print “The sum of A, B, and C is [sum]”. If w is “hello”, then print “Hi! Nice to meet you!”. If w is greater than or equal to “a” and lower than or equal to “z”, print “This is just a letter…”. Finally, if the user writes something else, print “Sorry, I don’t understand.”

var w = "python";

if (w == "sum"){
    console.log("The sum of A,B, and C is " + w)
}
else if (w == "hello") {
    console.log("Hi! Nice to meet you!")
}
else if (w >= "z" && w <= "z") {
    console.log("This is just a letter...")
}
else {
    console.log("Sorry, I don't understand.")
}

//Question 5: Using for loops:

/* Print the numbers from 0 to 9.
Print the numbers from 1 to 9.
Print the numbers from 1 to 10.
Print the even numbers from 2 to 20 (inclusive).
Print the sum of all the even numbers from 1 to 21.
Given numbers = [1, 2, 3, 4, 5], print the squared value of each item in numbers.
Given numbers = [1, 4, 7, 8, 15, 20, 35, 45, 55], sequentially print the items in numbers. Stop when you reach 15. Note: you need to use if and break. */

for (i=0; i<=9; i++) {
    console.log(i);
}
for (i=1; i<=10; i++) {
    console.log(i);
}
for (i=1; i<=20; i++){
    var even1 = i%2;
    if (even1 == 0) {
        console.log(i);
    }
}

var evensum = 0;
for (i=1; i<=21; i++){
    var even1 = i%2;
 
    if (even1 == 0) {
        evensum += i;
    }
}

for (i=1; i<=5; i++) {
    console.log(i*i);
}


var numbers = [1,4,7,8,15,20,35,45,55];

for(i = 0; i < numbers.length; i++) {
    
    console.log(numbers[i]);

    if (numbers[i] == 15 ) {
        break;
    }
}

/*
Question 6: Write some JavaScript to print the following string in a specific format.

Sample String : “Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are”

Output :

Twinkle, twinkle, little star,
    How I wonder what you are! 
        Up above the world so high,           
        Like a diamond in the sky. 
Twinkle, twinkle, little star, 
    How I wonder what you are
 */

    let firstline = "Twinkle, twinkle, little star,";
    let secondline = "  How I wonder what you are!";
    let thirdline = "       Up above the world so high,";
    let fourthline = "      Like a diamond in the ski.";
    let fifthline = "Twinkle, twinkle, little star,";
    let sixthline = "   How I wonder what you are!";

    console.log(firstline);
    console.log(secondline);
    console.log(thirdline);
    console.log(fourthline);
    console.log(fifthline);
    console.log(sixthline);
    /*
    Question 7: Write some JavaScript to get the the volume of a sphere, given its radius r.
     */
    let radius = 6;
    let volumeOfSphere = (4/3)*(Math.PI)*(radius**3);
    console.log(volumeOfSphere);

    /*
    Question 8: Write some JavaScript to convert any number of days, hours, minutes and seconds into seconds.
     */

    let days = 5;
    let hours = 36;
    let minutes = 460;
    let seconds = 7500;

    let result = (days*24*60*60)+(hours*60*60)+(minutes*60)+(seconds);
    console.log(result);