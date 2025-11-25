const leapYears = function (year) {
    if (!(Number.isInteger(year) && year >= 0)) {
        return "ERROR"
    } else {
        if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
            return true
        } else { return false }
    }

};

console.log(leapYears(4))

// Do not edit below this line
module.exports = leapYears;
