const repeatString = function (string, num) {

    if (num < 0) { return "ERROR" }
    else if (num == 0) { return "" }
    else {
        let returnText = ""
        for (let i = 0; i < (num); i++) {
            returnText += string
        }
        return returnText
    }
};

// Do not edit below this line
module.exports = repeatString;
