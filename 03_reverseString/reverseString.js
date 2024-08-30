const reverseString = function(word) {
let splitWord = word.split("");
let reverseLetters = splitWord.reverse();
let joinLetters = reverseLetters.join("");
return joinLetters;
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString("football"));
