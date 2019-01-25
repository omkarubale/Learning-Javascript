const numbers = [1,2,3,-99];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if(array.length == 0)
        return undefined;
    return array.reduce((max, elem) => (elem > max) ? elem : max);
} 