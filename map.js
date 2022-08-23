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
console.log(output);