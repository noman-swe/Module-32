const numbers = [4, 6, 8, 10];

// making double of the array
const output = [];

const doubleIt = number => number * 2; 
for(const number of numbers){
    // output.push(number * 2);

    //try to call a function in a loop
    const resut = doubleIt(number);
    output.push(resut);
}
// console.log(output);


// es-6 system to double a array value
const output2 = numbers.map(doubleIt);

// another way
// const output3 = numbers.map(number => number * 2);
const output3 = numbers.map( x => x * 2);
console.log(output2);
console.log(output3);


// squares of the array value
const squares = numbers.map(x=> x*x);
console.log(squares);