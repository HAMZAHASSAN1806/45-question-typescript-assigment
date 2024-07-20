// MAGICIANS

/* Question.41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the
name of each magician in the array. */

function show_magicians(magician:string[]){
    for(let i=0; i<magician.length; i++){
        console.log(magician[i]);
    }
}
let magician:string[]=["Bilal" , "Mohim" , "Saad"]
show_magicians(magician);