// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.


function pow(x, n) {
    if (n == 1) {
        return x;
    }
    return x ** n;
}
alert(pow(3, 3));