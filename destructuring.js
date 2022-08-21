const fish = {
    id: 58, name: 'King Hilsha', price: 9999, phone:'01616459456', address:'Chadpur', dress: 'silver'
};

// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;
/* 
eivabe prottek ti object property er jonno amadr alada alada variable declare korte hocchy but in es6 we can make short of this problem
*/

const {phone, price, address} = fish;


console.log(phone);
console.log(price);
console.log(address);


const company = {
    name: 'GP',
    ceo:{id:1, name:'ajmol', food:'fuchka'},
    web:{work:'website development', employee:'22', framework: 'react'}
};

// const work = company.web.work;
// const framework = company.web.framework;

// same here --to solve again in short
const {work, framework} = company.web;
const {food} = company.ceo;


console.log(work);
console.log(food);
console.log(framework);
