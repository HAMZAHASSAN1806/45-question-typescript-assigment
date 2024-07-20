"use strict";
// MORE CONDITIONAL TESTS: 
/* Qustion.24 More Conditional tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have
at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// Tests for equality and inequality with strings
let message = "Hello world";
console.log("Is Hello world is equal to 'Hello world'");
console.log(message == "Hello world");
console.log("Is Hello world is not equal to 'Hello world'");
console.log(message != "Hello world");
// Tests using the lower case function
let text = "ARTIFICIAL INTELLIGENCE";
console.log("Is ARTIFICIAL INTELLIGENCE equal to 'artificial intelligence' after being converted to lowercase");
console.log(text.toLowerCase() == "artificial intelligence");
console.log("Is ARTIFICIAL INTELLIGENCE not equal to 'artificial intelligence' after being converted to lowercase");
console.log(text.toLowerCase() != "artificial intelligence");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality and inequality
let a = 10;
let b = 20;
console.log("'a' is equal to 10");
console.log(a == 10);
console.log("'b' is not equal to 20");
console.log(b != 20);
// greater than and less than
let c = 10;
let d = 20;
console.log("'d' is greater than c");
console.log(d > c);
console.log("'d' is less than c");
console.log(d < c);
// greater than or equal to & less than or equal to
let e = 10;
let f = 20;
console.log("'f' is greater than or equal to e");
console.log(f >= e);
console.log("'f' is less than or equal to e");
console.log(f <= e);
// Tests using "and" and "or" operators
let g = 10;
let h = 20;
console.log("g is less than 20 and h is greater than 10");
console.log(g < 20 && h > 10);
console.log("g is less than 20 and h is less than 10");
console.log(g < 20 && h < 10);
console.log("g is less than 20 or h is greater than 10");
console.log(g < 20 || h > 10);
console.log("g is greater than 20 or h is less than 10");
console.log(g > 20 || h < 10);
// Test whether an item is in a array
let City = ['Karachi', 'Lahore', 'Multan', 'Islamabad'];
console.log("Is 'Karachi' in the array");
console.log(City.includes("Karachi"));
// Test whether an item is not in a array
console.log("Is 'Karachi' not in the array");
console.log(!City.includes("Karachi"));
