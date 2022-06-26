// Write a function that returns both the minimum and maximum number of the given list/array. 

const profit = (array) => {
    if(array.length === 1){ 
        return array.concat(array)
    }
    else {
        let result = array.sort((a, b) => {return a - b});
        result = [result.shift(), result.pop()];
        return result;
    }
}
console.log(profit([5, 4]));

module.exports = profit