const numbers = [34, 2, 3, 6, 8, 43, 23, 9, 10, 21, 19, 14, 45];
const bigNumber = numbers.filter(n => n > 30);
const smallNumber = numbers.filter(number => number < 10);
// console.log(smallNumber);

// 
// more with filter()
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 25000, color: 'white' },
    { name: 'smart watch', price: 5000, color: 'black'},
    { name: 'stiky note', price: 500, color: 'off-white'},
    { name: 'water glass', price: 20, color: 'red'},
];
// filter with price more than 1000
const expensive = products.filter(product => product.price > 1000);
// console.log(expensive);

// filter with black color
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

// array te jodi object element na pawa jay tahole empty array return dibe

// ///////////////////////////////////////////////////////////////////////////////////////////
//filter array er moddhy element ta k dibe but find just element ta k return dibe & filter array te condition fullfill kora sobai k return dibe but find condition fullfill kora sobai k return na diye just 1st er ta k return dibe------------------ ar sob same;
///////////////////////////////////////////////////////////////////////////////////////////////
// /////////////-find-/////////////
const redItem = products.find(product => product.color == 'red');
console.log(redItem);
