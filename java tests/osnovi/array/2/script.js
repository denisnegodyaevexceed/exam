function sumInput() {
    let elem = prompt("Введите число");
    let sum = 0;
    let arr = [];
    while (Number(elem)) {
        arr.push(elem);
        elem = prompt("Введите число");
    }
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

console.log(sumInput());