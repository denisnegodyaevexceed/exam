function randomInteger(min, max) {
    let n = min + Math.random() * (max - min);
    return n.toFixed(0);
}

alert(randomInteger(0, 7));
alert(randomInteger(0, 5));
alert(randomInteger(0, 4));
alert(randomInteger(0, 5));
alert(randomInteger(0, 3));