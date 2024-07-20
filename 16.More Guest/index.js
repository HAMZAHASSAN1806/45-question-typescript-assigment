"use strict";
// MORE GUEST
/* Question.16 More Guests: You just found a bigger dinner table, so now more space is available. Think
of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
list. • Print a new set of invitation messages, one for each person in your list. */
let guestNames = ["Ali", "Ahmed", 'Bilal', "Shayan"];
guestNames.map((item) => console.log(`Hello, Dear freind ${item} today i found you a invite a bigger dinner table in 5 STAR hotel`));
let beginningGuest = "Sufiyan";
guestNames[guestNames.unshift(beginningGuest)];
let middleGuest = "Sultan";
let middleIndex = Math.floor(guestNames.length / 2);
guestNames.splice(middleIndex, 0, middleGuest);
let lastGuest = "Sharjeel";
lastGuest[guestNames.push(lastGuest)];
guestNames.map((item) => console.log(`Hello, Dear freind ${item} today you are invited to a dinner in 5 STAR hotel`));
