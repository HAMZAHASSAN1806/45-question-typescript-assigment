"use strict";
// CHANGING GUEST LIST
/* Queston.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are
inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
let guestNames = ["Ali", "Ahmed", 'Bilal', "Rafay"];
let notAttend = "Rafay";
console.log(`Hello, Dear ${notAttend} today you are'nt invited to a dinner in 5 STAR hotel So, you don't come`);
guestNames.splice(3, 3, "Shayan");
guestNames.map((item) => console.log(`Hello, Dear ${item} today you are invited to a dinner in 5 STAR hotel`));
