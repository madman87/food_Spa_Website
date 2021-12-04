// similar that spread just the opposite, like *args in python

const log = function(a,b, ...rest) {
    console.log(a,b,rest);
};

log('besic','sdfd','sdfd'); 

//////
function calcDouble(number,basis=2) {
    console.log(number*basis);
}

calcDouble(3);