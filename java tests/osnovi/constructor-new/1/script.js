function Calc(name) {
    this.read = function() {
        this.a = +prompt('Введите первое число', 0);
        this.b = +prompt('Введите второе число', 0);
    };
    this.sum = function() {
        return alert(this.a + this.b);
    };
    this.mul = function() {
        return alert(this.a * this.b);
    };

};

let calculator = new Calc;
calculator.read();
calculator.sum();
calculator.mul();