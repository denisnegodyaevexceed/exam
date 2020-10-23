// Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max) {
    let n = min + Math.random() * (max - min);
    return n.toFixed(0);
}

alert(randomInteger(0, 7));
alert(randomInteger(0, 5));
alert(randomInteger(0, 4));
alert(randomInteger(0, 5));
alert(randomInteger(0, 3));