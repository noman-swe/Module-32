const friends = ['tom Hanks', 'tom Cruise', 'tom John', 'tom Solaiman'];
const friendLengths = friends.map(x => x.length);
// console.log(friendLengths);

// 
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 25000, color: 'white' },
    { name: 'smart watch', price: 5000, color: 'black'},
    { name: 'stiky note', price: 500, color: 'off-white'},
    { name: 'water glass', price: 20, color: 'red'},
];

const allName = products.map(product => product.name);
console.log(allName);

const allPrice = products.map(product => product.price);
console.log(allPrice);



// show all product
products.map(product => console.log(product)); //map kaj ses e full akta array return kore but forEach ta kore na
// if return is not needed in map function then use forEach
products.forEach(product => console.log(product));