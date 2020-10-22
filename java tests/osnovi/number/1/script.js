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