const repeatString = function(word, times) {
let output = ""
if (times < 0) {return "ERROR"};
for (let i = 0; i < times; i++){
    output = output + word;
}
    return output;
};

// Do not edit below this line
module.exports = repeatString;

// console.log(repeatString("he",39));

// const repeatString = function (word, times) {
//     if (times < 0) return "ERROR";
//     let string = "";
//     for (let i = 0; i < times; i++) {
//       string += word;
//     }
//     return string;
//   };
  
//   module.exports = repeatString;

//   console.log(repeatString("hey", 7));