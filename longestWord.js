// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longestWordFinder(str){

    const word = str.split(" ");
          let longestWord = "";
    for(const longest of word){
        if(longest.length > longestWord.length){
            longestWord = longest;
        }
    }
    return longestWord
}


const longestWord = longestWordFinder("Write a function to find the longest word");
console.log(longestWord);