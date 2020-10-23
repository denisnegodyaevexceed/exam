// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let calculator = {
    read() {
        this.firstNumber = +prompt('Введите 1 число', 0);
        this.secondNumber = +prompt('Введите второе число', 0);
    },
    sum() {
        return this.firstNumber + this.secondNumber
    },

};
calculator.read();
alert(calculator.sum());