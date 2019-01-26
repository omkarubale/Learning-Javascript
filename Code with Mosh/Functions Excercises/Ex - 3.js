const numbers = [1, 2, 3, 4, 5]
try {
    const count = countOccurences(true, 3);
    console.log(count);
}
catch {
    throw new Error("Invalid input type for countOccurences.");
}

function countOccurences(array, matchElement) {

    return array.reduce((result, elem) => (elem == matchElement) ? result + 1 : result, 0);
}