const sumAll = function(min, max) {
let final = 0;
if (min > max) {
    [min, max] = [max, min]
}
// console.log("min: " + min + " max: " + max)
if (min < 0 || max < 0 || Number.isInteger(min) == false || 
    Number.isInteger(max) == false || typeof min !== 'number' ||
    typeof max !== 'number'){
    return "ERROR";
}
for (min; min <= max; min++) {
final += min; 
}
return final;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(2, 3.2));