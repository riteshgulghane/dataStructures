/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
*/

// Given an array of N integers, and an integer K, 
// find the number of pairs of elements in the array whose sum is equal to K.

// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

function getPairsCount(arr, n, k) {
    // code here

    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === k) {
                count++;
            }
        }
    }
    return count;

}

let myarr = [1, 5, 7, 1];
let sum = 6;
console.log(getPairsCount(myarr, myarr.length, sum));
