const leapYears = function(year) {
if (year % 4 == 0){
    if (year % 100 == 0){
       if (year % 400 == 0){
            return true; //leaper2 
       } else return false; //not2
    } else return true; //leaper1
} else return false; //not1
}
// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(2000))
