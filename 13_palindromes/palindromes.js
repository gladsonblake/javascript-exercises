const palindromes = function (text) {
    text = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

    let reversedText = text.split("").reverse().join("")

    return reversedText === text
};

// Do not edit below this line
module.exports = palindromes;
