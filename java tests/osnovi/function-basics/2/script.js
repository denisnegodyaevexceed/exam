// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:



function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let result = min(22, 44);
alert(result);