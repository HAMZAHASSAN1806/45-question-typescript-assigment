"use strict";
// CHECKING USERNAMES
/* Question.32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the
person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users = ["Hamza", "Babar", "Rizwan", "Bilal", "Shayan"];
let new_users = ["Mubashir", "Hamza", "Zohaib", "Hussain", "Babar"];
new_users.forEach((new_user) => {
    let isAvailable = true;
    current_users.forEach((current_user) => {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            console.log(`SORRY! The username '${new_user}' is already taken.`);
            isAvailable = false;
        }
    });
    if (isAvailable) {
        console.log(`The username '${new_user}' is available.`);
    }
});
