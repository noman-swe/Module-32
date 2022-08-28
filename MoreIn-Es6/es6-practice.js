//1. variable declaration let & const where to use;
const myName = 'Noman';
let myRoll = 32;
myRoll = 05;
// console.log(myRoll);

// 2. templete string or caret usages
// a.
const cash = 5000;
const noMoney = 0;
const myBalanceStatement = `My bank has ${noMoney} and in my poket i've ${cash}`;
// console.log(myBalanceStatement);

// b. use object in templete string
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: '22', framework: 'react', tech: {
            first: 'sad', second: 'raki', third: 'Third'
        }
    }
};

const myCompanyInfo = `I have joined in a company named: ${company.name}, where i work in ${company.web.work}`;
// console.log(myCompanyInfo);

// 3. arrow function----
//a. single perameter - will return the number after dividing by 5;
const mySavings = taka => console.log(taka / 5);
// mySavings(cash);

// b. two perameter - will add two to each number and then multyply the result
const secondArrow = (num1, num2) => {
    const added1 = num1 + 2;
    const added2 = num2 + 2;
    console.log(added1 * added2);
    console.log(num1, num2);
}
// secondArrow(4, 2);

// c. three perameter - will multiply all three parameters 
const thirdArrow = (x, y, z) => console.log(x * y * z);
// thirdArrow(3, 2, 1);

// d. two perameter but it will be a multi-line arrow function , will add two to each number then multiply the result;
const fourthArrow = (x, z) => {
    x = x + 2;
    z = z + 2;
    console.log(x * z);
}
// fourthArrow(2, 2);

// 5. array of numbers and then map to get each elements multuplied by 5 and must use arrow function
const numbers = [10, 5, 9, 32, 50];
const practice6 = numbers.map(number => number / 5);
// console.log(practice6);

const newNumbers = [];
for (const number of numbers) {
    const result = number / 5;
    newNumbers.push(result);
}
// console.log(newNumbers);

//6. numbers of array - get odd numbers by using filter and arrow function
const odds = numbers.filter(number => number % 2);
// console.log(odds);

// 7. array of objects like products; use find to get the object with price 5000.
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 25000, color: 'white' },
    { name: 'smart watch', price: 5000, color: 'black'},
    { name: 'stiky note', price: 500, color: 'off-white'},
    { name: 'water glass', price: 20, color: 'red'},
];
const expensive = products.find(product => product.price >= 5000);
// console.log(expensive);


//8. you have an object - now use destructuring to create a simple variable of any property of the object.

const productss =
{
    name: 'water bottle', price: 50, color: 'yellow',
    companie: { comName: 'pran', comRank: 50 }
};

const { name, price, color } = productss;
console.log(price);
const { comName, comRank } = productss.companie;
console.log(comRank);

// 9. you have an array - now use destructing to create a simple or more variable to get the third element of the array in a variable called 'three'.
const arr = [12, 45, 78, 68];
const [first, second, third, fourth] = arr;
console.log(third);

// 10. just write a function with three perameters and the last perameter will hava a default parameter with value 7 and this function will take three perameters and will return the sun of all the three parameters.
const getThreePeraSums = (x, y, z=7) => {
    const result = x+ y+ z;
    console.log(result);
};
getThreePeraSums(2, 5);


