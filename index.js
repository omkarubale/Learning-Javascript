function countOccurences(array, searchElement) {
    return array.reduce((count, currentValue) => {
        if(currentValue === searchElement){ count += 1;}
        return count;
    })
}

console.log(countOccurences([2,3,4,5],3))