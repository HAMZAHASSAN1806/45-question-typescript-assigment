// NAME CASES

/* Question.03 Name Cases: Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase, and titlecase. */

// lowercase:
let personName:string = "HAMZA HASSAN";
console.log(`lowercase = ${personName.toLowerCase()}`);

// uppercase:
console.log(`uppercase = ${personName.toUpperCase()}`);

// titlecase:
let words:string[] = personName.split(" ");
let titleCase:string="";
for(let i=0; i<words.length; i++){
     titleCase += words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase() + " "
};
 console.log(`titlecase = ${titleCase}`);