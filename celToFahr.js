// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFahr(value){
    const Fahrenheit = value * (9/5) + 32;
    return Fahrenheit;
}

const Fahrenheit = celToFahr(25);
console.log("The fahrenheit value is :", Fahrenheit.toFixed(2));