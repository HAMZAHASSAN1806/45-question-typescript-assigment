// CARS

/* Question.45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and 
two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information
was stored correctly. */

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]){
    let car: { [key: string]: any }={
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (let i = 0; i < options.length; i++) {
        let [key, value] = options[i]; 
        car[key] = value; 
    }
    return car;
}
const carInfo = createCar("Toyota", "Corolla", ["color", "Black"], ["sunroof", true])
console.log(carInfo);  

