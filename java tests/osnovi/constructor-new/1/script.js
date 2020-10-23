// Создание калькулятора при помощи конструктора
// важность: 5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


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