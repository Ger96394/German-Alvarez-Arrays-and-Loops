function arrayMultiples(number, length) {
    const multiples = [];
    for (let i = 1; i <= length; i++) {
        multiples.push(number * i); 
    }
    return multiples;
}

console.log(arrayMultiples(2, 10));  // [3, 6, 9, 12, 15]
console.log(arrayMultiples(17, 6));  // [2, 4, 6, 8]
console.log(arrayMultiples(10, 15));  // [5, 10, 15]
