// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5



function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }




  console.log( findLongestWord("The quick brown fox jumped over the lazy dog"));
