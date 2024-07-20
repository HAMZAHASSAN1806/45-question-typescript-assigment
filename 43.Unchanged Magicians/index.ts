// UNCHANGED MAGICIANS

/* Question.43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one array of the original names and one array with the Great added 
to each magician’s name. */

function show_magicians(magicians: string[]) {
    for(let i=0; i<magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    for(let i=0; i<magicians.length; i++) {
        magicians[i] = `The Great magician’s ${magicians[i]}.`
    }
    return magicians;
}

let magician:string[] = ["Bilal", "Mohim", "Saad"];

let magicians_copy = magician.slice()
let copy_great_magician = make_great(magicians_copy)

console.log("•ORIGINAL MAGICIANS");
show_magicians(magician);
console.log("•GREAT MAGICIANS");
show_magicians(copy_great_magician);

