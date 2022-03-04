// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False


// let answer = "False"
function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    string.toLowerCase().replace(/\w/g, (str) => {
      str.split('').reduce((acc, cur) => {
        return !result.includes(cur)
           && alphabet.includes(cur)
           && result.push(cur);
        }, '');
     });
    return alphabet.join('') === result.sort().join('');
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


//Definitly needed google for this one