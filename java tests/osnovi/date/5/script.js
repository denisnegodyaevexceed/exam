// Последнее число месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
    let thisMonth = new Date(year, month, 1);
    let nextMonth = new Date(year, month + 1, 1);
    return (Math.trunc((nextMonth - thisMonth) / 24 / 3600 / 1000));
}

alert(getLastDayOfMonth(2012, 1));