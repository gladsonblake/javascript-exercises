const fibonacci = function (num) {
    // if (num < 0) { return "OOPS" }
    try {
        num = parseInt(num)
        expect(num >= 0).toBe(true)
    } catch {
        return "OOPS"
    }
    let num1 = 0
    let num2 = 1
    let answer = num
    for (i = 1; i < num; i++) {
        answer = num1 + num2
        num1 = num2
        num2 = answer
    }
    return answer
};

// Do not edit below this line
module.exports = fibonacci;
