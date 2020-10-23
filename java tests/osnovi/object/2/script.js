// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        if (obj[key] != undefined) {
            return false;
        }
    }
    return true;
}

alert(isEmpty(schedule));