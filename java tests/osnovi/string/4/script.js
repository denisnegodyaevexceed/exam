function extractCurrencyValue(str) {
    let sum = +prompt('введите цену', 0);
    let sumCopy = '$' + sum;
    toString(sumCopy);
    alert(sumCopy);

    let sliceCopy = sumCopy.slice(1, 1000000);
    toString(sliceCopy);

    return sliceCopy;

};
let result = extractCurrencyValue();
alert(result);