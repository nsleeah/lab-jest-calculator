const sum = function(number1, number2){
    return number1 + number2;
};

const subtract = function(number1, number2){
    return number1 - number2;
};

const multiply = function(number1, number2){
    return number1 * number2;
};

const divide = function(number1, number2){
    return number1 / number2;
};

const modulus = function (number1, number2) {
    return number1 % number2;
};

const even = function (number1) {
    if(number1 % 2 === 0) { 
        return true;
    } else {
        return false;
    }
};


const odd = function (number1) {
    if (number1 % 2 !== 0) { 
        return true;
    } else {
        return false;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
