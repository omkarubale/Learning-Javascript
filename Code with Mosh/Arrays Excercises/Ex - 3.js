const numbers = [1,2,3,2,4,5,1,1,1];

const output = except(numbers, [1,2]);

console.log(output);

function except(array, excluded) { 
    array.sort();
    excluded.sort();
    var i = 0;
    var j = 0;
    var counter = 0;

    while(i != array.length)
    {
        var i_inner = i;
        if(array[i_inner] == excluded[j])
        {
            while(j < excluded.length && array[i_inner] == excluded[j])
            {
                counter++;
                i_inner++;
            }
            array.splice(i,counter);
            j++;
            counter = 0;
        }
        else
            i++;
    }
    return array;
}