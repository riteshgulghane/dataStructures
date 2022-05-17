function transitionPoint(arr, n) {
    // code here
    if (arr[0] === 1)
        return 0;
    let answer = -1;
    for (let i = 1; i < n + 1; i++) {
        if (arr[i - 1] - arr[i]) {
            answer = i
        }
    }
    return answer;

}

let myarr = [1];
console.log(transitionPoint(myarr, myarr.length));
