const vowelCounter = (str) => {
    result = 0;
    dataBase = ["a", "e", "i", "o", "u"];
    for(let i = 0; i <= str.length; i++) {
        if(dataBase.includes(str.charAt(i))) {
            result++;
        }
    }
    return result;
}
console.log(vowelCounter("iguna la rana"));
module.exports = vowelCounter;