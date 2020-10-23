// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

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