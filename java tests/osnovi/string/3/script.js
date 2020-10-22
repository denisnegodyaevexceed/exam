function truncate(str, maxlength) {
    str = prompt('введите строку');
    maxlength = +prompt('введите максимально количество символов', 0);


    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
};
let result = truncate();
alert(result);