// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu)