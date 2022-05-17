function peakElement(arr, n) {
    // code here
    if (arr.length === 0) {
        return -1;
    }

    let max = 0;
    arr.push(-Infinity);
    for (let i = 1; i <= n; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            max = i;
        }
    }
    return max;

}

let myarr = [3,4];
console.log(peakElement(myarr, myarr.length));
