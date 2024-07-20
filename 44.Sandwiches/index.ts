// SANDWICHES 

/* Question.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times, using a different number of arguments
each time. */


function makeSandwiche(...items:string[]){
    console.log("Here are the items in your sandwich:");
    for(let i=0; i<items.length; i++){
        console.log(`•${items[i]}`);
    }
    console.log("Enjoy your scrumptious sandwich\n");
}
makeSandwiche("Chicken Sandwich" , "Egg Sandwich" , "Seafood Sandwich" , "Roast Beef Sandwich");
makeSandwiche("Ham Sandwich" , "Nutella Sandwich" , "Grilled Chicken Sandwich");
makeSandwiche("Prawn Sandwich" , "Meatball Sandwich");

