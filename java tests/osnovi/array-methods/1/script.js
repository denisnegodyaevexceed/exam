// Переведите текст вида border - left - width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида« my - short - string» в« myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

//     camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S.Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            str[i] = '';
            str[i + 1] = str[i + 1].toUpperCase();
        }
    }
    return str.join('');
}


alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))