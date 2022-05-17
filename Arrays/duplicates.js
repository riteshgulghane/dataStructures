function duplicates(a, n) {
    //your code here

    // let result = new Set();
    // let map = new Set();
    // for (let i = 0; i < n; i++) {
    //     if (map.has(a[i])) {
    //         result.add(a[i])
    //     } else {
    //         map.add(a[i])
    //     }
    // }
    // let ans = Array.from(result)
    // if (ans.length)
    //     return ans;
    // return [-1];


    let sortedArr = a.sort((a, b) => a - b);

    let isAdd = true;
    let result = [];
    for (let i = 1; i < n; i++) {
        if (sortedArr[i - 1] === sortedArr[i]) {
            if (isAdd) {
                result.push(sortedArr[i]);
                isAdd = false;
            }
        } else {
            isAdd = true;
        }
    }

    if (result.length)
        return result;
    return [-1];

}

// let arr = [0, 3, 1, 2];
let arr = [2, 3, 1, 2, 3];

console.log(duplicates(arr, arr.length));
