const numbers = arrayFromRange(1,4)

console.log(numbers);

function arrayFromRange(min,max) {
    const result = [];
    for(var i = min; i<=max; i++)
        result.push(i);
    return result
}