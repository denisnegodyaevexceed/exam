// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read() {
        this.firstNumber = +prompt('Введите 1 число', 0);
        this.secondNumber = +prompt('Введите второе число', 0);
    },
    sum() {
        return this.firstNumber + this.secondNumber
    },
    mul() {
        return this.firstNumber * this.secondNumber
    }
};
calculator.read();
console.log(calculator.sum(), calculator.mul());