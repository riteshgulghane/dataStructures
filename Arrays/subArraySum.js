function subarraySum(arr, n, s) {
    //your code here
    let currSum = 0;
    let start = 0;
    let end = -1;
    let obj = new Map();

    for (let i = 0; i < n; i++) {
        currSum += arr[i];
        if((currSum - s) == 0){
            start = 1;
            end = i + 1;
            break;
        }

        if(obj.get(currSum - s) != undefined) {
            start = obj.get(currSum - s) + 1;
            end = i + 1;
            break;
        }
        obj.set(currSum, i + 1);
    }
    let answer = []
    if(end == -1) {
        answer.push(end);
    }else {
        answer.push(start);
        answer.push(end);
    }
    return answer;
}

// let arr = "135 101 170 125 79 159 163 65 106 146 82 28 162 92 196 143 28 37 192 5 103 154 93 183 22 117 119 96 48 127 172 139 70 113 68 100 36 95 104 12 123 134".split(' ');
let arr = [135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134];
// let arr = [1,2,3,4,5,6,7,8,9,10 ];
// let arr = [1,2,3,7,5];

console.log(subarraySum(arr, arr.length, 468))