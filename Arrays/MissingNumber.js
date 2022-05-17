function MissingNumber(array, n) {
    //code here
    array.push(0);
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += array[i] - (i + 1);
    }
    return Math.abs(result);
}

// let arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
let arr = [1, 2, 3, 5];

console.log(MissingNumber(arr, arr.length));