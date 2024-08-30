const removeFromArray = function(input, ...removals) {
    removals.forEach(remove => {
        let index;
        while ((index = input.indexOf(remove)) !== -1){
            input.splice(index, 1);
        }
    })
    // let index = input.indexOf(remove);
    // if (index !== -1){
    //     input.splice(index, 1)
    // }
    return input;
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 2, 3, 4], 1, 2 ));