// GREAT MAGICIANS

/* Question.42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
actually been modified. */
 

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

let magician: string[] = ["Bilal", "Mohim", "Saad"];
let great_magicians = make_great(magician);
show_magicians(great_magicians);

