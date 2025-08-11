



function vowelCount(str){

    const upper = "AEIOU";
    const lower = "aeiou";
    let count = 0;

    for(const char of str){
        if(upper.includes(char) || lower.includes(char)){
            count++;
        }
    }
    return count;
}

const count = vowelCount("I am New In Programming");
console.log(count);