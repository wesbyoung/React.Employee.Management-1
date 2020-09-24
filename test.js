var products = [{name: 'mango'}, {name: 'mango'}, {name: 'mango'}, {name:'pear'}];
// console.log(products);
var shallowProducts = [];

// Function that counts unique number of items in a list
function getCount(productList, itemToCount) {
    let tempList = [];
    let itemCount = 0;

    for (let i of productList) {
        tempList.push(i.name);
    }
    for (let i of tempList) {
        if(i === itemToCount) {
            itemCount++;
        }
    }
    return itemCount;
}
getCount(products, 'mango');

// Create list of uniquely-named products
var referenceProducts = [];
for (const i of products) {
    if(!referenceProducts.includes(i.name)) {
        referenceProducts.push(i.name);
    }
}
// console.log(referenceProducts);

// Create a list of unique objects along with their counts
for (const i of referenceProducts) {
    shallowProducts.push({
        name: i,
        count: getCount(products, i)
    });
}
// console.log(shallowProducts);

// var products = [
//     {
//         'price': 100,

//     },
//     {
//         'price': 40,

//     },
//     {
//         'price': 20,

//     },
// ];

// // console.log(products.reduce((a, b) => { price: a.price + b.price }), 0)
// // products.reduce(function (a, b) {
//     //     count = { price: a.price + b.price }
//     // });
    
// var count = 0; 
// for (const p of products) {
//     count += p.price;
// }
// console.log(count);

var products = [
    {
        name: 'watermelon',
        price: 5.99,
        image: 'http://placehold.it/300x300'
    },
    {
        name: 'watermlon',
        price: 5.99,
        image: 'http://placehold.it/300x300'
    },
    {
        name: 'watermelon',
        price: 5.99,
        image: 'http://placehold.it/300x300'
    },
    {
        name: 'pear',
        price: 5.99,
        image: 'http://placehold.it/300x300'
    },
]

// var emptyProducts = []

// for (let i of products) {
//     console.log(!emptyProducts.includes(i))
//     if (!emptyProducts.includes(i) === true) {
//         emptyProducts.push(i);
//     }
//     else {
//         continue;
//     }
// }

// console.log(emptyProducts)

// const array = [
//     { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
//     { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
//     { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
//     { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
//   ];
const result = [];
const map = new Map();
for (const item of products) {
    if(!map.has(item.name)){
        map.set(item.name, true);    // set any value to Map
        result.push({
            name: item.name,
            price: item.price
        });
    }
}
console.log(result)