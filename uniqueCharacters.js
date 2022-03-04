// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False


let chars = "False"

function hasUniqueChars(char){

    let chars = new Set([])
    for(let i = 0; i< char.length;i++){
        chars.add(char[i])
    }
    return chars.size === char.length
}

console.log(hasUniqueChars("Monday"))