function fff() {

    let name = prompt('введите строку', '');
    let low = name.toLowerCase();
    if (low.indexOf('xxx') && low.indexOf('viagra')) {
        return false;
    } else {

        return true;
    };

};
let result = fff();
console.log(result);