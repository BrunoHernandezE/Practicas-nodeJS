const fizzbuzz = (n) => {
    resultArray = [];
   for(let i = 1; i < n + 1; i++) {
    i % 3=== 0 && i % 5 === 0 ? resultArray.push("FizzBuzz") : i % 3 === 0 ? resultArray.push("Fizz") : i % 5 === 0 ? resultArray.push("Buzz") : resultArray.push(i);
   }
   return resultArray;
}

module.exports = fizzbuzz;