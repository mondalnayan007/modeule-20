// Write a function to count the number of vowels in a string.



function vowelCount(str){

    let count = 0;

    for(const char of str){
        if (char === "a" || char === "A" ||
            char === "e" || char === "E" ||
            char === "i" || char === "I" ||
            char === "o" || char === "O" ||
            char === "u" || char === "U") {
            count++;
        }
    }
    return count;
}

const count  = vowelCount("Hello World.I am new programmer");

console.log(count);