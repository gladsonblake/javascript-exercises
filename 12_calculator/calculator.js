const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (numArray) {
  let answer = 0
  for (const num of numArray) {
    answer += num
  }
  return answer
};

const multiply = function (numArray) {
  let product = 1
  for (const num of numArray) {
    product *= num
  }
  return product
};

const power = function (baseNum, exponent) {
  return baseNum ** exponent

};

const factorial = function (num) {
  let answer = 1
  for (let i = num; i > 0; i--) {
    answer *= i
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
