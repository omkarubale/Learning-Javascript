const numbers = [1,2,3,4,5,1,1,1,1]

const count = countOccurences(numbers, 3);

console.log(count);

function countOccurences(array, matchElement) {

    return array.reduce((result,elem) => (elem == matchElement) ?  result + 1 : result, 0);
}