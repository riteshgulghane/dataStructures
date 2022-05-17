/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

//  n = 6
//  A[] = {16,17,4,3,5,2}
//  Output: 17 5 2
//  Explanation: The first leader is 17 
//  as it is greater than all the elements
//  to its right.  Similarly, the next 
//  leader is 5. The right most element 
//  is always a leader so it is also 
//  included.

function leaders(arr, n) {
    // code here

    let answer = [];
    let max = arr[n-1];
    for (let i = n - 1; i >= 0; i--) {
        if(arr[i] >= max) {
            max = arr[i];
            answer.push(arr[i]);
        }
    }

    return answer.reverse();

}

let myarr = [1,2,3,4,0];
console.log(leaders(myarr, myarr.length));
