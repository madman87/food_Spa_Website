"use strict";

//filter gives out new array

// const names =['Ivan','Ann','Sasha','Ksenia','jhsghbjyhgv'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map gives out new array

// let answers =['Ivan','Anmsn','Hello'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

// every/some

// const some = [4,'wer','wqedghfd'];
// // console.log(some.some(item => typeof(item)==='number'));
// console.log(some.every(item => typeof(item)==='number'));

//reduce

// const arr = [4,5,1,3,4,6];
// const res =arr.reduce((sum,current) => sum+current);
// console.log(res);

const obj ={
    ivan: "person",
    ann:'person',
    cat:'animal',
    dog:'animal'
};

// Obj transfer to arrays =>
const newArr=Object.entries(obj)
.filter(item => item[1]==='person')
.map(item => item[0]);

console.log(newArr);

