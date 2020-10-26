// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

function shuffle(array) {
    array.sort(() => (Math.random() - 0.5));
}

let array = [1, 2, 3, 4, 5, 6, 7];
shuffle(array);
alert(array);