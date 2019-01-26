function sum(...args) {
    if(Array.isArray(args[0]))
        args = args[0];
    return args.reduce((sum, current) => sum + current);
}

const numbers = [1,2,3,4,5];

const result = sum(numbers);

console.log(result);