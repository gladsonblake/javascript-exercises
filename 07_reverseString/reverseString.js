const reverseString = function (string) {
    // Get the length of the string
    stringLength = string.length

    let reversedString = ""
    for (i = 1; i < stringLength + 1; i++) {
        console.log(i)
        reversedString += string.at(-i)
        console.log(string.at(-i))
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
