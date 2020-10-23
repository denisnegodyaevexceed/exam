// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function fff() {

    let name = prompt('введите строку', '');
    let low = name.toLowerCase();
    if (low.indexOf('xxx') && low.indexOf('viagra')) {
        return false;
    } else {

        return true;
    };

};
let result = fff();
console.log(result);