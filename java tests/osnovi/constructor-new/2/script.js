function Accumulator(value) {
    this.value = value;

    this.read = function() {
        let num = +prompt('Число?', '');
        this.value += num;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений