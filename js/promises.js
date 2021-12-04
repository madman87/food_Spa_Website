"use strict";

// console.log('asking data...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing Data...');

//         const product = {
//             name: "TV",
//             price: 2000
//         };

//         // reject();
//         resolve(product);
//     }, 2000);
// });


// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify=true;
//     return data; 
// }).then((data)=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() =>{
//     console.log('finally');
// });


const test = time => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(),time);
    });
};

// test(1000).then(() => console.log("1000ms"));
// test(2000).then(() => console.log("2000ms"));

// for multiple promises to be executed first
// Promise.all([test(1000),test(2000)]).then(()=>{
//     console.log('ALL');
// });

//for fastest promise and after then
Promise.race([test(1000),test(2000)]).then(()=>{
    console.log('ALL');
});