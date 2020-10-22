function getMaxSub(arr) {

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            i;
        } else {
            let sum = 0;
            for (let k = i; k < arr.length; k++) {
                sum += arr[k];
                max = (sum > max) ? sum : max;
            }
        }
    }
    return console.log(max);
}
getMaxSub([2, -1, 2, 3, -9])