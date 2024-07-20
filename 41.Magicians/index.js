"use strict";
// MAGICIANS
/* Question.41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the
name of each magician in the array. */
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
let magician = ["Bilal", "Mohim", "Saad"];
show_magicians(magician);
