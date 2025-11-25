const sumAll = function (firstNum, secondNum) {

    if (!(Number.isInteger(firstNum) && Number.isInteger(secondNum) && firstNum >= 0 && secondNum >= 0)) {
        return "ERROR"
    }

    max_num = Math.max(firstNum, secondNum)
    min_num = Math.min(firstNum, secondNum)
    console.log(min_num, max_num)
    loops = max_num - min_num

    let sum = 0;

    for (i = min_num; i <= max_num; i++) {
        console.log(i)
        sum += i
        // console.log(sum)
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
