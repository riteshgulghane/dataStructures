console.log("ritesh - ", `${new Date().getHours()}:${new Date().getMinutes()}`);

let arrFirst = [1, 2, 4, 2];
let arrSec = [1, 4, 16, 4];

function checkIsSquare(arr1, arr2) {
    let map1 = {};
    let map2 = {};

    for (let i = 0; i < arr1.length; i++) {
        map1[arr1[i]] = (map1[arr1[i]] || 0) + 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        map2[arr2[i]] = (map2[arr2[i]] || 0) + 1;
    }

    for (let key in map1) {
        if (!map2[key * key]) {
            return false;
        } else if (map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true;
}

console.log(checkIsSquare(arrFirst, arrSec));