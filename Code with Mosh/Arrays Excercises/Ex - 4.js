const numbers = [1,2,3,4]

const output = move(numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
    if(array.length < index + offset || 0 > index + offset)
    {
        console.error("Invalid offset");
        return;
    }

    var result = [...array];
    var element = result.splice(index, 1)[0];
    result.splice(index + offset, 0, element);
    
    return result;
}